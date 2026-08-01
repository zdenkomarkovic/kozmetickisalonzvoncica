import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import {
  GOOGLE_PROFILE_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
} from "@/lib/constants";
import { TESTIMONIALS } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <section id="utisci" className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Utisci klijenata"
          title="Šta kažu naši klijenti"
          description="Zadovoljstvo klijenata nam je najveća preporuka."
        />

        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2">
            <span className="flex text-gold" aria-hidden="true">
              {"★".repeat(Math.round(GOOGLE_RATING))}
              <span className="text-blush-dark/60">
                {"★".repeat(5 - Math.round(GOOGLE_RATING))}
              </span>
            </span>
            <span className="font-serif text-lg text-ink">{GOOGLE_RATING}</span>
          </div>
          <p className="text-sm text-ink/60">
            na osnovu {GOOGLE_REVIEW_COUNT} Google recenzija
          </p>
          <LinkButton
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Pročitajte sve recenzije na Google-u
          </LinkButton>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <figure
              key={index}
              className="flex flex-col rounded-2xl border border-blush/70 bg-blush/20 px-6 py-6"
            >
              <span className="text-gold" aria-hidden="true">
                {"★".repeat(testimonial.rating)}
                <span className="text-blush-dark/60">
                  {"★".repeat(5 - testimonial.rating)}
                </span>
              </span>
              <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-ink/75">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 border-t border-blush-dark/30 pt-4">
                <p className="font-serif text-base text-ink">{testimonial.name}</p>
                <p className="text-xs tracking-wide text-gold-dark uppercase">
                  Google recenzija
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
