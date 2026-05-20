export const site = {
  name: "My MetaTrader",
  domain: "mymetatrader.finance",
  url: import.meta.env.SITE_URL || "https://mymetatrader.finance",
  email: "hello@mymetatrader.finance",
  description:
    "My MetaTrader — a DeFi leverage trading DEX built for traders who want up to 1000x leverage, real yield vaults, and no scam wick execution.",
  launchContext: [
    "Unleash your trading potential with leverage and limited capital, perfect for traders looking to make a big impact in the market.",
    "Trade with confidence and security knowing our approach is legit and professional, designed for the trader looking for real results.",
    "Stake your stablecoins and earn real income with our cutting-edge deposit vaults, designed for the digital generation."
  ]
};

export const navItems = [
  { label: "About", href: "/about/" },
  { label: "Docs", href: "/docs/" },
  { label: "Statistics", href: "/statistics/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" }
];
