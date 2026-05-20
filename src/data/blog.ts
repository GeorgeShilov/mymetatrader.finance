export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  author: string;
  category: string;
  tags: string[];
  featured?: boolean;
  heroImage: string;
  inlineImages: string[];
  referenceUrl?: string;
  articleText: string;
};

export const fallbackPosts: BlogPost[] = [
  {
    slug: "understanding-leverage-trading-on-a-dex",
    title: "Understanding leverage trading on a DEX",
    description:
      "How decentralized leverage trading works, why up to 1000x leverage matters, and how to manage risk when every move is magnified.",
    pubDate: "2026-05-16",
    author: "My MetaTrader Team",
    category: "DeFi",
    tags: ["Leverage", "DEX", "DeFi"],
    featured: true,
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>Leverage trading on a DEX gives traders the ability to control large positions with limited capital. At My MetaTrader, traders can access up to 1000x leverage, turning a small deposit into significant market exposure. The key is understanding that leverage amplifies both gains and losses.</p>
      <p>Risk management becomes non-negotiable at high leverage. Stop-loss and take-profit levels must be set before entering any trade. Position sizing should reflect account balance and the distance to the stop. A single unprotected trade at 100x leverage can wipe an account in minutes.</p>
      <p>The advantage of a decentralized exchange is transparency and self-custody. No central entity controls your funds. You connect your wallet, pick a trading pair, and execute trades directly on-chain with clear rules and no hidden manipulation.</p>
    `
  },
  {
    slug: "why-no-scam-wick-matters-for-leverage-traders",
    title: "Why no scam wick matters for leverage traders",
    description:
      "How scam wicks destroy leveraged positions on other platforms and why My MetaTrader was designed to protect traders from artificial price spikes.",
    pubDate: "2026-05-15",
    author: "My MetaTrader Team",
    category: "Security",
    tags: ["No Scam Wick", "Leverage", "DeFi"],
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>A scam wick is a sudden, artificial price spike or drop that triggers stop losses and liquidations before price returns to its normal range. For leverage traders, a single wick can mean total account destruction even when the underlying trend was correct.</p>
      <p>My MetaTrader was built with no scam wick protection. Our price feeds and liquidation mechanics are designed to filter out artificial volatility and protect traders from engineered liquidations. This means your position survives the noise that wipes out traders on other platforms.</p>
      <p>Trust in a leverage platform comes from knowing the game is fair. When price manipulation is removed from the equation, traders can focus on actual market analysis instead of worrying about exchange-engineered wicks hunting their stops.</p>
    `
  },
  {
    slug: "earning-real-yield-with-stablecoin-deposit-vaults",
    title: "Earning real yield with stablecoin deposit vaults",
    description:
      "How My MetaTrader's deposit vaults generate real income from stablecoin staking and why #RealYield beats inflated token emissions.",
    pubDate: "2026-05-14",
    author: "My MetaTrader Team",
    category: "Yield",
    tags: ["RealYield", "Stablecoins", "Vaults"],
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>Most DeFi protocols promise yield that comes from printing new tokens. When the emissions slow, the yield collapses. My MetaTrader deposit vaults are built on #RealYield — income generated from actual trading fees and protocol revenue, not inflationary token rewards.</p>
      <p>Staking stablecoins in our vaults means earning real income without exposure to volatile asset prices. The digital generation deserves financial tools that combine the stability of traditional deposits with the transparency and efficiency of decentralized finance.</p>
      <p>Before depositing, understand where yield originates. Real yield protocols share verifiable revenue. Inflationary protocols hide the source behind complex tokenomics. My MetaTrader vaults are designed for traders and investors who value clarity over illusion.</p>
    `
  }
];
