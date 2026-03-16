import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string, path?: string) => {
    if (path) {
      navigate(path);
      window.scrollTo(0, 0);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl flex flex-col gap-2 pointer-events-none">
      {/* Top Contact Bar */}
      <div className={`flex justify-between items-center px-6 py-1 transition-all duration-500 pointer-events-auto ${
        isScrolled ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
      }`}>
        <div className="flex gap-4 md:gap-8 items-center">
          <a 
            href="mailto:aqilali381@gmail.com" 
            className="text-[10px] font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <Mail size={12} className="text-primary/60" />
            <span className="hidden sm:inline">aqilali381@gmail.com</span>
            <span className="sm:hidden font-black">EMAIL</span>
          </a>
          <a 
            href="tel:+917210562014" 
            className="text-[10px] font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <Phone size={12} className="text-primary/60" />
            <span className="hidden sm:inline">+91 7210562014</span>
            <span className="sm:hidden font-black">CALL</span>
          </a>
        </div>
        
        <div className="flex gap-4 items-center">
          <a 
            href="https://www.behance.net/aqilali" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-white transition-all"
          >
            Behance
          </a>
          <a 
            href="https://dribbble.com/md-aqil" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-white transition-all"
          >
            Dribbble
          </a>
        </div>
      </div>

      <nav className={`transition-all duration-500 w-full pointer-events-auto ${
        isScrolled ? '-mt-6' : ''
      }`}>
        <div className={`transition-all duration-500 rounded-full border border-white/5 ${
          isScrolled 
            ? 'bg-black/40 backdrop-blur-2xl px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
            : 'bg-black/20 backdrop-blur-md py-4 px-4'
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
                { label: 'Work', id: 'work', path: '/work' },
                { label: 'Resume', id: 'resume', path: '/resume' },
                { label: 'Services', id: 'services' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <button 
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.path)}
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
    </div>

  );
};

export default Navigation;