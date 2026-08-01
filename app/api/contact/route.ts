import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

// Kontakt forma - salje email preko Mailjet API-ja
// POST /api/contact

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, phone, message } = parsed.data;

  const apiKey = process.env.MAILJET_API_KEY;
  const secretKey = process.env.MAILJET_SECRET_KEY;
  const sender = process.env.SITE_MAIL_SENDER;
  const receiver = process.env.SITE_MAIL_RECEIVER;

  if (!apiKey || !secretKey || !sender || !receiver) {
    console.error("Mailjet nije konfigurisan (nedostaju env varijable).");
    return NextResponse.json(
      { success: false, message: "Slanje poruke trenutno nije dostupno." },
      { status: 500 }
    );
  }

  const textPart = [
    `Nova poruka sa sajta Beauty & Spa Zvončica`,
    ``,
    `Ime: ${name}`,
    `Email: ${email}`,
    phone ? `Telefon: ${phone}` : null,
    ``,
    `Poruka:`,
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${apiKey}:${secretKey}`).toString("base64")}`,
    },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: sender, Name: "Sajt Beauty & Spa Zvončica" },
          To: [{ Email: receiver }],
          ReplyTo: { Email: email, Name: name },
          Subject: `Nova poruka sa sajta – ${name}`,
          TextPart: textPart,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Mailjet greska:", response.status, errorBody);
    return NextResponse.json(
      { success: false, message: "Slanje poruke nije uspelo. Pokušajte ponovo." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
