export default function ComparisonTable() {
  const features = [
    { name: "Transaction Speed", blaze: "Instant", metamask: "15-30s", trust: "10-20s", coinbase: "5-10s" },
    { name: "Gas Optimization", blaze: "Auto-optimized", metamask: "Manual", trust: "Basic", coinbase: "Limited" },
    { name: "Multi-chain Support", blaze: "8+ Chains", metamask: "Ethereum only", trust: "5+ Chains", coinbase: "3+ Chains" },
    { name: "Built-in Swapping", blaze: "1inch + 0x", metamask: "None", trust: "Limited", coinbase: "Basic" },
    { name: "Fiat On-ramp", blaze: "MoonPay", metamask: "None", trust: "Limited", coinbase: "Yes" },
    { name: "Staking Rewards", blaze: "Up to 25% APY", metamask: "None", trust: "None", coinbase: "Limited" },
    { name: "Cashback System", blaze: "2-5% BLAZE", metamask: "None", trust: "None", coinbase: "None" },
    { name: "Premium Features", blaze: "BLAZE holders", metamask: "None", trust: "None", coinbase: "Paid" },
    { name: "NFT Support", blaze: "Full + Minting", metamask: "Basic", trust: "Basic", coinbase: "Basic" },
    { name: "Governance", blaze: "DAO Voting", metamask: "None", trust: "None", coinbase: "None" },
    { name: "Launchpad", blaze: "Token Launches", metamask: "None", trust: "None", coinbase: "None" },
    { name: "Referral Program", blaze: "Earn BLAZE", metamask: "None", trust: "None", coinbase: "Limited" },
    { name: "Mobile App", blaze: "PWA + Native", metamask: "Mobile", trust: "Mobile", coinbase: "Mobile" },
    { name: "Hardware Support", blaze: "Ledger + Trezor", metamask: "Ledger + Trezor", trust: "Limited", coinbase: "None" },
    { name: "Privacy", blaze: "Non-custodial", metamask: "Non-custodial", trust: "Non-custodial", coinbase: "Custodial" },
  ];

  return (
    <section id="comparison" className="py-24 px-4 bg-gradient-to-b from-black to-purple-900/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Blaze</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            See how Blaze Wallet compares to the competition. Spoiler: we're winning in every category.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-purple-500/20">
                <th className="text-left p-4 text-gray-400 font-semibold">Features</th>
                <th className="p-4 text-center">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-bold">
                    <span className="text-yellow-400 text-xs mr-2">BEST</span>
                    Blaze Wallet
                  </div>
                </th>
                <th className="p-4 text-center text-gray-300 font-semibold">MetaMask</th>
                <th className="p-4 text-center text-gray-300 font-semibold">Trust Wallet</th>
                <th className="p-4 text-center text-gray-300 font-semibold">Coinbase Wallet</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-purple-500/10 hover:bg-purple-500/5 transition-colors">
                  <td className="p-4 text-gray-300 font-medium">{feature.name}</td>
                  <td className="p-4 text-center">
                    <span className="text-green-400 font-semibold">{feature.blaze}</span>
                  </td>
                  <td className="p-4 text-center text-gray-400">{feature.metamask}</td>
                  <td className="p-4 text-center text-gray-400">{feature.trust}</td>
                  <td className="p-4 text-center text-gray-400">{feature.coinbase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h3>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
            Launch App
          </button>
        </div>
      </div>
    </section>
  );
}

