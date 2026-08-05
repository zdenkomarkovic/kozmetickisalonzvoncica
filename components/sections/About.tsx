import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SITE_ADDRESS } from "@/lib/constants";

const VALUES = [
  {
    title: "Nega",
    description: "Pažljivo odabrani tretmani prilagođeni potrebama vaše kože i tela.",
  },
  {
    title: "Lepota",
    description: "Kompletna ponuda za nokte, lice i telo na jednom mestu.",
  },
  {
    title: "Relaksacija",
    description: "Miran prostor u kom možete da se opustite i odvojite vreme za sebe.",
  },
];

export function About() {
  return (
    <section id="o-nama" className="bg-cream py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] shadow-xl shadow-ink/10">
          <Image
            src="/salon-enterijer-ogledala.webp"
            alt="Izlog salona Beauty & Spa Zvončica, Gostivarska 50a"
            fill
            sizes="(min-width: 1024px) 40rem, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-gold-dark uppercase">
            O nama
          </p>
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">
            Vaš mirni kutak lepote u Beogradu
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
            Beauty &amp; Spa Zvončica nalazi se na adresi {SITE_ADDRESS}. U našem salonu spajamo
            kozmetičke tretmane, negu noktiju i opuštajuće masaže, kako biste na jednom mestu
            pronašli sve što vam je potrebno za negu i trenutak predaha.
          </p>

          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title}>
                <dt className="font-serif text-lg text-gold-dark">{value.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink/65">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
