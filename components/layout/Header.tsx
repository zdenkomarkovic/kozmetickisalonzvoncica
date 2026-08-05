"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SITE_PHONE, SITE_PHONE_HREF, SOCIAL_FACEBOOK, SOCIAL_INSTAGRAM } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Početna" },
  { href: "/#usluge", label: "Usluge" },
  { href: "/cenovnik", label: "Cenovnik" },
  { href: "/#galerija", label: "Galerija" },
  { href: "/#o-nama", label: "O nama" },
  { href: "/#pitanja", label: "Pitanja" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blush/60 bg-cream/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-gold/40">
            <Image
              src="/logo.jpg"
              alt="Beauty & Spa Zvončica"
              fill
              sizes="50px"
              className="object-cover"
            />
          </span>
          <span className="flex flex-col items-center text-center font-serif text-xl leading-tight text-ink sm:text-2xl">
            <span>
              Beauty<span className="text-gold">&amp;</span>Spa
            </span>
            <span className="italic text-gold-dark">Zvončica</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-ink/80 transition-colors hover:text-gold-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={SOCIAL_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-ink/70 transition-colors hover:text-gold-dark"
          >
            <InstagramIcon />
          </a>
          <a
            href={SOCIAL_FACEBOOK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-ink/70 transition-colors hover:text-gold-dark"
          >
            <FacebookIcon />
          </a>
          <a
            href={SITE_PHONE_HREF}
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-gold-dark"
          >
            {SITE_PHONE}
          </a>
        </div>

        <button
          type="button"
          aria-label="Meni"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={cn(
              "h-0.5 w-6 bg-ink transition-transform",
              open && "translate-y-2 rotate-45"
            )}
          />
          <span className={cn("h-0.5 w-6 bg-ink transition-opacity", open && "opacity-0")} />
          <span
            className={cn(
              "h-0.5 w-6 bg-ink transition-transform",
              open && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </Container>

      {open && (
        <div className="border-t border-blush/60 bg-cream lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink/80 hover:bg-blush/40 hover:text-gold-dark"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-4 px-2">
              <a
                href={SOCIAL_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-ink/70 hover:text-gold-dark"
              >
                <InstagramIcon />
              </a>
              <a
                href={SOCIAL_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-ink/70 hover:text-gold-dark"
              >
                <FacebookIcon />
              </a>
            </div>
            <a
              href={SITE_PHONE_HREF}
              className="mt-3 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              Pozovite: {SITE_PHONE}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.5 8.5h2V5.6c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.78-4.92 5.05v2.6H6v3.2h3.63V21h3.3v-4.7h3.15l.5-3.2h-3.65v-2.27c0-.93.25-1.56 1.57-1.56Z"
        fill="currentColor"
      />
    </svg>
  );
}
