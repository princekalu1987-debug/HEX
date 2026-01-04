
import React from 'react';

const NFTs: React.FC = () => {
  const nfts = [
    { id: 'NFT_01', name: 'NEURAL SKINS #01', type: 'AVATAR OVERLAY', price: '0.45 ETH', img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=600' },
    { id: 'NFT_02', name: 'VOID CLOAK', type: 'DIGITAL WEARABLE', price: '1.20 ETH', img: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=600' },
    { id: 'NFT_03', name: 'LAGOS CORE CHROME', type: 'ACCESSORY', price: '0.15 ETH', img: 'https://images.unsplash.com/photo-1614812513172-567d2fe96a75?auto=format&fit=crop&q=80&w=600' },
    { id: 'NFT_04', name: 'BIOMETRIC WINGS', type: 'EMOTE EFFECT', price: '0.80 ETH', img: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 block mb-4">Digital Assets</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">NFT <br/> ATELIER.</h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Own the future of your digital identity. Each NFT is a verified asset crafted by Penny's design engine, compatible with Ethereum and major Metaverse protocols.
          </p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-8">
           <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Market Status</p>
           <p className="text-2xl font-black text-white">ACTIVE</p>
           <button className="mt-4 text-[10px] font-bold uppercase tracking-widest text-white border-b border-white">Connect Wallet</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {nfts.map((nft) => (
          <div key={nft.id} className="group relative bg-zinc-950 border border-zinc-900 p-1">
             <div className="relative aspect-square overflow-hidden mb-6">
                <img src={nft.img} alt={nft.name} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
             <div className="p-6 flex justify-between items-end">
                <div>
                   <p className="text-[10px] font-black tracking-widest text-zinc-600 mb-2">{nft.type}</p>
                   <h3 className="text-2xl font-black uppercase tracking-tight">{nft.name}</h3>
                   <p className="text-xs text-zinc-500 mt-2 font-mono">{nft.id}</p>
                </div>
                <div className="text-right">
                   <p className="text-xl font-black text-white">{nft.price}</p>
                   <button className="mt-4 px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all">
                      Bid Now
                   </button>
                </div>
             </div>
          </div>
        ))}
      </div>

      <section className="mt-40 py-24 border-t border-zinc-900">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
               <h4 className="font-black text-xs uppercase tracking-widest mb-6">Interoperability</h4>
               <p className="text-zinc-500 text-xs leading-loose uppercase tracking-widest">GLB, VOX, and FBX files provided with every mint. Ready for Decentraland, Sandbox, and beyond.</p>
            </div>
            <div>
               <h4 className="font-black text-xs uppercase tracking-widest mb-6">Scarcity Engine</h4>
               <p className="text-zinc-500 text-xs leading-loose uppercase tracking-widest">Only 25 iterations of each 'Vision' are ever minted. Exclusive rarity tiers for long-term collectors.</p>
            </div>
            <div>
               <h4 className="font-black text-xs uppercase tracking-widest mb-6">Neural Rewards</h4>
               <p className="text-zinc-500 text-xs leading-loose uppercase tracking-widest">Holders gain early access to physical drops and private events in the Lagos Atelier.</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default NFTs;
