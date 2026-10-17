/**
 * Configuração central do site The Infinite Collective.
 * Tudo que se repete em várias páginas (nome, menu, redes, CTA) fica aqui.
 */
export const SITE = {
  name: "The Infinite Collective",
  owner: "Stephanie",
  tagline: "Beauty • Education • Business",

  // TODO: trocar pelo domínio real quando estiver definido
  url: "https://example.com",
  defaultOgImage: "/og-default.jpg",

  /** Localização / área de atendimento exibida no rodapé. Vazio = não mostra. */
  location: "",

  /** Redes sociais. Campos vazios não aparecem no rodapé. */
  social: {
    instagram: "https://www.instagram.com/the.infinite.co/",
    facebook: "",
    email: "",
  },

  /** Botão principal (navbar, menu mobile, rodapé e finais de página). */
  cta: { texto: "Work with me", href: "/work-with-me" },

  /** Menu da navbar e links rápidos do rodapé. */
  nav: [
    { nome: "Home", href: "/" },
    { nome: "Beauty Services", href: "/beauty-services" },
    { nome: "Education + Mentorship", href: "/education-mentorship" },
    { nome: "Online Business", href: "/online-business" },
    { nome: "About", href: "/about" },
    { nome: "Contact", href: "/contact" },
  ],

  /** Links legais do rodapé. */
  legal: [
    { nome: "Privacy Policy", href: "/privacy-policy" },
    { nome: "Terms", href: "/terms" },
  ],

  /** Crédito do site no rodapé. Sem href, o nome aparece sem link. */
  credit: { texto: "Website built by", nome: "WeBeautyDesign", href: "https://www.instagram.com/webeautydesign/" },
};