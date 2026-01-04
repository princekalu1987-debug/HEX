
import React, { useState, useRef, useEffect } from 'react';
import { getStylistResponse } from '../services/gemini';
import { Message } from '../types';

const Stylist: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Welcome to the HEX Atelier. I am your AI stylist, tuned to the visions of Penny. How can I assist your aesthetic transformation today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.content }]
      }));
      const response = await getStylistResponse(history, userMsg);
      setMessages(prev => [...prev, { role: 'model', content: response || 'I apologize, the neural link is fluctuating. Please try again.' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: 'Connection lost. The future is still processing.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col h-[80vh]">
      <div className="mb-12">
        <h1 className="text-4xl font-black uppercase tracking-tighter">AI Stylist</h1>
        <p className="text-zinc-500 text-sm mt-2 uppercase tracking-widest">Neural Consultation | HEX v1.0.25</p>
      </div>

      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto space-y-8 pr-4 custom-scrollbar"
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-6 rounded-none border ${msg.role === 'user' ? 'bg-zinc-900 border-zinc-800' : 'bg-transparent border-zinc-700'}`}>
              <p className={`text-xs uppercase tracking-widest font-bold mb-3 ${msg.role === 'user' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                {msg.role === 'user' ? 'YOU' : 'HEX STYLIST'}
              </p>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                {msg.content}
              </p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-6 bg-transparent border border-zinc-700 border-dashed animate-pulse">
              <p className="text-xs uppercase tracking-widest font-bold mb-3 text-zinc-400">ANALYZING AESTHETICS...</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-12 flex items-center space-x-4 border border-zinc-800 p-2 bg-zinc-900">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="ASK FOR STYLE ADVICE..."
          className="flex-grow bg-transparent border-none outline-none text-sm px-4 py-2 uppercase tracking-widest placeholder-zinc-700"
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          className="bg-white text-black text-xs font-black uppercase px-6 py-3 hover:bg-zinc-300 transition-all disabled:opacity-50"
        >
          {loading ? '...' : 'SEND'}
        </button>
      </div>
    </div>
  );
};

export default Stylist;
