import Navigation from '@/components/Navigation';
import PriceTicker from '@/components/PriceTicker';
import TeamSection from '@/components/TeamSection';
import ComparisonTable from '@/components/ComparisonTable';
import UseCasesSection from '@/components/UseCasesSection';
import WhitepaperSection from '@/components/WhitepaperSection';
import TokenomicsSection from '@/components/TokenomicsSection';

export default function Home() {
  return (
    <>
      <PriceTicker />
      <Navigation />
      
      <main className="pt-28">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="gradient-text">Blaze</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              <span className="font-semibold text-white">Lightning-fast transactions</span>, built-in swapping, and{' '}
              <span className="font-semibold text-white">cashback rewards</span> in one beautiful app.
            </p>
            
            <div className="flex gap-4 justify-center mb-16">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50">
                Launch App
              </button>
              <button className="px-8 py-4 border border-purple-500 hover:bg-purple-500/10 rounded-lg font-semibold text-lg transition-all">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="card-gradient rounded-xl p-6">
                <div className="text-4xl font-bold gradient-text mb-2">8+</div>
                <div className="text-gray-400">Blockchains</div>
              </div>
              <div className="card-gradient rounded-xl p-6">
                <div className="text-4xl font-bold gradient-text mb-2">25%</div>
                <div className="text-gray-400">Max APY</div>
              </div>
              <div className="card-gradient rounded-xl p-6">
                <div className="text-4xl font-bold gradient-text mb-2">5%</div>
                <div className="text-gray-400">Cashback</div>
              </div>
              <div className="card-gradient rounded-xl p-6">
                <div className="text-4xl font-bold gradient-text mb-2">0.1s</div>
                <div className="text-gray-400">Tx Speed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-4 bg-gradient-to-b from-black to-purple-900/10">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">
                Built for speed, security, and simplicity
              </h2>
              <p className="text-gray-400 text-lg">
                Experience the future of crypto wallets
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-gradient rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
                <p className="text-gray-400">Transactions in milliseconds, not minutes</p>
              </div>

              <div className="card-gradient rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold mb-4">Bank-Grade Security</h3>
                <p className="text-gray-400">Your keys, your crypto. Always.</p>
              </div>

              <div className="card-gradient rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-4">Cashback Rewards</h3>
                <p className="text-gray-400">Earn BLAZE tokens on every transaction</p>
              </div>

              <div className="card-gradient rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">🗳️</div>
                <h3 className="text-2xl font-bold mb-4">Governance</h3>
                <p className="text-gray-400">Vote on protocol changes and earn rewards</p>
              </div>

              <div className="card-gradient rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">🔗</div>
                <h3 className="text-2xl font-bold mb-4">Multi-Chain</h3>
                <p className="text-gray-400">Support for 8+ major blockchains</p>
              </div>

              <div className="card-gradient rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-4">Beautiful UI</h3>
                <p className="text-gray-400">Stunning design that makes crypto fun</p>
              </div>
            </div>
          </div>
        </section>

        <TeamSection />
        <ComparisonTable />
        <TokenomicsSection />
        <UseCasesSection />
        <WhitepaperSection />

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="container mx-auto text-center text-gray-400">
            <p>&copy; 2025 BLAZE Wallet. All rights reserved.</p>
            <div className="flex gap-6 justify-center mt-4">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Discord</a>
              <a href="#" className="hover:text-white transition-colors">Telegram</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

