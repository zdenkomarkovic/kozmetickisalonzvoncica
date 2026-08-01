// Globalne konstante sajta
// Ove vrednosti se koriste za SEO, metadata, itd.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME ?? "Beauty & Spa Zvončica";

export const SITE_DESCRIPTION =
  "Beauty & Spa Zvončica – kozmetički salon u Beogradu. Depilacija, manikir i pedikir, masaže, maderoterapija i tretmani lica.";

export const SITE_ADDRESS = "Gostivarska 50a, Beograd";

export const SITE_PHONE = "+381 62 290209";
export const SITE_PHONE_HREF = "tel:+38162290209";

export const SITE_EMAIL = "salonzvoncica@gmail.com";

export const SOCIAL_FACEBOOK =
  "https://www.facebook.com/zvoncicasalon/?ref=NONE_xav_ig_profile_page_web";
export const SOCIAL_INSTAGRAM = "https://www.instagram.com/beautyzvoncica/";

export const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=Gostivarska+50a,+Beograd&output=embed";
export const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Gostivarska+50a,+Beograd";

export const BOOKING_LIME_URL =
  "https://form.lime-booking.com/sr/beautyspavoncica/service";
export const BOOKING_SREDIME_URL =
  "https://www.sredime.rs/widget/beauty-spa-zvoncica";
export const BOOKING_EMAIL_URL = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(
  "Zakazivanje termina"
)}&body=${encodeURIComponent(
  "Pozdrav,\n\nŽelela/želeo bih da zakažem termin za:\nUsluga: \nŽeljeni datum i vreme: \n\nHvala!"
)}`;

export const GOOGLE_PROFILE_URL = "https://www.google.com/maps?cid=8249934962771300659";
export const GOOGLE_RATING = 4.6;
export const GOOGLE_REVIEW_COUNT = 25;
