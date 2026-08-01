"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import {
  BOOKING_EMAIL_URL,
  BOOKING_LIME_URL,
  BOOKING_SREDIME_URL,
} from "@/lib/constants";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { cn } from "@/lib/utils";

export function TreatmentHighlights() {
  const [active, setActive] = useState(SERVICE_CATEGORIES[0].id);

  const activeCategory = SERVICE_CATEGORIES.find((c) => c.id === active)!;

  return (
    <section id="usluge" className="bg-blush/30 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Upoznajte usluge"
          title="Šta sve nudimo"
          description="Izaberite kategoriju i pročitajte više o svakoj usluzi – šta je i šta možete da očekujete."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {SERVICE_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActive(category.id)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors",
                active === category.id
                  ? "border-gold bg-gold text-cream"
                  : "border-blush-dark text-ink/70 hover:border-gold hover:text-gold-dark"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {activeCategory.items.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-blush-dark/40 bg-white/70 px-6 py-5"
            >
              <p className="font-serif text-base text-ink">{item.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <LinkButton href="/cenovnik" variant="primary">
            Pogledajte kompletan cenovnik
          </LinkButton>
          <p className="text-sm text-ink/60">ili zakažite termin direktno online</p>
          <div className="flex flex-wrap justify-center gap-4">
            <LinkButton
              href={BOOKING_LIME_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              Zakažite – Lime
            </LinkButton>
            <LinkButton
              href={BOOKING_SREDIME_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              Zakažite – Sredime
            </LinkButton>
            <LinkButton href={BOOKING_EMAIL_URL} variant="outline">
              Zakažite mejlom
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
