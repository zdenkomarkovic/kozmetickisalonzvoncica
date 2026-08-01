import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const GALLERY_IMAGES = [
  { src: "/hero-pedikir-brend.webp", alt: "Pedikir – Beauty & Spa Zvončica" },
  { src: "/salon-izlog.webp", alt: "Izlog salona Beauty & Spa Zvončica" },
  { src: "/tretman-lica-1.webp", alt: "Tretman lica u salonu" },
  { src: "/manikir-1.webp", alt: "Manikir – detalj noktiju" },
  { src: "/salon-nokti-polica-1.webp", alt: "Kolekcija lakova za nokte" },
  { src: "/salon-enterijer-ogledala.webp", alt: "Enterijer salona" },
  { src: "/masaza-1.jpg", alt: "Masaža u salonu" },
  { src: "/salon-polica-proizvodi.webp", alt: "Kozmetički proizvodi u salonu" },
  { src: "/salon-nokti-polica-2.webp", alt: "Vitrina sa lakovima za nokte" },
  { src: "/manikir-2.jpg", alt: "Francuski manikir" },
];

export function Gallery() {
  return (
    <section id="galerija" className="bg-blush/30 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Iz salona"
          title="Galerija"
          description="Pogled na naš prostor i deo radova – za više fotografija i objava pratite nas na Instagramu."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.src}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
