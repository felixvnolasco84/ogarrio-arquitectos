import { Linkedin, Instagram, Youtube, Facebook } from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Grupo Tecnovidrio",
  description: "",
  mainNav: [
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Acerca de",
      href: "/nosotros",
    },
  ],
  links: [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/grupotecnovidrio/?viewAsMember=true",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/grupotecnovidrio/",
    },
    {
      icon: Youtube,
      label: "Youtube",
      href: "https://www.youtube.com/user/GpoTecno",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/GrupoTecnovidrio",
    },
  ],
};
