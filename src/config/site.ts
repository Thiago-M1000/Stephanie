/** Card da seção #links. Os campos com ? são opcionais. */
export interface LinkCard {
  titulo: string;
  descricao: string;
  href: string;
  /** Marca/studio a que o card pertence (texto pequeno no topo). */
  marca?: string;
  /** Foto do card (caminho em /public). Usada no desktop e, se não houver imagemMobile, no mobile. */
  imagem?: string;
  /** Foto alternativa só para o mobile (opcional). */
  imagemMobile?: string;
  /** Posição da foto no desktop, "X% Y%" (ex: "50% 20%"). */
  imagemPos?: string;
  /** Posição da foto no mobile, "X% Y%". Se omitida, usa imagemPos. */
  imagemPosMobile?: string;
  /** Texto alternativo da foto (opcional; vazio = decorativa). */
  imagemAlt?: string;
}

/**
 * Cards da seção #links da home.
 *
 * FOTOS (trocar por card):
 *  - imagem:          foto do card (arquivo em /public/images/...)
 *  - imagemMobile:    foto diferente só para o mobile (opcional)
 *  - imagemPos:       enquadramento no DESKTOP, "X% Y%"
 *  - imagemPosMobile: enquadramento no MOBILE, "X% Y%" (se omitir, usa imagemPos)
 *
 * Enquadramento: X = 0% esquerda, 50% centro, 100% direita
 *                Y = 0% topo,     50% centro, 100% base
 *                ex: "50% 20%" prioriza a parte de cima da foto (rosto)
 */
const links: LinkCard[] = [
  {
    titulo: "Training",
    descricao: "Learn with Helen and take your skills further.",
    href: "/training",
    marca: "Beauty Beneath the Needle",
    imagem: "/images/img3.webp",
    imagemPos: "50% 0%",
    imagemPosMobile: "50% 0%",
  },
  {
    titulo: "Helen's treatments",
    descricao: "Book a treatment with Helen.",
    href: "/treatments",
    marca: "Beauty Beneath the Needle",
    imagem: "/images/img4.webp",
    imagemPos: "50% 0%",
    imagemPosMobile: "50% 0%",
  },
  {
    titulo: "The salon",
    descricao: "Treatments from Helen and the team at the studio.",
    href: "/studio",
    marca: "BBTN Studio",
    imagem: "/images/img2.webp",
    imagemPos: "50% 0%",
    imagemPosMobile: "50% 0%",
  },
  {
    titulo: "WhatsApp Model slots and exclusive offers",
    descricao: "WhatsApp Model slots and exclusive offers",
    href: "https://chat.whatsapp.com/FlEK0GuOekl5GnN5H5nTvA",
    marca: "Model slots and exclusive discounts",
    imagem: "/images/img5.webp",
    imagemPos: "50% 0%",
    imagemPosMobile: "50% 0%",
  },
];

export const SITE = {
  name: "BBTN Studio",
  owner: "Helen Hinchliff",
  url: "https://helen-hinchliff.webeauty.workers.dev",
  defaultOgImage: "/og-default2.jpg",
  social: {
    instagram: "https://instagram.com/beauty_beneath_the_needle",
    facebook: "https://www.facebook.com/people/Beauty-Beneath-The-Needle/61552768104038/",
    email: "change-me@email.com",
  },
  links,

  /** Menu da Navbar (training e páginas de procedimentos). */
  nav: [
    { nome: "Home", href: "/" },
    { nome: "Training", href: "/training" },
    { nome: "Pricing", href: "/pricing" },
    { nome: "Faq", href: "/faq" },
  ],
};