export default function RoadmapSection() {
  const phases = [
    {
      quarter: "Q1 2025",
      title: "Foundation",
      items: ["✅ Mainnet Launch", "✅ Mobile Apps (iOS & Android)", "✅ 8 Blockchain Integrations", "✅ Token Generation Event"],
      status: "completed"
    },
    {
      quarter: "Q2 2025",
      title: "Expansion",
      items: ["🔄 Hardware Wallet Support", "🔄 Fiat On/Off Ramps", "🔄 NFT Marketplace", "🔄 Staking Platform"],
      status: "in-progress"
    },
    {
      quarter: "Q3 2025",
      title: "DeFi Integration",
      items: ["⏳ Built-in DEX Aggregator", "⏳ Lending & Borrowing", "⏳ Yield Farming", "⏳ Advanced Analytics"],
      status: "upcoming"
    },
    {
      quarter: "Q4 2025",
      title: "Ecosystem",
      items: ["⏳ Launchpad Platform", "⏳ DAO Governance Portal", "⏳ Cross-chain Bridges", "⏳ Enterprise Solutions"],
      status: "upcoming"
    },
  ];

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-navy to-navy-dark relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Our journey to becoming the #1 crypto wallet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className={`card-dark rounded-3xl p-8 hover:scale-105 transition-all relative overflow-hidden ${
                phase.status === 'in-progress' ? 'ring-2 ring-pink/50 glow-effect' : ''
              }`}
            >
              {phase.status === 'in-progress' && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-pink-purple rounded-full text-xs font-bold">
                    ACTIVE
                  </span>
                </div>
              )}
              
              <div className="text-pink font-bold text-sm mb-2">{phase.quarter}</div>
              <h3 className="text-2xl font-bold mb-6">{phase.title}</h3>
              
              <ul className="space-y-3">
                {phase.items.map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

