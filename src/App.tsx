
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@/components/Analytics";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StyleGuide from "./pages/StyleGuide";
import ProjectDetail from "./components/ProjectDetail";
import AIChatAgent from "./components/AIChatAgent";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Analytics trackingId="GA_MEASUREMENT_ID" />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/style-guide" element={<StyleGuide />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <AIChatAgent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
