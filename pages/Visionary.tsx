
import React, { useState } from 'react';
import { generateVisionaryFashion } from '../services/gemini';
import { GeneratedImage } from '../types';

const Visionary: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<GeneratedImage[]>([]);

  const handleGenerate = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);
    try {
      const url = await generateVisionaryFashion(prompt);
      if (url) {
        setImages(prev => [{ url, prompt, timestamp: Date.now() }, ...prev]);
        setPrompt('');
      }
    } catch (error) {
      console.error(error);
      alert("Neural visualization failed. The dream was too complex.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Sidebar Controls */}
        <div className="lg:col-span-4">
          <div className="sticky top-28">
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Visionary Labs</h1>
            <p className="text-zinc-500 text-sm mb-12 uppercase tracking-widest leading-relaxed">
              Manifest your aesthetic desires. Describe a garment, and the HEX core will visualize it in the year 2025.
            </p>

            <div className="space-y-8">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3 block">Neural Prompt</label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., A liquid chrome evening gown with biometric light fibers..."
                  className="w-full h-32 bg-zinc-900 border border-zinc-800 p-4 text-sm outline-none focus:border-white transition-all resize-none"
                />
              </div>
              
              <button 
                onClick={handleGenerate}
                disabled={loading || !prompt}
                className="w-full bg-white text-black font-black uppercase tracking-widest py-4 hover:bg-zinc-300 transition-all disabled:opacity-50"
              >
                {loading ? 'DREAMING...' : 'GENERATE VISION'}
              </button>
            </div>

            <div className="mt-12 p-6 border border-zinc-800 bg-zinc-900/50">
              <h3 className="text-[10px] font-bold uppercase tracking-widest mb-2">Technical Specs</h3>
              <p className="text-[10px] text-zinc-500 leading-relaxed uppercase tracking-widest">
                Engine: Gemini 2.5 Image-Core<br/>
                Resolution: 1024x1365px<br/>
                Latency: ~5-10s
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="lg:col-span-8">
          {images.length === 0 && !loading && (
            <div className="h-[60vh] flex flex-col items-center justify-center border-2 border-dashed border-zinc-800 text-zinc-800">
              <span className="text-8xl font-black mb-4 uppercase">EMPTY</span>
              <p className="text-sm uppercase tracking-widest">Awaiting Neural Input</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loading && (
              <div className="aspect-[3/4] bg-zinc-900 animate-pulse border border-zinc-800 flex items-center justify-center">
                <p className="text-xs uppercase tracking-[0.5em] text-zinc-700 animate-bounce">Generating...</p>
              </div>
            )}
            {images.map((img, i) => (
              <div key={img.timestamp} className="group relative overflow-hidden bg-black border border-zinc-800">
                <img src={img.url} alt={img.prompt} className="w-full aspect-[3/4] object-cover" />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-2">Prompt Result</p>
                  <p className="text-xs italic text-white uppercase leading-relaxed font-light line-clamp-3">"{img.prompt}"</p>
                  <button 
                    onClick={() => window.open(img.url)}
                    className="mt-4 text-[10px] font-bold border-b border-white self-start uppercase tracking-widest"
                  >
                    Download Frame
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Visionary;
