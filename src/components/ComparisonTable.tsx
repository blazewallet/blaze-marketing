'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiX, FiMinus } from 'react-icons/fi';

export default function ComparisonTable() {
  const features = [
    { name: "Transaction Speed", blaze: { text: "< 0.1s", full: true }, metamask: "15-30s", trust: "10-20s", coinbase: "5-10s" },
    { name: "Gas Optimization", blaze: { text: "Auto AI-optimized", full: true }, metamask: "Manual", trust: "Basic", coinbase: "Limited" },
    { name: "Multi-chain Support", blaze: { text: "8+ Chains", full: true }, metamask: "Ethereum only", trust: "5+ Chains", coinbase: "3+ Chains" },
    { name: "Built-in DEX", blaze: { text: "1inch + 0x + Aggregator", full: true }, metamask: false, trust: "Limited", coinbase: "Basic" },
    { name: "Fiat On-ramp", blaze: { text: "MoonPay + Ramp", full: true }, metamask: false, trust: "Limited", coinbase: true },
    { name: "Staking Rewards", blaze: { text: "Up to 25% APY", full: true }, metamask: false, trust: false, coinbase: "Limited" },
    { name: "Cashback System", blaze: { text: "2-5% BLAZE", full: true }, metamask: false, trust: false, coinbase: false },
    { name: "NFT Support", blaze: { text: "Full + Minting + Marketplace", full: true }, metamask: "View only", trust: "Basic", coinbase: "Basic" },
    { name: "DAO Governance", blaze: { text: "Full voting rights", full: true }, metamask: false, trust: false, coinbase: false },
    { name: "Hardware Wallet", blaze: { text: "Ledger + Trezor + GridPlus", full: true }, metamask: "Ledger + Trezor", trust: "Limited", coinbase: false },
    { name: "Biometric Auth", blaze: { text: "FaceID + TouchID", full: true }, metamask: false, trust: "TouchID only", coinbase: "TouchID only" },
    { name: "Open Source", blaze: { text: "Fully audited", full: true }, metamask: true, trust: "Partial", coinbase: false },
  ];

  const renderCell = (value: any) => {
    if (typeof value === 'object' && value.full) {
      return (
        <div className="flex items-center justify-center gap-2">
          <FiCheck className="text-pink text-xl" />
          <span className="text-pink font-bold">{value.text}</span>
        </div>
      );
    }
    if (value === true) {
      return <FiCheck className="text-green-400 text-xl mx-auto" />;
    }
    if (value === false) {
      return <FiX className="text-gray-600 text-xl mx-auto" />;
    }
    if (value === "Limited" || value === "Basic" || value === "Partial") {
      return (
        <div className="flex items-center justify-center gap-2">
          <FiMinus className="text-gray-500" />
          <span className="text-gray-500">{value}</span>
        </div>
      );
    }
    return <span className="text-gray-400">{value}</span>;
  };

  return (
    <section id="comparison" className="py-32 px-4 bg-gradient-to-b from-navy to-navy-dark relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why Choose <span className="gradient-text">BLAZE?</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            A comprehensive comparison showing why BLAZE Wallet leads the industry
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-3xl border border-pink/20"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-navy-dark">
                <th className="text-left p-6 text-gray-400 font-bold text-lg min-w-[200px]">Features</th>
                <th className="p-6 text-center min-w-[180px]">
                  <div className="inline-flex flex-col items-center">
                    <span className="px-4 py-2 bg-gradient-pink-purple rounded-full text-xs font-black mb-3">
                      BEST CHOICE
                    </span>
                    <span className="text-2xl font-black gradient-text">BLAZE Wallet</span>
                  </div>
                </th>
                <th className="p-6 text-center text-lg font-bold text-gray-400 min-w-[150px]">MetaMask</th>
                <th className="p-6 text-center text-lg font-bold text-gray-400 min-w-[150px]">Trust Wallet</th>
                <th className="p-6 text-center text-lg font-bold text-gray-400 min-w-[150px]">Coinbase</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-t border-pink/10 hover:bg-pink/5 transition-colors"
                >
                  <td className="p-6 text-gray-300 font-semibold text-lg">{feature.name}</td>
                  <td className="p-6 text-center">{renderCell(feature.blaze)}</td>
                  <td className="p-6 text-center">{renderCell(feature.metamask)}</td>
                  <td className="p-6 text-center">{renderCell(feature.trust)}</td>
                  <td className="p-6 text-center">{renderCell(feature.coinbase)}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-4xl font-bold mb-6">Ready to Experience Superior Technology?</h3>
          <button className="px-12 py-5 bg-gradient-pink-purple hover:opacity-90 rounded-xl font-bold text-xl transition-all transform hover:scale-105 glow-effect">
            Launch App Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
