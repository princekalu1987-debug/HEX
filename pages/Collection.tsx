
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Collection: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'ALL';
  const [filter, setFilter] = useState(initialFilter);
  const [activeStyle, setActiveStyle] = useState('ALL');

  useEffect(() => {
    const f = searchParams.get('filter');
    if (f) setFilter(f);
  }, [searchParams]);

  const categories = ['ALL', 'NEURAL', 'VOID', 'CORE', 'BIOMETRIC'];
  const styles = ['ALL', 'STREETWEAR', 'FORMAL', 'CASUAL', 'BOHEMIAN', 'AVANT-GARDE'];
  
  const items = [
    { 
      id: 'H01', 
      name: 'HEX NEURAL JACKET', 
      price: '$890', 
      cat: 'NEURAL', 
      style: 'STREETWEAR', 
      img: '10',
      description: 'Integrated haptic sensors that respond to urban environmental stimuli. Crafted with liquid-metal nylon.'
    },
    { 
      id: 'H02', 
      name: 'VOID TRENCH', 
      price: '$1200', 
      cat: 'VOID', 
      style: 'FORMAL', 
      img: '20',
      description: 'Utilizes ultra-black pigment technology to absorb 99.8% of visible light. Absolute minimalism.'
    },
    { 
      id: 'H03', 
      name: 'CORE TROUSER', 
      price: '$450', 
      cat: 'CORE', 
      style: 'CASUAL', 
      img: '30',
      description: 'Structured silhouette with ergonomic panelling for the modern nomad. Waterproof matte finish.'
    },
    { 
      id: 'H04', 
      name: 'BIOMETRIC VEIL', 
      price: '$320', 
      cat: 'BIOMETRIC', 
      style: 'AVANT-GARDE', 
      img: '40',
      description: 'A light-reactive headpiece that shifts transparency based on the wearer\'s heart rate.'
    },
    { 
      id: 'H05', 
      name: 'HEX SCULPT SHIRT', 
      price: '$560', 
      cat: 'CORE', 
      style: 'FORMAL', 
      img: '50',
      description: 'Precision-cut poplin with asymmetric architectural lines. Designed by Penny for the 2025 gala.'
    },
    { 
      id: 'H06', 
      name: 'NEURAL GLOVE SET', 
      price: '$180', 
      cat: 'NEURAL', 
      style: 'STREETWEAR', 
      img: '60',
      description: 'Conductive fiber fingertips and biometric wrist authentication. The future of interface.'
    },
    { 
      id: 'H07', 
      name: 'VOID BOOT', 
      price: '$740', 
      cat: 'VOID', 
      style: 'STREETWEAR', 
      img: '70',
      description: 'Gravity-defying sole architecture with memory foam carbon-fiber internals.'
    },
    { 
      id: 'H08', 
      name: 'BIOMETRIC CHOKER', 
      price: '$210', 
      cat: 'BIOMETRIC', 
      style: 'BOHEMIAN', 
      img: '80',
      description: 'Hand-woven Nigerian silk with embedded micro-LEDs that pulse with ambient noise.'
    },
    { 
      id: 'H09', 
      name: 'LUMEN CAPE', 
      price: '$1400', 
      cat: 'BIOMETRIC', 
      style: 'AVANT-GARDE', 
      img: '90',
      description: 'Photoluminescent fabric that stores solar energy to glow in absolute darkness.'
    },
    { 
      id: 'H10', 
      name: 'NEURAL KNIT', 
      price: '$400', 
      cat: 'NEURAL', 
      style: 'CASUAL', 
      img: '100',
      description: 'Soft-touch mesh with heat-regulating filaments. Adapts to body temperature changes.'
    },
    { 
      id: 'H11', 
      name: 'VOID GOWN', 
      price: '$2200', 
      cat: 'VOID', 
      style: 'FORMAL', 
      img: '110',
      description: 'Ethereal silk drapes that create a silhouette of shifting shadows. A masterpiece of negative space.'
    },
    { 
      id: 'H12', 
      name: 'CORE VEST', 
      price: '$350', 
      cat: 'CORE', 
      style: 'STREETWEAR', 
      img: '120',
      description: 'Modular utility vest with magnetic attachments. Versatile layering for 2025 city life.'
    },
  ];

  const filteredItems = items.filter(item => {
    const catMatch = filter === 'ALL' || item.cat === filter;
    const styleMatch = activeStyle === 'ALL' || item.style === activeStyle;
    return catMatch && styleMatch;
  });

  const updateFilter = (newFilter: string) => {
    setFilter(newFilter);
    setSearchParams({ filter: newFilter });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-20">
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-4">The Archive</h1>
        <p className="text-zinc-500 text-xs uppercase tracking-[0.4em]">Design Engine: Penny | Season 25.1</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Filters Sidebar */}
        <div className="lg:w-64 space-y-12 shrink-0">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Sort by Category</h3>
            <div className="flex flex-col space-y-3">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => updateFilter(cat)}
                  className={`text-left text-xs uppercase tracking-widest transition-all ${filter === cat ? 'text-white font-bold translate-x-2' : 'text-zinc-600 hover:text-zinc-300'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Shop by Style</h3>
            <div className="flex flex-col space-y-3">
              {styles.map(s => (
                <button 
                  key={s}
                  onClick={() => setActiveStyle(s)}
                  className={`text-left text-xs uppercase tracking-widest transition-all ${activeStyle === s ? 'text-white font-bold translate-x-2' : 'text-zinc-600 hover:text-zinc-300'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-zinc-900">
             <p className="text-[9px] text-zinc-700 leading-relaxed uppercase tracking-widest">
                All physical pieces include a 1:1 Digital Twin NFT claimable upon delivery.
             </p>
          </div>
        </div>

        {/* Grid */}
        <div className="flex-grow">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12">
              {filteredItems.map(item => (
                <div key={item.id} className="group flex flex-col h-full bg-zinc-950 border border-zinc-900 overflow-hidden hover:border-zinc-700 transition-colors">
                  <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
                    <img 
                      src={`https://picsum.photos/id/${item.img}/800/1066?grayscale`} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-zinc-800">
                      <p className="text-[10px] font-black tracking-widest">{item.id}</p>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-grow pr-4">
                        <h3 className="text-lg font-black uppercase tracking-tight mb-1">{item.name}</h3>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{item.cat} // {item.style}</p>
                      </div>
                      <p className="text-lg font-bold text-white whitespace-nowrap">{item.price}</p>
                    </div>
                    
                    <p className="text-xs text-zinc-400 leading-relaxed mb-8 flex-grow">
                      {item.description}
                    </p>
                    
                    <button className="w-full bg-white text-black text-[10px] font-black px-8 py-4 tracking-widest uppercase hover:bg-zinc-200 transition-all">
                      View More Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-96 flex flex-col items-center justify-center border border-dashed border-zinc-900">
              <p className="text-zinc-600 text-xs uppercase tracking-[0.4em]">No artifacts found for this filter.</p>
              <button onClick={() => {setFilter('ALL'); setActiveStyle('ALL')}} className="mt-4 text-white text-[10px] underline uppercase tracking-widest">Reset Filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
