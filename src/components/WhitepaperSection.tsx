'use client';

import { motion } from 'framer-motion';
import { FiBook, FiCode, FiBarChart, FiUsers, FiDownload, FiExternalLink } from 'react-icons/fi';

export default function WhitepaperSection() {
  const highlights = [
    {
      icon: FiCode,
      title: "Technical Architecture",
      description: "Deep dive into our multi-chain infrastructure, security protocols, and scalability solutions"
    },
    {
      icon: FiBarChart,
      title: "Token Economics",
      description: "Detailed breakdown of token distribution, utility mechanisms, and sustainable growth model"
    },
    {
      icon: FiBook,
      title: "Product Roadmap",
      description: "Our strategic vision and detailed timeline for the next 5 years of development"
    },
    {
      icon: FiUsers,
      title: "Team & Partners",
      description: "Meet the team, advisors, and our strategic partnerships with leading blockchain projects"
    }
  ];

  return (
    <section id="whitepaper" className="py-32 px-4 bg-gradient-to-b from-navy to-navy-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-pink/5 rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple/5 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Learn More About <span className="gradient-text">BLAZE</span>
          </h2>
          <p className="text-gray-300 text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
            Dive deep into our technology, tokenomics, and vision for the future of decentralized finance. 
            Read our comprehensive whitepaper to understand how we're revolutionizing crypto wallets.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="card-gradient rounded-3xl p-12 mb-12"
        >
          <h3 className="text-3xl font-bold mb-10">What's Inside?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-pink-purple flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <button className="px-12 py-5 bg-gradient-pink-purple hover:opacity-90 rounded-xl font-bold text-xl transition-all transform hover:scale-105 glow-effect flex items-center gap-3">
            <FiExternalLink />
            Read Whitepaper
          </button>
          <button className="px-12 py-5 border-2 border-pink/50 hover:bg-pink/10 rounded-xl font-bold text-xl transition-all backdrop-blur-sm flex items-center gap-3">
            <FiDownload />
            Download PDF
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-gray-400"
        >
          <p className="text-sm">Version 2.0 • Last updated: January 2025 • 45 pages</p>
        </motion.div>
      </div>
    </section>
  );
}
