import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { TreatmentHighlights } from "@/components/sections/TreatmentHighlights";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import {
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_URL,
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
} from "@/lib/constants";
import { FAQ_ITEMS } from "@/lib/faq";

export const metadata = buildMetadata({
  title: "Kozmetički salon u Beogradu",
  description:
    "Beauty & Spa Zvončica – depilacija, manikir i pedikir, masaže, maderoterapija i tretmani lica. Gostivarska 50a, Beograd.",
  isRootPage: true,
});

export default function HomePage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: SITE_NAME,
          image: `${SITE_URL}/hero-pedikir-brend.webp`,
          telephone: SITE_PHONE,
          email: SITE_EMAIL,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Gostivarska 50a",
            addressLocality: "Beograd",
            addressCountry: "RS",
          },
          url: SITE_URL,
          sameAs: [SOCIAL_FACEBOOK, SOCIAL_INSTAGRAM],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: GOOGLE_RATING,
            reviewCount: GOOGLE_REVIEW_COUNT,
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />
      <Hero />
      <TreatmentHighlights />
      <Gallery />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
