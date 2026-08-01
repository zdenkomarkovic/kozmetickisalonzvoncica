import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Stranica nije pronađena",
  noIndex: true,
});

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <p className="font-serif text-6xl text-gold-dark">404</p>
      <h1 className="font-serif text-2xl text-ink">Stranica nije pronađena</h1>
      <p className="max-w-sm text-ink/70">
        Stranica koju tražite ne postoji ili je premeštena.
      </p>
      <Link
        href="/"
        className="mt-4 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-gold-dark"
      >
        Vrati se na početnu
      </Link>
    </main>
  );
}
