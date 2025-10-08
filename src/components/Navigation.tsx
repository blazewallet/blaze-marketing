'use client';

import BlazeLogo from './BlazeLogo';

export default function Navigation() {
  return (
    <nav className="fixed top-12 left-0 right-0 z-40 bg-navy-dark/95 backdrop-blur-xl border-b border-pink/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <BlazeLogo className="w-12 h-12" />
            <span className="text-3xl font-black gradient-text">BLAZE</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-gray-300 hover:text-pink transition-colors font-semibold text-lg">Features</a>
            <a href="#team" className="text-gray-300 hover:text-pink transition-colors font-semibold text-lg">Team</a>
            <a href="#comparison" className="text-gray-300 hover:text-pink transition-colors font-semibold text-lg">Compare</a>
            <a href="#whitepaper" className="text-gray-300 hover:text-pink transition-colors font-semibold text-lg">Whitepaper</a>
          </div>

          <button className="px-8 py-3 bg-gradient-pink-purple hover:opacity-90 rounded-xl font-bold text-lg transition-all transform hover:scale-105 glow-effect">
            Launch App
          </button>
        </div>
      </div>
    </nav>
  );
}

