import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50">
      <Button
        onClick={() => window.open('https://wa.me/917210562014', '_blank')}
        className="group relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5c] text-white shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 border-none p-0 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 relative z-10" />
        
        {/* Pulsing effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </Button>
      
      {/* Label */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-background/80 backdrop-blur-md border border-white/10 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
        Chat with me
      </div>
    </div>
  );
};

export default WhatsAppButton;
