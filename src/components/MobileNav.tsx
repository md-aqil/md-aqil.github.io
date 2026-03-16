import { Home, Briefcase, User, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const MobileNav = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Work', path: '/work', icon: Briefcase },
    { name: 'About', path: '/#about', icon: User },
    { name: 'Contact', path: '/#contact', icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  const handleClick = (path: string) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md print:hidden">
      <div className="bg-background/80 backdrop-blur-2xl border border-white/10 rounded-full py-3 px-6 shadow-2xl flex items-center justify-between">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => handleClick(item.path)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className={`w-6 h-6 ${active ? 'scale-110' : 'scale-100'} transition-transform`} />
              <span className="text-[10px] font-semibold uppercase tracking-wider">{item.name}</span>
              {active && (
                <div className="w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
