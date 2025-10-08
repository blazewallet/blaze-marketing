export default function ComparisonTable() {
  const features = [
    { name: "Transaction Speed", blaze: "Instant ⚡", metamask: "15-30s", trust: "10-20s", coinbase: "5-10s" },
    { name: "Gas Optimization", blaze: "Auto-optimized", metamask: "Manual", trust: "Basic", coinbase: "Limited" },
    { name: "Multi-chain Support", blaze: "8+ Chains", metamask: "Ethereum only", trust: "5+ Chains", coinbase: "3+ Chains" },
    { name: "Built-in Swapping", blaze: "1inch + 0x", metamask: "None", trust: "Limited", coinbase: "Basic" },
    { name: "Fiat On-ramp", blaze: "MoonPay ✅", metamask: "None", trust: "Limited", coinbase: "Yes" },
    { name: "Staking Rewards", blaze: "Up to 25% APY 💰", metamask: "None", trust: "None", coinbase: "Limited" },
    { name: "Cashback System", blaze: "2-5% BLAZE 🎁", metamask: "None", trust: "None", coinbase: "None" },
    { name: "Premium Features", blaze: "BLAZE holders", metamask: "None", trust: "None", coinbase: "Paid" },
    { name: "NFT Support", blaze: "Full + Minting", metamask: "Basic", trust: "Basic", coinbase: "Basic" },
    { name: "Governance", blaze: "DAO Voting 🗳️", metamask: "None", trust: "None", coinbase: "None" },
    { name: "Launchpad", blaze: "Token Launches 🚀", metamask: "None", trust: "None", coinbase: "None" },
    { name: "Referral Program", blaze: "Earn BLAZE", metamask: "None", trust: "None", coinbase: "Limited" },
  ];

  return (
    <section id="comparison" className="py-32 px-4 bg-gradient-to-b from-navy to-navy-dark relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why Choose <span className="gradient-text">Blaze?</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            See how Blaze Wallet compares to the competition. We're winning in every category.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-pink/20">
          <table className="w-full">
            <thead>
              <tr className="bg-navy-dark">
                <th className="text-left p-6 text-gray-400 font-bold text-lg">Features</th>
                <th className="p-6 text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="px-4 py-1 bg-gradient-pink-purple rounded-full text-xs font-black mb-2">
                      👑 BEST
                    </span>
                    <span className="text-2xl font-black gradient-text">Blaze Wallet</span>
                  </div>
                </th>
                <th className="p-6 text-center text-xl font-bold text-gray-300">MetaMask</th>
                <th className="p-6 text-center text-xl font-bold text-gray-300">Trust Wallet</th>
                <th className="p-6 text-center text-xl font-bold text-gray-300">Coinbase</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-t border-pink/10 hover:bg-pink/5 transition-colors">
                  <td className="p-6 text-gray-300 font-semibold text-lg">{feature.name}</td>
                  <td className="p-6 text-center">
                    <span className="text-pink font-bold text-lg">{feature.blaze}</span>
                  </td>
                  <td className="p-6 text-center text-gray-500">{feature.metamask}</td>
                  <td className="p-6 text-center text-gray-500">{feature.trust}</td>
                  <td className="p-6 text-center text-gray-500">{feature.coinbase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h3>
          <button className="px-12 py-5 bg-gradient-pink-purple hover:opacity-90 rounded-xl font-bold text-xl transition-all transform hover:scale-105 glow-effect">
            Launch App Now
          </button>
        </div>
      </div>
    </section>
  );
}
