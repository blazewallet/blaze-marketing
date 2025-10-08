'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle, FiCircle, FiClock } from 'react-icons/fi';

export default function RoadmapSection() {
  const phases = [
    {
      quarter: "Q1 2025",
      title: "Foundation",
      items: [
        { text: "Mainnet Launch", done: true },
        { text: "Mobile Apps (iOS & Android)", done: true },
        { text: "8 Blockchain Integrations", done: true },
        { text: "Token Generation Event", done: true }
      ],
      status: "completed"
    },
    {
      quarter: "Q2 2025",
      title: "Expansion",
      items: [
        { text: "Hardware Wallet Support", done: false },
        { text: "Fiat On/Off Ramps", done: false },
        { text: "NFT Marketplace", done: false },
        { text: "Staking Platform", done: false }
      ],
      status: "in-progress"
    },
    {
      quarter: "Q3 2025",
      title: "DeFi Integration",
      items: [
        { text: "Built-in DEX Aggregator", done: false },
        { text: "Lending & Borrowing", done: false },
        { text: "Yield Farming", done: false },
        { text: "Advanced Analytics", done: false }
      ],
      status: "upcoming"
    },
    {
      quarter: "Q4 2025",
      title: "Ecosystem",
      items: [
        { text: "Launchpad Platform", done: false },
        { text: "DAO Governance Portal", done: false },
        { text: "Cross-chain Bridges", done: false },
        { text: "Enterprise Solutions", done: false }
      ],
      status: "upcoming"
    },
  ];

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-navy to-navy-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-purple/5 rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-pink/5 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Our journey to becoming the leading crypto wallet platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`card-dark rounded-3xl p-8 hover:scale-105 transition-all relative overflow-hidden ${
                phase.status === 'in-progress' ? 'ring-2 ring-pink/50 glow-effect' : ''
              }`}
            >
              {phase.status === 'in-progress' && (
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-gradient-pink-purple rounded-full text-xs font-bold flex items-center gap-2">
                    <FiClock className="animate-spin" />
                    ACTIVE
                  </span>
                </div>
              )}
              
              <div className="text-pink font-bold text-sm mb-3 flex items-center gap-2">
                {phase.status === 'completed' ? (
                  <FiCheckCircle className="text-green-400" />
                ) : phase.status === 'in-progress' ? (
                  <FiClock className="text-pink" />
                ) : (
                  <FiCircle className="text-gray-500" />
                )}
                {phase.quarter}
              </div>
              <h3 className="text-2xl font-bold mb-6">{phase.title}</h3>
              
              <ul className="space-y-4">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`mt-1 ${item.done ? 'text-green-400' : 'text-gray-500'}`}>
                      {item.done ? <FiCheckCircle size={18} /> : <FiCircle size={18} />}
                    </div>
                    <span className={`text-sm leading-relaxed ${item.done ? 'text-gray-300' : 'text-gray-400'}`}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
