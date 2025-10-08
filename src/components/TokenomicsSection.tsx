export default function TokenomicsSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Tokenomics</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fair launch, sustainable growth, and community-first distribution
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card-gradient rounded-2xl p-8 text-center">
            <div className="text-5xl font-bold gradient-text mb-2">40%</div>
            <div className="text-xl font-semibold mb-2">Community</div>
            <p className="text-gray-400 text-sm">Rewards, airdrops, and staking incentives</p>
          </div>

          <div className="card-gradient rounded-2xl p-8 text-center">
            <div className="text-5xl font-bold gradient-text mb-2">30%</div>
            <div className="text-xl font-semibold mb-2">Development</div>
            <p className="text-gray-400 text-sm">Team, advisors, and future hires</p>
          </div>

          <div className="card-gradient rounded-2xl p-8 text-center">
            <div className="text-5xl font-bold gradient-text mb-2">30%</div>
            <div className="text-xl font-semibold mb-2">Liquidity</div>
            <p className="text-gray-400 text-sm">DEX liquidity and market making</p>
          </div>
        </div>
      </div>
    </section>
  );
}

