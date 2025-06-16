
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@/components/Analytics";
import { initPerformanceMonitoring, PerformanceMonitor } from "@/utils/performance";
// import Index from "./pages/Index"; // Replaced by HomePage
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import StyleGuide from "./pages/StyleGuide";
import ProjectDetail from "./components/ProjectDetail";
import Layout from "./components/Layout"; // Import Layout
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

const App = () => {
  useEffect(() => {
    // Initialize performance monitoring
    initPerformanceMonitoring();
    
    // Add skip-to-content link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content-area'; // Updated to match Layout's main content ID
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
            <Toaster />
            <Sonner />
            <Analytics trackingId="GA_MEASUREMENT_ID" />
            <BrowserRouter>
              {/* The <main> wrapper is removed, Layout component now handles it */}
              <Routes>
                <Route path="/" element={<HomePage />} /> {/* Changed from Index to HomePage */}
                <Route path="/portfolio" element={<PortfolioPage />} /> {/* New */}
                <Route path="/experience" element={<ExperiencePage />} /> {/* New */}
                <Route path="/contact" element={<ContactPage />} /> {/* New */}

                <Route path="/style-guide" element={<StyleGuide />} /> {/* Assuming StyleGuide might have its own layout or no layout */}
                <Route path="/project/:id" element={<Layout><ProjectDetail /></Layout>} />
                  {/* Redirect old project route to the new portfolio page */}
                  <Route path="/project" element={<Navigate to="/portfolio" replace />} />
                {/* Catch-all route for 404 - this must be last */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <AIChatAgent />
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
