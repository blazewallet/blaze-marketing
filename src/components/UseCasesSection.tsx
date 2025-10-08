'use client';

import { motion } from 'framer-motion';
import { FiShoppingBag, FiTrendingUp, FiGlobe, FiImage, FiAward, FiCommand } from 'react-icons/fi';

export default function UseCasesSection() {
  const useCases = [
    {
      title: "E-Commerce Payments",
      description: "Pay for your favorite products with crypto. Get 2-5% cashback in BLAZE tokens on every purchase with instant settlements.",
      icon: FiShoppingBag,
      gradient: "from-pink/20 to-purple/20"
    },
    {
      title: "DeFi Trading",
      description: "Access the best DeFi protocols with instant swaps, optimal gas prices, and maximum yields through our DEX aggregator.",
      icon: FiTrendingUp,
      gradient: "from-purple/20 to-pink/20"
    },
    {
      title: "Cross-Border Payments",
      description: "Send money globally in seconds with minimal fees. No banks, no delays, no hassles. Support for 150+ countries.",
      icon: FiGlobe,
      gradient: "from-pink/20 to-purple/20"
    },
    {
      title: "NFT Marketplace",
      description: "Buy, sell, and mint NFTs across multiple chains. Built-in marketplace with zero platform fees and instant transfers.",
      icon: FiImage,
      gradient: "from-purple/20 to-pink/20"
    },
    {
      title: "Staking & Rewards",
      description: "Stake your tokens to earn up to 25% APY. Participate in governance and get rewarded for securing the network.",
      icon: FiAward,
      gradient: "from-pink/20 to-purple/20"
    },
    {
      title: "Gaming & Metaverse",
      description: "Use BLAZE in gaming ecosystems and metaverse platforms. Trade in-game assets seamlessly across virtual worlds.",
      icon: FiCommand,
      gradient: "from-purple/20 to-pink/20"
    },
  ];

  return (
    <section className="py-32 px-4 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink/5 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple/5 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Real-World <span className="gradient-text">Applications</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            BLAZE Wallet is designed for practical crypto usage in everyday life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`card-dark rounded-3xl p-10 hover:scale-105 transition-all group bg-gradient-to-br ${useCase.gradient} relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-pink-purple opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-pink-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <useCase.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-pink transition-colors">{useCase.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
