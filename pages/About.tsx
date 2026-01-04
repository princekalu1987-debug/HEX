
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-black">
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-b border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
          <div className="order-2 lg:order-1">
            <h1 className="text-8xl md:text-9xl font-black tracking-tighter mb-12 leading-none uppercase">
              THE <br/> VISIONARY.
            </h1>
            <p className="text-2xl md:text-3xl font-light text-zinc-400 leading-tight max-w-xl">
              Penny is not just a founder. At 16, he is the algorithm that powers the HEX aesthetic.
            </p>
          </div>
          <div className="order-1 lg:order-2 aspect-[4/3] bg-zinc-900 overflow-hidden border border-zinc-800">
             <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&grayscale" alt="Founder Portrait" className="w-full h-full object-cover opacity-60" />
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="max-w-5xl mx-auto px-6 py-40">
        <div className="space-y-24">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-600 block mb-8">Origins</span>
            <h2 className="text-4xl font-black uppercase tracking-tight mb-8">Lagos, 2025.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-500 leading-relaxed text-sm">
              <p>
                Penny grew up in the vibrant chaos of Lagos. A 16-year-old boy with a preternatural understanding of both traditional Nigerian textiles and high-level neural programming, he saw a gap in how the world wears identity.
              </p>
              <p>
                Founded in 2025 when he was just entering his mid-teens, HEX was Penny's answer to the "static" nature of traditional fashion. He believes that youth is not a limitation, but a lens through which the future is seen most clearly.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 p-12 border border-zinc-800">
            <h3 className="text-2xl font-black uppercase mb-6">The Vision</h3>
            <p className="text-lg text-zinc-300 italic mb-10 leading-relaxed">
              "My age allows me to see the world without the baggage of 'how things have always been done.' HEX isn't just about clothes; it's about the interface between our skin and our digital ghosts."
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">— PENNY</p>
          </div>

          <div>
             <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-600 block mb-8">Philosophy</span>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                   <h4 className="font-black text-xs uppercase mb-4 tracking-widest">Heritage Integration</h4>
                   <p className="text-zinc-500 text-xs leading-loose">Penny uses algorithmic versions of traditional Nigerian patterns, ensuring cultural DNA survives into the neural era.</p>
                </div>
                <div>
                   <h4 className="font-black text-xs uppercase mb-4 tracking-widest">Digital Permanence</h4>
                   <p className="text-zinc-500 text-xs leading-loose">With our NFT ecosystem, your purchases live forever on-chain, evolving as the metaverse expands.</p>
                </div>
                <div>
                   <h4 className="font-black text-xs uppercase mb-4 tracking-widest">Ethical Logic</h4>
                   <p className="text-zinc-500 text-xs leading-loose">Every HEX design is optimized for zero-waste production using Penny's proprietary 'Clean-Node' manufacturing.</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
