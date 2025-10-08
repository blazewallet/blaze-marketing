export default function WhitepaperSection() {
  return (
    <section id="whitepaper" className="py-32 px-4 bg-gradient-to-b from-navy to-navy-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/10 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          Learn More About <span className="gradient-text">BLAZE</span>
        </h2>
        <p className="text-gray-300 text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
          Dive deep into our technology, tokenomics, and vision for the future of decentralized finance.
          Read our comprehensive whitepaper to understand how we're revolutionizing crypto wallets.
        </p>
        
        <div className="card-gradient rounded-3xl p-12 mb-12">
          <h3 className="text-3xl font-bold mb-6">What's Inside?</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-3">
              <span className="text-pink text-2xl">📖</span>
              <div>
                <h4 className="font-bold text-xl mb-2">Technical Architecture</h4>
                <p className="text-gray-400">Deep dive into our multi-chain infrastructure and security protocols</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-pink text-2xl">💰</span>
              <div>
                <h4 className="font-bold text-xl mb-2">Token Economics</h4>
                <p className="text-gray-400">Detailed breakdown of token distribution and utility</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-pink text-2xl">🗺️</span>
              <div>
                <h4 className="font-bold text-xl mb-2">Product Roadmap</h4>
                <p className="text-gray-400">Our vision and timeline for the next 5 years</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-pink text-2xl">🤝</span>
              <div>
                <h4 className="font-bold text-xl mb-2">Team & Partners</h4>
                <p className="text-gray-400">Meet the team and our strategic partnerships</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 justify-center flex-wrap">
          <button className="px-12 py-5 bg-gradient-pink-purple hover:opacity-90 rounded-xl font-bold text-xl transition-all transform hover:scale-105 glow-effect">
            Read Whitepaper
          </button>
          <button className="px-12 py-5 border-2 border-pink/50 hover:bg-pink/10 rounded-xl font-bold text-xl transition-all backdrop-blur-sm">
            Download PDF
          </button>
        </div>
      </div>
    </section>
  );
}
