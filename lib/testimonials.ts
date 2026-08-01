export type Testimonial = {
  name: string;
  rating: number;
  quote: string;
};

/**
 * Stvarne recenzije preuzete sa Google profila salona (Google Maps).
 * Ažurirati po potrebi kada stignu nove recenzije.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ivana Milosevic",
    rating: 5,
    quote: "Odlično! Veoma profesionalno.",
  },
  {
    name: "Ksenija Stefanovic",
    rating: 5,
    quote: "Tačnost, higijena, kvalitet, profesionalizam.",
  },
  {
    name: "Biljana Lazarevic",
    rating: 4,
    quote: "Odlično!",
  },
];
