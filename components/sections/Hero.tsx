import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE_PHONE, SITE_PHONE_HREF, SOCIAL_INSTAGRAM } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-blush/50 via-cream to-cream"
    >
      <Container className="grid items-center gap-8 py-6 sm:gap-12 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="order-2 lg:order-1">
          <h1 className="mb-4 text-sm font-semibold tracking-[0.25em] text-gold-dark uppercase">
            Kozmetički salon Zvončica, Voždovac, Beograd – Gostivarska 50a
          </h1>
          <h2 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Lepota počinje <br className="hidden sm:block" />
            od <span className="italic text-gold-dark">malih detalja</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
            Beauty &amp; Spa Zvončica je vaš prostor za negu, opuštanje i uživanje – manikir i
            pedikir, depilacija, masaže, maderoterapija i tretmani lica na jednom mestu.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <LinkButton href={SITE_PHONE_HREF} variant="primary">
              Pozovite: {SITE_PHONE}
            </LinkButton>
            <LinkButton href="/cenovnik" variant="outline">
              Pogledajte cenovnik
            </LinkButton>
          </div>

          <div className="mt-10 flex items-center gap-8 border-t border-blush pt-8">
            <Stat label="Nega" />
            <Stat label="Lepota" />
            <Stat label="Relaksacija" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-xl shadow-ink/10">
            <Image
              src="/tretman-lica-2.webp"
              alt="Tretman lica u salonu Beauty & Spa Zvončica"
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>

      <a href={SOCIAL_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="sr-only">
        Pratite nas na Instagramu
      </a>
    </section>
  );
}

function Stat({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      <span className="text-sm font-medium tracking-wide text-ink/70">{label}</span>
    </div>
  );
}
