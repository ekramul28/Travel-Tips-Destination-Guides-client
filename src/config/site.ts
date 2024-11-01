export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Travel Tips & Destination Guides",
  description:
    "travel stories, exchange valuable tips, and interact with fellow travellers.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Pricing",
      href: "/pricing",
    },

    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },

    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
