
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Stylist from './pages/Stylist';
import Visionary from './pages/Visionary';
import About from './pages/About';
import Collection from './pages/Collection';
import NFTs from './pages/NFTs';

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
    <path d="M50 5L93.3013 30V80L50 105L6.69873 80V30L50 5Z" stroke="white" strokeWidth="4" />
    <path d="M50 25L71.6506 37.5V62.5L50 75L28.3494 62.5V37.5L50 25Z" fill="white" />
  </svg>
);

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collection', path: '/collection' },
    { name: 'Digital Assets (NFT)', path: '/nfts' },
    { name: 'AI Stylist', path: '/stylist' },
    { name: 'Visionary', path: '/visionary' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity">
          <Logo />
          HEX
        </Link>
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-[10px] uppercase tracking-widest transition-colors hover:text-zinc-400 ${location.pathname === link.path ? 'text-white font-bold' : 'text-zinc-500'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-[10px] border border-white px-4 py-2 hover:bg-white hover:text-black transition-all font-bold tracking-widest">
            SHOP NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black border-t border-zinc-900 py-24 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center mb-6">
          <Logo />
          <h2 className="text-3xl font-black">HEX</h2>
        </div>
        <p className="text-zinc-500 max-w-sm text-sm leading-relaxed mb-6">
          Founded by Penny in 2025. Merging Nigerian youth spirit with neural architectures. We create physical armor and digital identities for the next generation.
        </p>
        <div className="flex space-x-4">
          <span className="text-xs text-zinc-600 font-bold uppercase tracking-widest">Lagos</span>
          <span className="text-xs text-zinc-600 font-bold uppercase tracking-widest">London</span>
          <span className="text-xs text-zinc-600 font-bold uppercase tracking-widest">The Metaverse</span>
        </div>
      </div>
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest mb-6">Ecosystem</h3>
        <ul className="space-y-3 text-xs text-zinc-400 uppercase tracking-widest">
          <li><Link to="/collection" className="hover:text-white transition-colors">Physical Archive</Link></li>
          <li><Link to="/nfts" className="hover:text-white transition-colors">Wearable NFTs</Link></li>
          <li><Link to="/visionary" className="hover:text-white transition-colors">Generative Labs</Link></li>
          <li><Link to="/stylist" className="hover:text-white transition-colors">AI Concierge</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest mb-6">Connect</h3>
        <ul className="space-y-3 text-xs text-zinc-400 uppercase tracking-widest">
          <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Discord Community</a></li>
          <li><a href="#" className="hover:text-white transition-colors">OpenSea Portal</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 uppercase tracking-widest">
      <p>© 2025 HEX FASHION. POWERED BY PENNY DESIGN ENGINE.</p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-white">Privacy</a>
        <a href="#" className="hover:text-white">Terms</a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col hex-bg">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stylist" element={<Stylist />} />
            <Route path="/visionary" element={<Visionary />} />
            <Route path="/about" element={<About />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/nfts" element={<NFTs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
