import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl ${
      isScrolled ? 'px-1' : 'px-0'
    }`}>
      <div className={`transition-all duration-500 rounded-full border border-white/5 ${
        isScrolled 
          ? 'bg-black/40 backdrop-blur-2xl px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
          : 'bg-transparent py-4 px-4'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-black tracking-tighter text-foreground group">
            MD <span className="text-primary group-hover:italic transition-all">AQIL</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5">
            {[
              { label: 'About', id: 'about' },
              { label: 'Work', id: 'work' },
              { label: 'Services', id: 'services' },
              { label: 'Contact', id: 'contact' }
            ].map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-all hover:bg-white/5 rounded-full"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle & CTA */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button 
              variant="premium" 
              size="sm"
              className="rounded-full px-6 font-bold text-[10px] uppercase tracking-widest"
              onClick={() => window.open('https://wa.me/917210562014', '_blank')}
            >
              Start Project
            </Button>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navigation;