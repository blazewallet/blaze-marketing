'use client';

import { useEffect, useState } from 'react';

export default function PriceTicker() {
  const [price, setPrice] = useState(0.0100);
  const [change, setChange] = useState(2.50);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => prev + (Math.random() - 0.5) * 0.0001);
      setChange(prev => prev + (Math.random() - 0.5) * 0.1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-md z-50 border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">BLAZE</span>
              <span className="text-white font-bold">Price:</span>
              <span className="text-green-400 font-mono">${price.toFixed(4)}</span>
              <span className={`font-mono ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {change >= 0 ? '+' : ''}{change.toFixed(2)}%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold">Vol:</span>
              <span className="text-gray-300 font-mono">$1.23M</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold">Holders:</span>
              <span className="text-gray-300 font-mono">1,234</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

