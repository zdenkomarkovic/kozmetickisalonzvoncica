"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "@/lib/faq";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="pitanja" className="bg-blush/30 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Česta pitanja"
          title="Pitanja i odgovori"
          description="Odgovori na pitanja koja nam klijenti najčešće postavljaju. Ne pronalazite odgovor koji tražite? Slobodno nas kontaktirajte."
        />

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-blush-dark/40 bg-white/70"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-serif text-base text-ink sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 text-xl text-gold-dark transition-transform duration-200",
                      isOpen && "rotate-45"
                    )}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-ink/70">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
