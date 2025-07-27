import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CaseStudiesSection />
      <ServicesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Md Aqil. Crafted with psychology & precision.
            </div>
            <div className="text-sm text-muted-foreground">
              Available for select projects only
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
