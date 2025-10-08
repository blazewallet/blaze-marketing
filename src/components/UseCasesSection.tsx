export default function UseCasesSection() {
  const useCases = [
    {
      title: "Online Shopping",
      description: "Pay for your favorite products with crypto. Get 2-5% cashback in BLAZE tokens on every purchase.",
      icon: "🛍️",
      gradient: "from-pink/20 to-purple/20"
    },
    {
      title: "DeFi Trading",
      description: "Access the best DeFi protocols with instant swaps, optimal gas prices, and maximum yields.",
      icon: "📈",
      gradient: "from-purple/20 to-pink/20"
    },
    {
      title: "Cross-border Payments",
      description: "Send money globally in seconds with minimal fees. No banks, no delays, no hassles.",
      icon: "🌍",
      gradient: "from-pink/20 to-purple/20"
    },
    {
      title: "NFT Marketplace",
      description: "Buy, sell, and mint NFTs across multiple chains. Built-in marketplace with zero platform fees.",
      icon: "🎨",
      gradient: "from-purple/20 to-pink/20"
    },
    {
      title: "Staking & Rewards",
      description: "Stake your tokens to earn up to 25% APY. Participate in governance and get rewarded.",
      icon: "💎",
      gradient: "from-pink/20 to-purple/20"
    },
    {
      title: "Gaming & Metaverse",
      description: "Use BLAZE in gaming ecosystems and metaverse platforms. Trade in-game assets seamlessly.",
      icon: "🎮",
      gradient: "from-purple/20 to-pink/20"
    },
  ];

  return (
    <section className="py-32 px-4 bg-navy-dark relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Use Cases for <span className="gradient-text">Every Day</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            BLAZE Wallet is designed for real-world crypto usage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className={`card-dark rounded-3xl p-10 hover:scale-105 transition-all group bg-gradient-to-br ${useCase.gradient}`}
            >
              <div className="text-7xl mb-6">{useCase.icon}</div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-pink transition-colors">{useCase.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
