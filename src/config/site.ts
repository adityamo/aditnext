export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Aditya Septama",
  description: "This my personal Website made with NextUI",
  navItems: [
    {
      label: "Home",
      href: "#hero",
    },
    {
      label: "About",
      href: "#aboutme",
    },
    {
      label: "Technology",
      href: "#technology",
    },
    {
      label: "Resume",
      href: "#resume",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "#hero",
    },
    {
      label: "About",
      href: "#aboutme",
    },
    {
      label: "Technology",
      href: "#technology",
    },
    {
      label: "Resume",
      href: "#resume",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
