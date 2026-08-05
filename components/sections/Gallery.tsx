"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";

const GALLERY_IMAGES = [
  { src: "/hero-pedikir-brend.webp", alt: "Pedikir – Beauty & Spa Zvončica" },
  { src: "/tretman-lica-1.webp", alt: "Tretman lica u salonu" },
  { src: "/manikir-1.webp", alt: "Manikir – detalj noktiju" },
  { src: "/salon-nokti-polica-1.webp", alt: "Kolekcija lakova za nokte" },
  { src: "/salon-enterijer-ogledala.webp", alt: "Enterijer salona" },
  { src: "/masaza-1.jpg", alt: "Masaža u salonu" },
  { src: "/salon-polica-proizvodi.webp", alt: "Kozmetički proizvodi u salonu" },
  { src: "/salon-nokti-polica-2.webp", alt: "Vitrina sa lakovima za nokte" },
  { src: "/manikir-2.jpg", alt: "Francuski manikir" },
  { src: "/IMG-25bc8e359a3654e9fb0e264e98a925e4-V.jpg", alt: "Pedikir na plaži" },
  { src: "/IMG-2e2658864d67d254d963fed26b44f22d-V.jpg", alt: "Francuski manikir – detalj" },
  { src: "/IMG-37b265d0fe1a88577ecdc47b43d4fe6b-V.jpg", alt: "Manikir u salonu" },
  { src: "/IMG-5a66187b3da83fe22fded01c0b7fb561-V.jpg", alt: "Pedikir pored bazena" },
  { src: "/IMG-671cec511a998bb456eb78289045dd66-V.jpg", alt: "Šminkanje u salonu" },
  { src: "/IMG-885317d8e50ee4b45398aac1b18edc03-V.jpg", alt: "Francuski manikir – detalj 2" },
  { src: "/IMG-a0cdc1f4c1c6c7f65a5700cda32dae68-V.jpg", alt: "Tretman pete – pre i posle" },
  { src: "/IMG-aca9f925bd7d59bd5ea74c5a27444d33-V.jpg", alt: "Nude manikir" },
  { src: "/IMG-d14d42ae4721e751275e6c3c15d1213f-V.jpg", alt: "Alati za masažu" },
  { src: "/IMG-d42cc106c1c76986a07cd44dbe771e28-V.jpg", alt: "Crveni manikir" },
  { src: "/IMG-d635c16c3d599a39e0cf8483c9c68c7f-V.jpg", alt: "Roze manikir" },
  { src: "/IMG-e07977548090495f6eb1b1cd22e4f445-V.jpg", alt: "Bordo manikir" },
  { src: "/IMG-e9c346c93131352b30f6f95c5c9885b7-V.jpg", alt: "Opuštanje pored bazena" },
  { src: "/Screenshot_20260805_015904_Viber.jpg", alt: "Manikir u teretani" },
];

// Fotografije sa Google Business profila salona (lh3.googleusercontent.com) – linkovane, ne hostovane lokalno.
const GOOGLE_PROFILE_IMAGE_IDS = [
  "AHRPTWlMQj8dJm_SEV1UjJp6eUVtxpmJZJxN81Kc9cmNKuhbvLkpL3J9G8gzWAuLDQBwdB47xkLROZvoS3Wf-zyeY2ieWt0-A0MU0uXpHyH1EXnhz_LaM-1-ReUda6YtPCgQEZMJYCER",
  "AHRPTWnjILxV4qIqWBUY2FWaeTC9-xRLiZgWk42LLVT4DWiOa3pqi-TWS-yIHEhqahR8HkoyU6QJWTFrN-T45cyB-8xKxVMksvIwb7bDZySJ7UzQIeF7X6PkHBu5IvVXcI7a3AzIMEbtXlCpAWY",
  "AHRPTWljbv1vcIrgQISJ-GyOpJy2p1--pa11iYd_-S9c2dQUULbfoTVZHcCYsPnJIKCXp23JQ1dcejGoJQc69Cfq-2GYJaP-G1hTXHJO6hV1t2s6CBy8UXnY9YIktw0FkgfRUvxLNj74Kw",

  "AHRPTWkXnF-oDyymOjyErH9TuXfEtscD1yI4-I_6SU4lJi0gsYcPM_yjfdX_Kf6w_ewI5Bjljfu4Hog8RYyVG7tAQlDwXFSHwWYlGdR44mL5sg8T11xbUbwCvGP5UJbQ4E0cJf72Yugo",
  "AHRPTWlimZO5iOdI8hVLyYVDDiWbCiMoycEtB4xwrB70-43YHtdCUQkNj4zEXNuLe9WTgI7Bd_sMuPEQT2MEzPLdVMGtx9NqvY_0iZNk4E8hsKbHt1yd2fqoYxaPGIm3kMNbp8PCnskCDmB0fn2Q",
  "AHRPTWmUs0z3QQr4LjEvwDHPD8ZEigh3lDF0lTgmuv47pHRx1pnNYs4VXEzC9gfmViuAl91JjcK4K6wCIOLXLgBH109XKoM9psUg0HdhYA8hdAmAYIilf-aSBUxrQO2YMkeSQQB2wUwx",
  "AHRPTWmIjQCDg02mSraHZbn9LBP25Z5263uKt0eOdHok-AAfIjg91H7getyhvbH0sGWCWO3iGf3HtHiP8GKf9e_5Z7MqAEF0VKwE1mkc2vQESNZUacPgrPhulD8G4qndkpJYHy99rsoOSx0eSD2U",
  "AHRPTWmq2vDzvQNBOPlgXOvk1csqz6j_KWcefpRwai06oI1P1L3i62jePg82yCnx_kNoBXIZEXzgYYEFheIT4_SOh3Fna1l64-45c5024J0uHX1eDDfrLxxBoD4L5jrQ51WAySluQoo",
  "AHRPTWlo7olx5QhrpEK_DSWF5XR8j5czCaPSklGZyRz9E_SMWX4G8vjG5gkrRGYvntYwJNF31hPb8v1kvKsJ6wnA1UWetFoSVtYP8LU3O8ZQ6pohm6EICEDls_KXCTiPVw9R-xJdfIYI5kt4QCv8",
  "AHRPTWmQUSd0HDXgNEMC-evaqdLXS2tjooJDezhLA0aqsTF3-yT1G7CYy9AlTJuMVN9R8vNURUvs-7lSf35EbU5UMCPFWMwGdbNt4zW9da5kiRsybEhhK8KIVmLJ2gulyFK0VdHFovp2",
  "AHRPTWlJsxlGPIJfe0dnAs_5g1Ws0bqnpDQcuB5xYb4T4H9tcwNhooITthLDCWAWZF0tHm1-VBuCkqLLbSMhSvtyVfFhJ05josIiVpG4UdE-5WRzFkkHwmK_T4IkmW4x-xxbBleagprXAg",
  "AHRPTWntX9lv0Pd4gRbWSPvZerMSxYZWvJiYxC24DAwl971Bccfe22KuUG0mH_BMD3M4q3bOIYu_2ans3MLQugishuAxtjVCyVUKtAKmLbl471m5CuUwFCYShQX3LA_aWBxcLyhsrVZdiw",
  "AHRPTWnYY_eDN16MrAqqpeYurHbYnyQUdPTXlFoL9JFnugX3-gpfBg2dLTkKwFujxX3gckJ-x3SnDo_GLMHyAWOEk4GXNNk9LWjs49ON1N8BDLcRtivZ47TBk2qhzwrJmd2YPTBuLKxamA",
  "AHRPTWmCWC4AEj9bvTR0W9MStF5kMrwi-o2xsc_H9jiaJ51IyhWdLkmfxjHaKipkVYg9xRO-lN3InMI5-p-kjbkC81vlWy4TUd25cX_gptHGIiZGpBC1XrnFAFBIu9JnkpoJr-kPrdXR4A",
  "AHRPTWkWKOtuYwadYJEc0IzmnFvxNi1GtXNH436idYAjdfCOi202SY9sk6t6lXoVUyR-0OHfLqRopEVhoBY4uUNAUz-30KRVRilN5aqSMEmUyqdZO49MwZN5NVUxq8-pgMRlF7SkzLY",
  "AHRPTWneJAx6qZpgG9nhMIOd5F_Lo16D7pgBhl4jkJfifOrftts-XfXCWraJnGZDWyN0GcSuHtOTQRX6nyc3BOS5ZGl5Hsi06RK6CFocB5dP6ryMYInvZMlC8BIzNj7bZOW6BAmznh9Q",
  "AHRPTWn4R8FX0bH0zidTEM9ZZVLf2AuEG9aQwXnVSgBJOoWO3VlJUr6ykG8koxPPSBmYDbuJjSFBm6Kltb9RCL4A4oRdPQphT4iNL_XtE_yphLv65u4WO8vZn8qK_MgcCzGAfFQPlCc",
  "AHRPTWksn_3nu7AtT-EcZ8al-mgHz1t_CPH8EIbdZEz1MHQpKxi2C7t94x_wangWItw7ThoPINYNfUD9gslV1CoazLhFror1saMw_ibdiaUziOz491GQFMD3AyHNHaeF2JJWDzRT3URR",
  "AHRPTWnhhFHEeZUHEdzekZzSl_a6NIc3aaUjfwgaLuXNVdsuTWAuMluOgTEPbAJg98KDloa9dU7ou7QTndrQXMF0AvQ9Iek76C9pxSipG1GRgye5XjvoLBtkPeX57AwuO2fm9QXUnD5Z",
  "AHRPTWlAzKxvhs8b5h7XnVCnsrBZ-ZduIveWwxhBTTaLPs5xr0zVvmjfejjEfKnAtAqgYfW6VaSEwyAz_Ys63EhmG1bi3HUt_h5ygus0X5VFHNKeIItd-YfI18iwf1r6agrPiqJwE45i",
  "AHRPTWngJmcL36S4hULGmu7oa809Z-YfvD4fid0Lt_hF_DRwPMOxqYPwZ2TtW3zClEUnkmQZyWHI5H7o6X66WE1rctp8bfN8XcD09zi2gABANnzZwaR3ftc7MJWee8ILJMwoOlVDN9Zx",
  "AHRPTWms3Q8ndrO3_PXy5wwkM1PDfRlOxrsT0gl9fXzkNeN3jmGoGgByfmka77V7ea5OMRU8BzSpww-T5JpRR_AdDgkUQZL0Yln2sZbxMhB2TsGKxilvOQzF56MHlqfBTkHdb1Mx7Afnsw",
  "AHRPTWm3scV_a_Q4DloI4VHpl-xP7ETDI_VcXFldoV4zTwthoPhmoUmIMpoUU_fIhxRMc7HLbsgyYJJN5yg4TJIDTs2Zne7uLG1lJVFOCmykqt-auZvFJ5fC3gv8xMRCf2fWzanqoPdf",
  "AHRPTWmQoCIiyQA_KNfACezp6CP--Mev6wQOsSrisERrAlyW7PmV2rmRRL0fZi70bpwI-qkxitHqGeFkRQRu1Hc9Kh_AXv1IX77lyAQlSYEQnB7RjxHsaNuKRFdOQy0JPhhFjFFed8gOEw",
  "AHRPTWkOK8_4OgnLei88GZ4wOa7OTYx7taiAFfIxa-MhyUtCn-U945S66sGxtymZLPOjKBv5IK_yiaIdGmaT41OhdQAAfLc7vutQVjsdmcmJGn2LBuJ-Y84KYxDVGu2t50dH1RkkIdMMeW3MLBf3",
  "AHRPTWkPfbXuIjMF1lKY0bt1lOZlv5wMXDnRKZwWt1fdBZh9GLMsGdjHAcsPNmAJR3KoLExVShIx10ZwVJor7pFfzNF9GCWBz7o9Af4v8EZ4N4_HdDg8eqIctw2PHzOuBX3sN-zVVgu4tA",
  "AHRPTWk8utVUh9Up45TBW2GyE-_bTGP7eZIE2cmwdjTUHiULaXD_e9lBRi7sEOyqcKgBom8GUz2RFnoTCfNZ2xL1nBfnFvqsG26w45z3Jur6dtXgylWsbhlhHSaDkIGh4yCuZZeSqBj5",
  "AHRPTWkV6s8kAqrYgw4yJwqehAZ2rlFxu2Jzx8BhkAJkCrF6-AbkAfASUOVPs8GrZOYVb2LIgCRTA-xLo9M_F2RZP9ZJNPizW6wgUOzWeGoLtkilNAOXQl56VQlQMFcKqtmuxSY1j7yy",
  "AHRPTWlVqPrnd5UrReE7TqV4dQ0ege9RlLtq_Z8yoibUV5FvsKdbkTT81bRQR88TWQgaShda43g9PIXucGNQIBNTabqGzMMBhP0MspxTHUsV-qlfAjPmf3D0HOZ1EDckzHQzswjpDup89A",
  "AHRPTWk7lH4g40o8sCp1PAJMhJ9RfNz84LW_EZpxGAcPWVdLM-oA2VckAI_KzHOD8ZZNApaAV32LipHJbD7C0obPTFtKx4ah9HIlpOY4_Ye6TuvcbEP48NhpX7cHnadcuAw1yc1gqbs",
  "AHRPTWk-roZwvzBw-7BhPo-qdoV3k8ieAD8h68rrB1B0euTRmtQ2BxXItJWlEEM1tVbE5RAQdVSv_6js0G9pm02h24PuegwnhYV7EdsFZYOWdrwYt2MyFMPY6FtE55DsLJ1lULUyytBa",
  "AHRPTWkiXmRqYXcnpOj3q7nAZdHDPErCVuc37BC-QVhz2lweNpfG6yvHPSZkDIUml--OQZ2uDaekCU6mqoe10GYaxM2eA0C2W5f59XWBvpl7DoUgEt-kKlF6YxpKZ4biILFdRvgbKb8dgA",
  "AHRPTWkE1tuFTa3PIJvJBg5ea663nfKOHavji-oLaJNaUlGXPPk3pXU3tMMWeLIBSYJP0EtCv4_YqZybuoD_-UNjFO8wvVrE61vOSSt97eyJh7hQkjPRGU0-3zUOEHs__4nDqV942KpI",
  "AHRPTWlWijJlN8wHc7uASv2w7WwOlBSBPYR-ci1XqUxCpbPdwPvMHPXBvfnVDCxK88KW5vMa2nVAcJye6HedLwkakKWMF45gsaZhK02bAR14U4PbK7XFgijBZf6hwYGoMxyP7f-otatf",
  "AHRPTWn63ih1834iH5YpjlHjr3aM1bFVg_o4pVyrfYkQbGnUZJoaFA72Bt1CaSqlHHRu9I-HsZ8wzTITMbXaZrPDfaBm3OA9-BxwQOIBlI46-wWnTsPePjJjVzvgHuC6HhnyMiKA0FE",
  "AHRPTWlfx0DuOSVNc1JFMBj4fEFIeAtnc0zhlSz1qAjvWqF0kobEiqZjhHiaPvkvDLQWf7z4nx8n88KAmiSE1Ps6PUdlWVyJoulxdqwyQ_hzPsv1FOUApcI__u9FXCA3UgHr2u6HfWKK",
  "AHRPTWk4QVrfOGr5ocr9rr_n1WrvF7wjZ3QSHzI5U7y2n-RoFRKSMK8L7VA16e7BhKMo0Fbv-hsn4Mr8ZzkmWLqoRe5kVzHbOQ15DSRhqs7xvqhouvxv3Ctw8HFPirsQi-pVetS3oi4",
  "AHRPTWlKBMuaEYXsvxcOyntEXuPdRotQH3K-MWGfZVIBmVcBQDZ3oMWoUOGCf2mwjQdkwZTT_OC7rIgOysBzf3H5BbuYlJ31bpxiyaH0KSZ8NO8KRC-UXDzA89L8PFPxYKUleQ0KUtVxBQ",
  "AHRPTWnKG4-ggwm0i5RD4oxzIXu0VywpN3x-R-1GvJa1eI8b2zO_1dbT8nFW5LwaMvxWv7FRqjwsw8bKuLW_QaZfN0ev_kYR_GZBimi4nCir-cO24Cr3ImR2MJEt2wLfUHaduUeRhiK9mbxpU4I",
  "AHRPTWkkczL6Cw9FTS-vpDuw572ZNMbO6ySscvtOq9-5GRBdwkxHJMuEnving4cQr3_fbyIVMoPzskQ9-k7ETAfFiy9omCkVUFMfKhywmbmZwB3oNtRFIt6zeSzV4WVf9tLe8ROIpuuT",
  "AHRPTWmfbivOJytN-R_vFqxfTexJ2vykf8r5-FCTKhsXCJT1PDXJO1tV-lyQjz0-VaJHv4R6wUemCbKu7oT0Hm2Ysl2fUD_e211MevLat1Xa7xa7PH4EbCIdJ9DtDGMArjb1Q18vfI0",
  "AHRPTWnV0rzJcYH8t0olIIEw8Vi2jcS_8VZrFDnPQssj7KjvttQCDESJNIyQWQn1MzZvxlsdnkLQfOgpMBx-FFsySdEBCs4-q10YbaiKxGCCXPi2HzPROAq8QXYXTonUaXg2uRteS8eh_Q",
  "AHRPTWnS9oFTm0_siiMcUhJzPmu9SSWaQXAtk_m2QCGHXeDrWir3iHV1lLDTWFI5XNCoiaL80CspVKkXqYdcYS4BLfyZZ7U5_f58bAcv1Hu-tk-CjGXn2yhqGCuL0RXKs16-yp8-JmE",
  "AHRPTWmRx2IFuHwJeVGbrLHPOLGgdwsbKl3cXQEZNtdhQcYNkKLQjdMYL67oy1hlOCnX7rJMv20Xzp4Y-2y2_GNbcUlvSftUkNBR7zUdz5Ybva_s7HZEtU0NC10iVRabwsHMGAxn5Qk",
  "AHRPTWm0tsiAPFP0dU1tPcsk6VvWKSbpyeRTXI-jtbTiMGxWSkfUwlM1-tPxOYkLoNPPAbRQ20FGdIwQkPhzh7Ap31CJ5VPDfuK8axnFHR7cBvnUYbJCGIHVUDM0h1sIhfwBB4NIW_uy",
  "AHRPTWmUPy6k6Cm2L7yXZc_JC0Uq9CdDlvEXdZyrSw15Ly1rYFhN4K64x8hDrfWlmqWDvftS0tBGxMJ9OwLwGcuKDRDx9AobzE-k5SuzIv-1bH3pLx_13h8mMbD78DgZyAD7L6HtMUc",
  "AHRPTWne5PBNhkhs_YQxTayMewDlfJVuR30CnZREdKnrETgUCBXjE9jLSB69mO7arx6m5oGu3YlYFCOAbBxQTezRsYaDRuCo1JLYbOf5FiaD55cMI8ce-JGftjCNZ1omndIQUHUe6377",
  "AHRPTWlQw5vsKLc8LlMOA0O7u62DW5RfkZhz-b-48WjnRjfXgWa-AGsBfTavZY9KKqEsAUWpJtoZmjqTkSDEaGhoo9lYgg-jpI_5-zljbnkz_KahZAHB-XpVMBQ6lfQChbtPB927_MQBojfJ2kc",
  "AHRPTWnGue5O4hh-CzigOCNYcDP2pmwetmjQpzH0N9Z3aByVZ8NfAUdgA_KyI0SzEWkgEDUEg6Gbp0TPXs4SYrB0I8GDZYKPVtKYpO_0-Y3anP0GyKDVEwNrwAPDuZ9S-vUSqR7trvrJ",
  "AHRPTWm0jTVt8rfOL7UiKm0rdWQVwBuvaPBV4GWBcZilauA3dlfA02lStyoVtWcY2i5jwhIXJnEsGdyrrDAiXobdDc3dCMIrzgjg9zbB1m9f9EAdwLqG8ADy3l44bCSdyW8GUUQJLtW-",
  "AHRPTWk0pEYiGd3tlYrwD8CBK-Yec-pNMVghXf0pxS2-vasw9rswT6ByzBXGyxjBJdemRrkOEKbqVMWGvnFQdMVeSFaNLQxH5E10VS1dK6y9M-0ayqIxHNFWBaHDhJMMOXUvNLG_6e4",
  "AHRPTWkJ6aKgOLwK6vd9GatO6mkGOAzB8Tg3Qpwlzi-Q8rQlDMahDhjDNpVKWYJyFMRz_HaKyiIvgsVNPauevf7DdeXwd_KMw8o6oqD1ET1NgxBNYHcYI4WlfUhuHqvsAukLnFdpMIRy",
];

const GOOGLE_PROFILE_IMAGES = GOOGLE_PROFILE_IMAGE_IDS.map((id, i) => ({
  src: `https://lh3.googleusercontent.com/gps-cs-s/${id}=w1200-h1200-n-k-no`,
  alt: `Fotografija iz salona sa Google profila ${i + 1}`,
}));

const ALL_IMAGES = [...GALLERY_IMAGES, ...GOOGLE_PROFILE_IMAGES];
const PAGE_SIZE = 12;
const TOTAL_PAGES = Math.ceil(ALL_IMAGES.length / PAGE_SIZE);

export function Gallery() {
  const [page, setPage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const pageImages = ALL_IMAGES.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section id="galerija" className="bg-blush/30 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Iz salona"
          title="Galerija"
          description="Pogled na naš prostor i deo radova – za više fotografija i objava pratite nas na Instagramu."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {pageImages.map((image, i) => {
            const globalIndex = page * PAGE_SIZE + i;
            return (
              <button
                key={image.src}
                type="button"
                onClick={() => setLightboxIndex(globalIndex)}
                className="group relative aspect-square overflow-hidden rounded-2xl"
                aria-label={`Otvori sliku: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            );
          })}
        </div>

        {TOTAL_PAGES > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-dark transition hover:bg-gold hover:text-cream disabled:pointer-events-none disabled:opacity-30"
              aria-label="Prethodna strana"
            >
              ‹
            </button>

            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Strana ${i + 1}`}
                aria-current={i === page ? "page" : undefined}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition",
                  i === page ? "bg-gold text-cream" : "text-ink hover:bg-gold/10"
                )}
              >
                {i + 1}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setPage((p) => Math.min(TOTAL_PAGES - 1, p + 1))}
              disabled={page === TOTAL_PAGES - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-dark transition hover:bg-gold hover:text-cream disabled:pointer-events-none disabled:opacity-30"
              aria-label="Sledeća strana"
            >
              ›
            </button>
          </div>
        )}
      </Container>

      {lightboxIndex !== null && (
        <Lightbox
          images={ALL_IMAGES}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </section>
  );
}
