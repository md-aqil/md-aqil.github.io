import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import DeerikaCaseStudy from "./pages/DeerikaCaseStudy";
import ChangeCaptainCaseStudy from "./pages/ChangeCaptainCaseStudy";
import VelvetReelCaseStudy from './pages/VelvetReelCaseStudy';
import StayCluelessCaseStudy from './pages/StayCluelessCaseStudy';
import Work from "./pages/Work";
import HoussyCaseStudy from "./pages/HoussyCaseStudy";
import GoatXCaseStudy from "./pages/GoatXCaseStudy";
import ExoticCaseStudy from "./pages/ExoticCaseStudy";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import MobileNav from "./components/MobileNav";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/work" element={<Work />} />
            <Route path="/deerika-case-study" element={<DeerikaCaseStudy />} />
            <Route path="/changecaptain-case-study" element={<ChangeCaptainCaseStudy />} />
            <Route path="/velvet-reel-case-study" element={<VelvetReelCaseStudy />} />
            <Route path="/stay-clueless-case-study" element={<StayCluelessCaseStudy />} />
            <Route path="/houssy-case-study" element={<HoussyCaseStudy />} />
            <Route path="/goatx-case-study" element={<GoatXCaseStudy />} />
            <Route path="/exotic-case-study" element={<ExoticCaseStudy />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <MobileNav />
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);


export default App;
