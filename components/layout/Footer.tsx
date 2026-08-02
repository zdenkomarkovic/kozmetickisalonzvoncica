import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  GOOGLE_MAPS_LINK,
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_PHONE_HREF,
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
} from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Početna" },
  { href: "/#usluge", label: "Usluge" },
  { href: "/cenovnik", label: "Cenovnik" },
  { href: "/#galerija", label: "Galerija" },
  { href: "/#o-nama", label: "O nama" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/80">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-1 ring-gold/40">
              <Image
                src="/logo.jpg"
                alt="Beauty & Spa Zvončica"
                fill
                sizes="96px"
                className="object-cover"
              />
            </span>
            <p className="font-serif text-2xl text-cream">
              Beauty<span className="text-gold">&amp;</span>Spa{" "}
              <span className="italic">Zvončica</span>
            </p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            Lepota počinje od malih detalja. Vaš prostor za negu, opuštanje i
            uživanje u Beogradu.
          </p>
          <div className="mt-5 flex items-center gap-4">
            <a
              href={SOCIAL_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/70 transition-colors hover:text-gold"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href={SOCIAL_FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/70 transition-colors hover:text-gold"
              aria-label="Facebook"
            >
              Facebook
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            Navigacija
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            Kontakt
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                {SITE_ADDRESS}
              </a>
            </li>
            <li>
              <a href={SITE_PHONE_HREF} className="transition-colors hover:text-gold">
                {SITE_PHONE}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="transition-colors hover:text-gold"
              >
                {SITE_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-center text-xs text-cream/50 sm:flex-row sm:text-left">
          <p>
            © {year} Beauty &amp; Spa Zvončica. Sva prava zadržana.
          </p>
          <p>{SITE_ADDRESS}</p>
          <p>
            Izrada sajta{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              Manikam Web Solutions
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
