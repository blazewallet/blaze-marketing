export default function TokenomicsSection() {
  return (
    <section className="py-32 px-4 bg-navy relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Tokenomics</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Fair launch, sustainable growth, and community-first distribution
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="card-dark rounded-3xl p-12 text-center hover:scale-105 transition-all group">
            <div className="text-7xl font-black gradient-text mb-4">40%</div>
            <div className="text-3xl font-bold mb-4 group-hover:text-pink transition-colors">Community</div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Rewards, airdrops, staking incentives, and cashback programs for our community members
            </p>
          </div>

          <div className="card-dark rounded-3xl p-12 text-center hover:scale-105 transition-all group">
            <div className="text-7xl font-black gradient-text mb-4">30%</div>
            <div className="text-3xl font-bold mb-4 group-hover:text-pink transition-colors">Development</div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Team, advisors, partnerships, and future talent to build the best wallet
            </p>
          </div>

          <div className="card-dark rounded-3xl p-12 text-center hover:scale-105 transition-all group">
            <div className="text-7xl font-black gradient-text mb-4">30%</div>
            <div className="text-3xl font-bold mb-4 group-hover:text-pink transition-colors">Liquidity</div>
            <p className="text-gray-400 text-lg leading-relaxed">
              DEX liquidity pools, market making, and ensuring healthy trading volume
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="card-gradient rounded-3xl p-10">
            <h3 className="text-3xl font-bold mb-6 gradient-text">Token Utility</h3>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-pink">✓</span>
                <span>Cashback rewards on all transactions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink">✓</span>
                <span>Governance voting rights in DAO</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink">✓</span>
                <span>Staking for up to 25% APY</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink">✓</span>
                <span>Premium features access</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink">✓</span>
                <span>Reduced trading fees</span>
              </li>
            </ul>
          </div>

          <div className="card-gradient rounded-3xl p-10">
            <h3 className="text-3xl font-bold mb-6 gradient-text">Token Details</h3>
            <div className="space-y-6 text-lg">
              <div className="flex justify-between items-center pb-4 border-b border-pink/20">
                <span className="text-gray-400">Total Supply</span>
                <span className="font-bold text-white">1,000,000,000 BLAZE</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-pink/20">
                <span className="text-gray-400">Initial Price</span>
                <span className="font-bold text-white">$0.01</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-pink/20">
                <span className="text-gray-400">Network</span>
                <span className="font-bold text-white">Multi-Chain</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Token Type</span>
                <span className="font-bold text-white">Utility Token</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
