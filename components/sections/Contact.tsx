"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, LinkButton } from "@/components/ui/Button";
import {
  BOOKING_EMAIL_URL,
  BOOKING_LIME_URL,
  BOOKING_SREDIME_URL,
  GOOGLE_MAPS_EMBED_SRC,
  GOOGLE_MAPS_LINK,
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_PHONE_HREF,
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
} from "@/lib/constants";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? "") || undefined,
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message ?? "Slanje poruke nije uspelo.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Slanje poruke nije uspelo."
      );
    }
  }

  return (
    <section id="kontakt" className="bg-blush/30 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Zakažite termin"
          title="Kontakt"
          description="Javite nam se telefonom, porukom ili putem društvenih mreža – rado ćemo odgovoriti na sva pitanja."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <LinkButton
            href={BOOKING_LIME_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Zakažite online – Lime
          </LinkButton>
          <LinkButton
            href={BOOKING_SREDIME_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Zakažite online – Sredime
          </LinkButton>
          <LinkButton href={BOOKING_EMAIL_URL} variant="outline">
            Zakažite mejlom
          </LinkButton>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard label="Adresa">
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-dark"
                >
                  {SITE_ADDRESS}
                </a>
              </InfoCard>
              <InfoCard label="Telefon">
                <a href={SITE_PHONE_HREF} className="hover:text-gold-dark">
                  {SITE_PHONE}
                </a>
              </InfoCard>
              <InfoCard label="Email">
                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-gold-dark">
                  {SITE_EMAIL}
                </a>
              </InfoCard>
              <InfoCard label="Društvene mreže">
                <div className="flex flex-col gap-1">
                  <a
                    href={SOCIAL_INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-dark"
                  >
                    Instagram
                  </a>
                  <a
                    href={SOCIAL_FACEBOOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-dark"
                  >
                    Facebook
                  </a>
                </div>
              </InfoCard>
            </div>

            <div className="h-64 w-full overflow-hidden rounded-2xl border border-blush-dark/40 sm:h-full sm:min-h-[16rem]">
              <iframe
                src={GOOGLE_MAPS_EMBED_SRC}
                title={`Mapa – ${SITE_ADDRESS}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-3xl bg-white/70 p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Ime i prezime" name="name" required autoComplete="name" />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>
            <Field
              label="Telefon (opciono)"
              name="phone"
              type="tel"
              autoComplete="tel"
            />
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-ink/80"
              >
                Poruka
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                className="w-full rounded-xl border border-blush-dark/50 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
                placeholder="Opišite želeni termin ili tretman..."
              />
            </div>

            <Button type="submit" disabled={status === "loading"} className="mt-2">
              {status === "loading" ? "Slanje..." : "Pošaljite poruku"}
            </Button>

            {status === "success" && (
              <p className="text-sm font-medium text-green-700">
                Hvala! Vaša poruka je poslata, javićemo vam se uskoro.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-600">
                {errorMessage ?? "Došlo je do greške. Pokušajte ponovo."}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}

function InfoCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-blush-dark/40 bg-white/60 px-5 py-4">
      <p className="text-xs font-semibold tracking-widest text-gold-dark uppercase">
        {label}
      </p>
      <div className="mt-1.5 text-sm text-ink/80">{children}</div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-blush-dark/50 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
      />
    </div>
  );
}
