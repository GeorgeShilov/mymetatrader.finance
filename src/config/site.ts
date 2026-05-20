export const site = {
  name: "My MetaTrader",
  domain: "mymetatrader.finance",
  url: import.meta.env.SITE_URL || "https://mymetatrader.finance",
  email: "hello@mymetatrader.finance",
  description:
    "My MetaTrader — a DeFi leverage trading DEX built for traders who want up to 1000x leverage, real yield vaults, and no scam wick execution.",
  launchContext: [
    "Trade with up to 1000x leverage using limited capital. Built for traders who want large market exposure without large deposits.",
    "Self-custody, transparent execution, and no scam wick protection. Trade knowing the platform is designed to keep the game fair.",
    "Stake stablecoins in real yield vaults and earn protocol revenue. No inflationary tokens. Just real income from real trading activity."
  ]
};

export const navItems = [
  { label: "About", href: "/about/" },
  { label: "Docs", href: "/docs/" },
  { label: "Statistics", href: "/statistics/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" }
];
