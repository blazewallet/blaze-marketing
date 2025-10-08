import Navigation from '@/components/Navigation';
import PriceTicker from '@/components/PriceTicker';
import TeamSection from '@/components/TeamSection';
import ComparisonTable from '@/components/ComparisonTable';
import UseCasesSection from '@/components/UseCasesSection';
import WhitepaperSection from '@/components/WhitepaperSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import RoadmapSection from '@/components/RoadmapSection';
import WalletDemo from '@/components/WalletDemo';

export default function Home() {
  return (
    <>
      <PriceTicker />
      <Navigation />
      
      <main className="pt-28 bg-navy">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-dark to-navy"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink/10 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple/10 rounded-full filter blur-[100px]"></div>
          </div>
          
          <div className="container mx-auto text-center relative z-10 max-w-6xl">
            {/* Main Logo/Title */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-pink-purple rounded-2xl blur-xl opacity-50"></div>
                <div className="relative px-12 py-6 bg-gradient-pink-purple rounded-2xl">
                  <h1 className="text-6xl md:text-7xl font-black text-white tracking-tight">
                    BLAZE
                  </h1>
                </div>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Blaze <span className="gradient-text">Wallet</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Lightning-fast transactions, built-in swapping, and cashback rewards in one beautiful app.
            </p>
            
            <div className="flex gap-4 justify-center mb-20">
              <button className="px-10 py-4 bg-gradient-pink-purple hover:opacity-90 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-pink/50 glow-effect">
                Launch App
              </button>
              <button className="px-10 py-4 border-2 border-pink/50 hover:bg-pink/10 rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
                Learn More
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="card-dark rounded-2xl p-8 hover:scale-105 transition-all">
                <div className="text-5xl font-black gradient-text mb-2">8+</div>
                <div className="text-gray-400 text-lg">Blockchains</div>
              </div>
              <div className="card-dark rounded-2xl p-8 hover:scale-105 transition-all">
                <div className="text-5xl font-black gradient-text mb-2">25%</div>
                <div className="text-gray-400 text-lg">Max APY</div>
              </div>
              <div className="card-dark rounded-2xl p-8 hover:scale-105 transition-all">
                <div className="text-5xl font-black gradient-text mb-2">5%</div>
                <div className="text-gray-400 text-lg">Cashback</div>
              </div>
              <div className="card-dark rounded-2xl p-8 hover:scale-105 transition-all">
                <div className="text-5xl font-black gradient-text mb-2">0.1s</div>
                <div className="text-gray-400 text-lg">Tx Speed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-32 px-4 relative">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Why <span className="gradient-text">Join?</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                Built for speed, security, and simplicity. Experience the future of crypto wallets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-dark rounded-3xl p-10 hover:scale-105 transition-all group">
                <div className="text-7xl mb-6">⚡</div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-pink transition-colors">Lightning Fast</h3>
                <p className="text-gray-400 text-lg leading-relaxed">Transactions in milliseconds, not minutes. Experience instant crypto transfers.</p>
              </div>

              <div className="card-dark rounded-3xl p-10 hover:scale-105 transition-all group">
                <div className="text-7xl mb-6">🔒</div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-pink transition-colors">Bank-Grade Security</h3>
                <p className="text-gray-400 text-lg leading-relaxed">Your keys, your crypto. Always. Non-custodial wallet with military-grade encryption.</p>
              </div>

              <div className="card-dark rounded-3xl p-10 hover:scale-105 transition-all group">
                <div className="text-7xl mb-6">💰</div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-pink transition-colors">Cashback Rewards</h3>
                <p className="text-gray-400 text-lg leading-relaxed">Earn 2-5% BLAZE tokens on every transaction you make.</p>
              </div>

              <div className="card-dark rounded-3xl p-10 hover:scale-105 transition-all group">
                <div className="text-7xl mb-6">🗳️</div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-pink transition-colors">Governance</h3>
                <p className="text-gray-400 text-lg leading-relaxed">Vote on protocol changes and earn rewards for participating.</p>
              </div>

              <div className="card-dark rounded-3xl p-10 hover:scale-105 transition-all group">
                <div className="text-7xl mb-6">🔗</div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-pink transition-colors">Multi-Chain</h3>
                <p className="text-gray-400 text-lg leading-relaxed">Support for 8+ major blockchains in one unified interface.</p>
              </div>

              <div className="card-dark rounded-3xl p-10 hover:scale-105 transition-all group">
                <div className="text-7xl mb-6">✨</div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-pink transition-colors">Beautiful UI</h3>
                <p className="text-gray-400 text-lg leading-relaxed">Stunning design that makes crypto accessible and fun.</p>
              </div>
            </div>
          </div>
        </section>

        <WalletDemo />
        <TeamSection />
        <ComparisonTable />
        <TokenomicsSection />
        <RoadmapSection />
        <UseCasesSection />
        <WhitepaperSection />

        {/* Footer */}
        <footer className="py-16 px-4 border-t border-pink/20">
          <div className="container mx-auto text-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold gradient-text mb-4">BLAZE Wallet</h3>
              <p className="text-gray-400 text-lg">The future of decentralized finance</p>
            </div>
            <div className="flex gap-8 justify-center mb-8 flex-wrap">
              <a href="#" className="text-gray-400 hover:text-pink transition-colors text-lg">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-pink transition-colors text-lg">Discord</a>
              <a href="#" className="text-gray-400 hover:text-pink transition-colors text-lg">Telegram</a>
              <a href="#" className="text-gray-400 hover:text-pink transition-colors text-lg">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-pink transition-colors text-lg">Medium</a>
            </div>
            <p className="text-gray-500">&copy; 2025 BLAZE Wallet. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
