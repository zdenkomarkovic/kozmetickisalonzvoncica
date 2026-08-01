"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Ovde dodaj logging (Sentry, itd.)
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="font-serif text-2xl text-ink">Došlo je do greške</h1>
      <p className="max-w-sm text-ink/70">Nešto nije u redu. Pokušajte ponovo.</p>
      <button
        onClick={reset}
        className="mt-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-gold-dark"
      >
        Pokušaj ponovo
      </button>
    </main>
  );
}
