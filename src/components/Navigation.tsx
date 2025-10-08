'use client';

import BlazeLogo from './BlazeLogo';

export default function Navigation() {
  return (
    <nav className="fixed top-12 left-0 right-0 z-40 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <BlazeLogo className="w-10 h-10" />
            <span className="text-2xl font-bold gradient-text">BLAZE</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a>
            <a href="#comparison" className="text-gray-300 hover:text-white transition-colors">Compare</a>
            <a href="#whitepaper" className="text-gray-300 hover:text-white transition-colors">Whitepaper</a>
          </div>

          <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg font-semibold transition-all transform hover:scale-105">
            Launch App
          </button>
        </div>
      </div>
    </nav>
  );
}

