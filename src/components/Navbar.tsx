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

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Features', id: 'features' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Community', id: 'community' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[var(--card)]/95 backdrop-blur-md shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-[var(--text-4)] to-[var(--bg-3)] p-2 rounded-xl">
              <Code className="size-6 text-[var(--text-1)]" />
            </div>
            <div className="text-[var(--text-4)]">FOSSIT</div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[#EEC643] hover:text-[#91E5F6] uppercase"
              >
                {link.label}
              </button>
            ))}

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
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[#EEC643] hover:text-[var(--text-4)] transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
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
