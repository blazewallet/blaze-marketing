export default function WhitepaperSection() {
  return (
    <section id="whitepaper" className="py-24 px-4 bg-gradient-to-b from-purple-900/10 to-black">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-bold mb-8">
          Learn More About <span className="gradient-text">BLAZE</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
          Dive deep into our technology, tokenomics, and vision for the future of decentralized finance.
          Read our comprehensive whitepaper to understand how we're revolutionizing crypto wallets.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg font-semibold transition-all transform hover:scale-105">
            Read Whitepaper
          </button>
          <button className="px-8 py-4 border border-purple-500 hover:bg-purple-500/10 rounded-lg font-semibold transition-all">
            Download PDF
          </button>
        </div>
      </div>
    </section>
  );
}

