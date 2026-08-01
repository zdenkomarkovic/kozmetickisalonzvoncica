import { z } from "zod";

// Validacija environment varijabli na runtime
// Dodaj ovde sve env varijable koje projekat koristi

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_SITE_NAME: z.string().default("My Site"),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),

  MAILJET_API_KEY: z.string().min(1).optional(),
  MAILJET_SECRET_KEY: z.string().min(1).optional(),
  SITE_MAIL_SENDER: z.string().email().optional(),
  SITE_MAIL_RECEIVER: z.string().email().optional(),
});

// Ovo ce baciti gresku ako env varijable nisu ispravno postavljene
const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Neispravne environment varijable:");
  console.error(parsed.error.flatten().fieldErrors);
  // U produkciji, odmah zaustavi aplikaciju
  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}

export const env = parsed.success ? parsed.data : envSchema.parse({});
