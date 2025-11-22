import { useState, useEffect } from 'react';
import { Github, Code, Menu, X } from 'lucide-react';
import { OutlinedButton } from './Button';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--card)]/95 backdrop-blur-md shadow-lg' : 'bg-[var(--card)]'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-[var(--text-4)] to-[var(--bg-3)] p-2 rounded-xl">
              <Code className="size-6 text-[var(--text-1)]" />
            </div>
            <div className="text-[var(--text-4)]">FOSSIT</div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-[var(--text-1)] hover:text-[var(--text-4)] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('features')} className="text-[var(--text-1)] hover:text-[var(--text-4)] transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-[var(--text-1)] hover:text-[var(--text-4)] transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('community')} className="text-[var(--text-1)] hover:text-[var(--text-4)] transition-colors">
              Community
            </button>
            
            <OutlinedButton>
              <Github className="size-4 mr-2" />
              Sign In
            </OutlinedButton>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[var(--text-1)]"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
            <div className="md:hidden pb-6 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-[var(--text-1)] hover:text-[var(--text-4)] transition-colors text-left">
              About
            </button>
            <button onClick={() => scrollToSection('features')} className="text-[var(--text-1)] hover:text-[var(--text-4)] transition-colors text-left">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-[var(--text-1)] hover:text-[var(--text-4)] transition-colors text-left">
              How It Works
            </button>
            <button onClick={() => scrollToSection('community')} className="text-[var(--text-1)] hover:text-[var(--text-4)] transition-colors text-left">
              Community
            </button>
            <OutlinedButton>
              <Github className="size-4 mr-2" />
              Sign In
            </OutlinedButton>
          </div>
        )}
      </div>
    </nav>
  );
}
