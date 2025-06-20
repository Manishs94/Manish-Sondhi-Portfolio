
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@/components/Analytics";
import { initPerformanceMonitoring, PerformanceMonitor } from "@/utils/performance";
import { useToast, initToast } from "@/components/ui/use-toast";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StyleGuide from "./pages/StyleGuide";
import PortfolioPage from "./pages/PortfolioPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import AIChatAgent from "./components/AIChatAgent";
import { useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const ToastInitializer = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    initToast(toast);
  }, [toast]);
  
  return null;
};

const App = () => {
  useEffect(() => {
    // Initialize performance monitoring
    initPerformanceMonitoring();
    
    // Add skip-to-content link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-to-content';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Preload critical resources
    const preloadCritical = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
      link.as = 'style';
      document.head.appendChild(link);
    };
    
    preloadCritical();
    
    return () => {
      // Cleanup performance observers when app unmounts
      const monitor = PerformanceMonitor.getInstance();
      monitor.disconnect();
    };
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <ToastInitializer />
            <Toaster />
            <Sonner />
            <Analytics trackingId="GA_MEASUREMENT_ID" />
            <BrowserRouter>
              <main id="main-content" className="min-h-screen">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/experience" element={<ExperiencePage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/style-guide" element={<StyleGuide />} />
                  {/* Redirect all project routes to portfolio page */}
                  <Route path="/project/:id" element={<Navigate to="/portfolio" replace />} />
                  <Route path="/project" element={<Navigate to="/portfolio" replace />} />
                  {/* Catch-all route for 404 - this must be last */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <AIChatAgent />
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
