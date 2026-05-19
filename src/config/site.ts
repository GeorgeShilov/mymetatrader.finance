export const site = {
  name: "My MetaTrader",
  domain: "mymetatrader.finance",
  url: import.meta.env.SITE_URL || "https://mymetatrader.finance",
  email: "hello@mymetatrader.finance",
  description:
    "My MetaTrader delivers forex trading tools, MetaTrader automation, and market analysis for traders who want faster execution and sharper strategy.",
  launchContext: [
    "Automate repetitive MetaTrader workflows so you can focus on strategy, not manual execution.",
    "Build and backtest forex strategies with clear rules, tight risk controls, and reproducible signals.",
    "Turn live market data into actionable analysis that informs your next trade and portfolio decision."
  ]
};

export const navItems = [
  { label: "Command OS", href: "/gateway/" },
  { label: "Docs", href: "/docs/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" }
];
