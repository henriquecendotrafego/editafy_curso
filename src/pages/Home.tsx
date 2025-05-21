import React from 'react';
import { ArrowRight } from 'lucide-react';

function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-7xl font-bold text-[#2B580C] leading-tight mb-12">
        Vendas de forma<br />
        simplificada, para todo o<br />
        mundo!
      </h2>

      <div className="grid grid-cols-3 gap-8 mt-16">
        {/* Download Cards */}
        <div className="border-2 border-[#2B580C] rounded-lg p-6 hover:bg-[#2B580C] hover:text-white transition-colors group">
          <p className="text-xl font-semibold mb-4">SIMPLIFIQUE SUAS VENDAS CONOSCO!</p>
          <ArrowRight className="w-6 h-6 text-[#2B580C] group-hover:text-white" />
        </div>
        
        <div className="border-2 border-[#2B580C] rounded-lg p-6 flex items-center justify-between hover:bg-[#2B580C] hover:text-white transition-colors group">
          <img src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=100&h=100" alt="App Store" className="w-12 h-12" />
          <p>Soon on the App Store</p>
          <ArrowRight className="w-6 h-6 text-[#2B580C] group-hover:text-white" />
        </div>

        <div className="border-2 border-[#2B580C] rounded-lg p-6 flex items-center justify-between hover:bg-[#2B580C] hover:text-white transition-colors group">
          <img src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=100&h=100" alt="Play Store" className="w-12 h-12" />
          <p>Soon on Google Play</p>
          <ArrowRight className="w-6 h-6 text-[#2B580C] group-hover:text-white" />
        </div>
      </div>
    </main>
  );
}

export default Home;