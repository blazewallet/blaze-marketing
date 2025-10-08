'use client';

import { motion } from 'framer-motion';
import { FiUsers, FiCode, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

export default function TokenomicsSection() {
  return (
    <section className="py-32 px-4 bg-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-pink/5 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Tokenomics</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Fair launch, sustainable growth, and community-first distribution model
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {[
            {
              percentage: '40%',
              title: 'Community',
              description: 'Rewards, airdrops, staking incentives, and cashback programs for active community members',
              icon: FiUsers,
              delay: 0
            },
            {
              percentage: '30%',
              title: 'Development',
              description: 'Team, advisors, partnerships, and future talent acquisition to build the best wallet ecosystem',
              icon: FiCode,
              delay: 0.1
            },
            {
              percentage: '30%',
              title: 'Liquidity',
              description: 'DEX liquidity pools, market making, and ensuring healthy trading volume across exchanges',
              icon: FiTrendingUp,
              delay: 0.2
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.5 }}
              className="card-dark rounded-3xl p-12 text-center hover:scale-105 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-pink-purple opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-pink-purple flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <item.icon className="text-4xl text-white" />
                </div>
                <div className="text-7xl font-black gradient-text mb-4">{item.percentage}</div>
                <div className="text-3xl font-bold mb-4 group-hover:text-pink transition-colors">{item.title}</div>
                <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-gradient rounded-3xl p-10"
          >
            <h3 className="text-3xl font-bold mb-8 gradient-text">Token Utility</h3>
            <ul className="space-y-5">
              {[
                'Cashback rewards on all transactions',
                'Governance voting rights in DAO',
                'Staking for up to 25% APY',
                'Premium features access',
                'Reduced trading fees',
                'Priority customer support'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-300 text-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-pink-purple flex items-center justify-center flex-shrink-0">
                    <FiCheckCircle className="text-white" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-gradient rounded-3xl p-10"
          >
            <h3 className="text-3xl font-bold mb-8 gradient-text">Token Details</h3>
            <div className="space-y-6">
              {[
                { label: 'Total Supply', value: '1,000,000,000 BLAZE' },
                { label: 'Initial Price', value: '$0.01' },
                { label: 'Network', value: 'Multi-Chain (ERC-20, BEP-20)' },
                { label: 'Token Type', value: 'Utility & Governance' },
                { label: 'Contract', value: 'Audited by CertiK' },
                { label: 'Vesting', value: 'Linear over 24 months' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center pb-6 border-b border-pink/20 last:border-0">
                  <span className="text-gray-400 text-lg">{item.label}</span>
                  <span className="font-bold text-white text-lg">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
