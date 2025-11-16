import { useState, useEffect } from 'react';
import { Github, Code, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-[#492170] to-[#8f5fbf] p-2 rounded-xl">
              <Code className="size-6 text-white" />
            </div>
            <h1 className="text-3xl text-[#492170]">FOSSIT</h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-[#1f0322] hover:text-[#492170] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('features')} className="text-[#1f0322] hover:text-[#492170] transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-[#1f0322] hover:text-[#492170] transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('community')} className="text-[#1f0322] hover:text-[#492170] transition-colors">
              Community
            </button>
            <Button className="bg-gradient-to-r from-[#492170] to-[#8f5fbf] hover:from-[#702129] hover:to-[#db5461] text-white shadow-lg hover:shadow-xl transition-all">
              <Github className="size-4 mr-2" />
              Sign In
            </Button>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#1f0322]"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-[#1f0322] hover:text-[#492170] transition-colors text-left">
              About
            </button>
            <button onClick={() => scrollToSection('features')} className="text-[#1f0322] hover:text-[#492170] transition-colors text-left">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-[#1f0322] hover:text-[#492170] transition-colors text-left">
              How It Works
            </button>
            <button onClick={() => scrollToSection('community')} className="text-[#1f0322] hover:text-[#492170] transition-colors text-left">
              Community
            </button>
            <Button className="bg-gradient-to-r from-[#492170] to-[#8f5fbf] hover:from-[#702129] hover:to-[#db5461] text-white w-full">
              <Github className="size-4 mr-2" />
              Sign In
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
