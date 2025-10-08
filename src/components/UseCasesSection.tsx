export default function UseCasesSection() {
  const useCases = [
    {
      title: "Online Shopping",
      description: "Pay for your favorite products with crypto. Get 2-5% cashback in BLAZE tokens on every purchase.",
      icon: "🛍️"
    },
    {
      title: "DeFi Trading",
      description: "Access the best DeFi protocols with instant swaps, optimal gas prices, and maximum yields.",
      icon: "📈"
    },
    {
      title: "Cross-border Payments",
      description: "Send money globally in seconds with minimal fees. No banks, no delays, no hassles.",
      icon: "🌍"
    },
    {
      title: "NFT Marketplace",
      description: "Buy, sell, and mint NFTs across multiple chains. Built-in marketplace with zero platform fees.",
      icon: "🎨"
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Use Cases for <span className="gradient-text">Every Day</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="card-gradient rounded-2xl p-8 hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">{useCase.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
              <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

