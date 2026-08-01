import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { PriceList } from "@/components/cenovnik/PriceList";
import {
  BOOKING_EMAIL_URL,
  BOOKING_LIME_URL,
  BOOKING_SREDIME_URL,
} from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Cenovnik",
  description:
    "Kompletan cenovnik usluga salona Beauty & Spa Zvončica – manikir, pedikir, depilacija, masaže, tretmani lica i tela, obrve.",
});

export default function CenovnikPage() {
  return (
    <main className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Cenovnik"
          title="Usluge i cene"
          description="Izaberite kategoriju i pronađite tretman koji vam odgovara. Za zakazivanje koristite dugmad ispod ili nas pozovite telefonom."
        />

        <div className="mt-10">
          <PriceList />
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-ink/60">
            Zakažite termin online ili nas pozovite telefonom.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LinkButton
              href={BOOKING_LIME_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
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
    </main>
  );
}
