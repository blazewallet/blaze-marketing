'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowUp, FiArrowDown, FiRefreshCw, FiCreditCard } from 'react-icons/fi';

export default function WalletDemo() {
  const [activeTab, setActiveTab] = useState<'wallet' | 'swap' | 'stake'>('wallet');

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-32 px-4 bg-navy relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-pink/5 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple/5 rounded-full filter blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
            Experience the <span className="gradient-text">Wallet</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-xl max-w-3xl mx-auto">
            See BLAZE Wallet in action. Lightning-fast, intuitive, and powerful.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Wallet Interface Mockup */}
          <div className="card-dark rounded-3xl p-8 md:p-12 glow-effect">
            {/* Wallet Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-pink/20">
              <div>
                <h3 className="text-3xl font-bold gradient-text mb-2">My Wallet</h3>
                <p className="text-gray-400">0x7a9f...3b2c</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-black text-white mb-1">$24,567.89</div>
                <div className="text-green-400 font-semibold">+12.5% Today</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-8">
              {['wallet', 'swap', 'stake'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-6 py-3 rounded-xl font-bold capitalize transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-pink-purple text-white'
                      : 'bg-navy-light text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content based on active tab */}
            {activeTab === 'wallet' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Quick Actions */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: FiArrowUp, label: 'Send', color: 'from-pink to-pink-light' },
                    { icon: FiArrowDown, label: 'Receive', color: 'from-purple to-purple-light' },
                    { icon: FiRefreshCw, label: 'Swap', color: 'from-pink to-purple' },
                    { icon: FiCreditCard, label: 'Buy', color: 'from-purple to-pink' },
                  ].map((action, i) => (
                    <button
                      key={i}
                      className={`card-gradient rounded-2xl p-6 hover:scale-105 transition-all group bg-gradient-to-br ${action.color}`}
                    >
                      <action.icon className="text-3xl text-white mb-2 mx-auto" />
                      <div className="text-white font-semibold text-sm">{action.label}</div>
                    </button>
                  ))}
                </div>

                {/* Token List */}
                <div className="space-y-3">
                  {[
                    { name: 'Ethereum', symbol: 'ETH', amount: '12.5', value: '$23,125.50', change: '+5.2%', positive: true },
                    { name: 'Bitcoin', symbol: 'BTC', amount: '0.025', value: '$1,125.00', change: '+2.8%', positive: true },
                    { name: 'BLAZE Token', symbol: 'BLAZE', amount: '1,000', value: '$100.00', change: '+15.3%', positive: true },
                    { name: 'Solana', symbol: 'SOL', amount: '45.2', value: '$217.39', change: '-1.2%', positive: false },
                  ].map((token, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 rounded-xl bg-navy-light hover:bg-navy-light/80 transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-pink-purple flex items-center justify-center text-xl font-bold">
                          {token.symbol.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-white">{token.name}</div>
                          <div className="text-gray-400 text-sm">{token.amount} {token.symbol}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-white">{token.value}</div>
                        <div className={`text-sm font-semibold ${token.positive ? 'text-green-400' : 'text-red-400'}`}>
                          {token.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'swap' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="card-gradient rounded-2xl p-6">
                  <div className="text-gray-400 mb-2">You Pay</div>
                  <div className="flex items-center justify-between">
                    <input 
                      type="text" 
                      placeholder="0.0" 
                      className="bg-transparent text-3xl font-bold text-white outline-none w-full"
                    />
                    <button className="px-4 py-2 bg-navy-light rounded-xl font-bold flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-pink-purple"></div>
                      ETH
                    </button>
                  </div>
                  <div className="text-gray-400 text-sm mt-2">Balance: 12.5 ETH</div>
                </div>

                <div className="flex justify-center">
                  <button className="w-12 h-12 rounded-full bg-gradient-pink-purple flex items-center justify-center hover:scale-110 transition-transform">
                    <FiRefreshCw className="text-white text-xl" />
                  </button>
                </div>

                <div className="card-gradient rounded-2xl p-6">
                  <div className="text-gray-400 mb-2">You Receive</div>
                  <div className="flex items-center justify-between">
                    <input 
                      type="text" 
                      placeholder="0.0" 
                      className="bg-transparent text-3xl font-bold text-white outline-none w-full"
                    />
                    <button className="px-4 py-2 bg-navy-light rounded-xl font-bold flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-pink-purple"></div>
                      BLAZE
                    </button>
                  </div>
                </div>

                <button className="w-full py-4 bg-gradient-pink-purple hover:opacity-90 rounded-xl font-bold text-lg transition-all glow-effect">
                  Swap Tokens
                </button>
              </motion.div>
            )}

            {activeTab === 'stake' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card-gradient rounded-2xl p-8">
                    <div className="text-gray-400 mb-2">Total Staked</div>
                    <div className="text-4xl font-black gradient-text mb-1">1,000 BLAZE</div>
                    <div className="text-gray-400">≈ $100.00</div>
                  </div>
                  <div className="card-gradient rounded-2xl p-8">
                    <div className="text-gray-400 mb-2">Rewards Earned</div>
                    <div className="text-4xl font-black text-green-400 mb-1">125 BLAZE</div>
                    <div className="text-gray-400">25% APY</div>
                  </div>
                </div>

                <div className="card-gradient rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="font-bold text-xl text-white">Stake BLAZE</div>
                      <div className="text-gray-400">Lock period: 30 days</div>
                    </div>
                    <div className="text-3xl font-black gradient-text">25% APY</div>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Amount to stake" 
                    className="w-full bg-navy-light rounded-xl p-4 text-white font-bold text-lg outline-none mb-4"
                  />
                  <button className="w-full py-4 bg-gradient-pink-purple hover:opacity-90 rounded-xl font-bold text-lg transition-all glow-effect">
                    Stake Now
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Live Demo CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-lg mb-6">
              This is just a preview. Experience the full wallet in action:
            </p>
            <a 
              href="https://my.blazewallet.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-gradient-pink-purple hover:opacity-90 rounded-xl font-bold text-xl transition-all transform hover:scale-105 glow-effect"
            >
              Launch Live Wallet
            </a>
          </motion.div>

          {/* Embedded Wallet iFrame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 rounded-3xl overflow-hidden border-2 border-pink/30 shadow-2xl shadow-pink/20"
          >
            <div className="bg-navy-dark p-4 border-b border-pink/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm font-mono">my.blazewallet.io</span>
              </div>
              <a 
                href="https://my.blazewallet.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink text-sm font-semibold transition-colors"
              >
                Open in New Tab →
              </a>
            </div>
            <iframe
              src="https://my.blazewallet.io"
              className="w-full h-[600px] md:h-[800px] bg-navy"
              title="BLAZE Wallet Demo"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

