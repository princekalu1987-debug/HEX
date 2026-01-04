
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const featuredCollections = [
    {
      title: "Lagos Bloom 2025",
      desc: "Bio-reactive garments inspired by Nigerian flora.",
      img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800",
      link: "/collection?filter=BIOMETRIC"
    },
    {
      title: "Neural Street",
      desc: "Streetwear that adapts to urban noise levels.",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
      link: "/collection?filter=NEURAL"
    },
    {
      title: "Void Formal",
      desc: "Absolute darkness in tailoring. Light-absorbing fabric.",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
      link: "/collection?filter=VOID"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl">
          <span className="text-[10px] font-bold tracking-[0.8em] text-zinc-500 uppercase mb-8 block animate-pulse">
            Design Engine: Penny
          </span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
            HEX <br className="md:hidden" /> ARCHIVE
          </h1>
          <p className="text-sm md:text-base text-zinc-400 mb-12 tracking-[0.3em] uppercase max-w-2xl mx-auto leading-loose">
            High fashion meets neural integration. Founded in Lagos by Penny, 2025.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/collection" className="w-full md:w-auto px-12 py-5 bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all">
              The Archive
            </Link>
            <Link to="/nfts" className="w-full md:w-auto px-12 py-5 border border-white text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Digital Assets
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="py-40 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 space-y-4">
            <div className="max-w-xl">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 block mb-4">The Collections</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                Curated Visions <br/> of 2025.
              </h2>
            </div>
            <Link to="/collection" className="text-xs font-bold uppercase tracking-widest border-b border-zinc-800 pb-2 hover:border-white transition-all">
              View All Seasons
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredCollections.map((col, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-8 border border-zinc-900">
                  <img src={col.img} alt={col.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <Link to={col.link} className="inline-block bg-white text-black p-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </Link>
                  </div>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-2">{col.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NFT Teaser */}
      <section className="py-40 px-6 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900/10 skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 block mb-6">Digital Frontier</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-tight">
              Wearable <br/> Identity.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-lg">
              Every HEX piece comes with a matching digital twin. Our Wearable NFTs are more than tokens; they are functional skins for the most prestigious virtual worlds. Founded by Penny to bridge reality.
            </p>
            <Link to="/nfts" className="inline-block px-10 py-4 bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Explore NFT Gallery
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square bg-zinc-900 border border-zinc-800 p-12 flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600" alt="NFT Art" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
