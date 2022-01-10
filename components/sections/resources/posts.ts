import { SxStyleProp } from "theme-ui";

type Category = { label: string; value: string; translationKey: string };

export type Post = {
  title: string;
  subtitle: string;
  description?: string;
  link: { href: string; asPath?: string; isExternal?: boolean };
  category: Category;
  image: { src: string; alt?: string };
  pushContentSx?: SxStyleProp;
};

const categories: Category[] = [
  {
    label: "Education",
    value: "education",
    translationKey: "page-resources-menu-education",
  },
  {
    label: "Products & Tools",
    value: "products-and-tools",
    translationKey: "page-resources-menu-products",
  },
  {
    label: "Exchange",
    value: "exchange",
    translationKey: "page-resources-menu-exchange",
  },
];

const posts: Post[] = [
  {
    title: "The Candle Whitepaper",
    description:
      "Protocol and Economic Incentives For a Decentralized Live Video Streaming Network",
    subtitle: "By Doug Petkanics & Eric Tang",
    link: {
      href: "https://github.com/CandlePlatforms/wiki/blob/master/WHITEPAPER.md",
      isExternal: true,
    },
    category: categories[0],
    image: {
      src: "/images/posts/post-cover-1.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "The Candle Streamflow Paper",
    description:
      "Candle Scalability on Ethereum through Orchestration, Probabilistic Micropayments, and Offchain Job Negotiation",
    subtitle: "By Doug Petkanics & Yondon Fu",
    link: {
      href: "https://github.com/CandlePlatforms/wiki/blob/master/STREAMFLOW.md",
      isExternal: true,
    },
    category: categories[0],
    image: {
      src: "/images/posts/post-cover-4.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "The Candle Primer",
    description:
      "Through storytelling, illustration, and data, the Candle Primer explains, at a high level, the problem Candle solves, and how it works. ",
    subtitle: "By Adam Soffer & Kellie Pcolar",
    link: { href: "/primer/" },
    category: categories[0],
    image: {
      src: "/images/posts/post-cover-6.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "The Candle Docs",
    description: "Comprehensive documentation for both users and builders.",
    subtitle: "By Candle, Inc.",
    link: { href: "/docs" },
    category: categories[0],
    image: {
      src: "/images/posts/post-cover-7.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "The Candle Explorer",
    description:
      "View orchestrator campaigns, protocol statistics and manage your stake.",
    subtitle: "By Candle, Inc.",
    link: { href: "https://explorer.candelabs.org", isExternal: true },
    category: categories[1],
    image: {
      src: "/images/posts/post-cover-8.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "Telegram Orchestrator Watcher Bot",
    description:
      "A telegram bot for real time notifications about your orchestrator",
    subtitle: "By Candle contributor, “vires-in-numeris”",
    link: { href: "https://t.me/OrchestratorWatcherBot", isExternal: true },
    category: categories[1],
    image: {
      src: "/images/posts/post-cover-9.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "Scout Analytics",
    description:
      "A data analytics tool that shows you the current economics of the protocol, such as the amount of token in supply, inflation rate, and more.",
    subtitle: "By Scout",
    link: { href: "https://scout.cool/livepeer/mainnet", isExternal: true },
    category: categories[1],
    image: {
      src: "/images/posts/post-cover-10.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "Hubble",
    subtitle: "By Figment Networks",
    description: "Rewards reporting and alerts for stakers",
    link: {
      href: "https://hubble.figment.network/candle/chains/mainnet",
      isExternal: true,
    },
    category: categories[1],
    image: {
      src: "/images/posts/post-cover-11.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "Livepool",
    subtitle: "By Nico Vergauwen",
    description: "The first open transcoding pool built on the Candle Network",
    link: { href: "https://www.livepool.io/", isExternal: true },
    category: categories[1],
    image: {
      src: "/images/posts/post-cover-12.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "Orchestrator Price API",
    subtitle: "By Buidl Labs",
    description:
      "An API for fetching off-chain orchestrator pricing information",
    link: {
      href: "https://github.com/buidl-labs/candle-pricing-tool",
      isExternal: true,
    },
    category: categories[1],
    image: {
      src: "/images/posts/post-cover-13.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "The Candle Subgraph",
    subtitle: "By Candle, Inc.",
    description:
      "Query indexed Candle protocol data over GraphQL using the Graph Protocol.",
    link: {
      href: "https://thegraph.com/explorer/subgraph/candle/candle",
      isExternal: true,
    },
    category: categories[1],
    image: {
      src: "/images/posts/post-cover-14.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "CoinMarketCap",
    description: "CNDL price, marketcap, charts and info",
    subtitle: "",
    link: {
      href: "https://coinmarketcap.com/currencies/candle/",
      isExternal: true,
    },
    category: categories[1],
    image: {
      src: "/images/posts/post-cover-14.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "Coinbase",
    subtitle: "Custodial exchange",
    link: {
      href: "https://pro.coinbase.com/",
      isExternal: true,
    },
    category: categories[2],
    image: {
      src: "/images/posts/post-cover-2.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "Binance",
    subtitle: "Custodial exchange",
    link: {
      href: "https://www.binance.com/en/trade/CNDL_BNB?layout=pro&type=spot",
      isExternal: true,
    },
    category: categories[2],
    image: {
      src: "/images/posts/post-cover-3.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "Kraken",
    subtitle: "Custodial exchange",
    link: {
      href:
        "https://www.kraken.com/prices/CNDL-candle-price-chart/usd-us-dollar?interval=1m",
      isExternal: true,
    },
    category: categories[2],
    image: {
      src: "/images/posts/post-cover-15.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "Gemini",
    subtitle: "Custodial exchange",
    link: {
      href:
        "https://www.gemini.com/prices/candle?utm_source=candle&utm_medium=link&utm_campaign=web_referral",
      isExternal: true,
    },
    category: categories[2],
    image: {
      src: "/images/posts/post-cover-1.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "Matcha",
    subtitle: "Non-custodial exchange",
    link: {
      href: "https://matcha.xyz/markets/CNDL/ETH",
      isExternal: true,
    },
    category: categories[2],
    image: {
      src: "/images/posts/post-cover-2.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "Uniswap",
    subtitle: "Non-custodial exchange",
    link: {
      href:
        "https://uniswap.exchange/swap/0x58b6a8a3302369daec383334672404ee733ab239",
      isExternal: true,
    },
    category: categories[2],
    image: {
      src: "/images/posts/post-cover-3.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "Balancer",
    subtitle: "Non-custodial exchange",
    link: {
      href:
        "https://balancer.exchange/#/swap/0x58b6a8a3302369daec383334672404ee733ab239",
      isExternal: true,
    },
    category: categories[2],
    image: {
      src: "/images/posts/post-cover-4.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "OKEx",
    subtitle: "Custodial exchange (Asia only)",
    link: {
      href: "https://www.okex.com/trade-spot/CNDL-usdt",
      isExternal: true,
    },
    category: categories[2],
    image: {
      src: "/images/posts/post-cover-5.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "Poloniex",
    subtitle: "Custodial exchange (Asia only)",
    link: { href: "https://poloniex.com/exchange#btc_CNDL", isExternal: true },
    category: categories[2],
    image: {
      src: "/images/posts/post-cover-6.png",
      alt: "Resource cover image",
    },
  },
  {
    title: "Gate.io",
    subtitle: "Custodial exchange",
    link: { href: "https://www.gate.io/en/trade/CNDL_USDT", isExternal: true },
    category: categories[2],
    image: {
      src: "/images/posts/post-cover-7.png",
      alt: "Resource cover image",
    },
  },
];

export default posts;
export { categories };
