

import React from 'react';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { SEOHead } from './SEOHead';
import { SocialShare } from './SocialShare';
import { LazyImage } from './LazyImage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { trackDownloadCV } from './Analytics';

const Hero = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const handleDownloadCV = () => {
    trackDownloadCV();
    
    // Convert Google Drive view link to direct download link
    const driveFileId = '1mh8jWf6acspgD7GOF8PW2OixRcL59zD5';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;
    
    // Create a temporary link element and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Manish_Sondhi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Downloading CV from Google Drive...');
  };

  return (
    <>
      <SEOHead
        title="Manish Sondhi — AI & Enterprise Product Designer | Fintech, Lending Systems, Design Systems"
        description="Senior Product Designer specializing in AI-enabled decisioning workflows, enterprise collateral management, and regulated lending platforms. 8+ years at Cync Software (nCino) and Bank of America."
        keywords="Senior Product Designer Portfolio, AI-Enabled Decision Interfaces, Enterprise Fintech UX, Collateral Management Design, Lending Platform UX, Regulated Industry Design, Design Systems"
      />
      
      <section id="home" className="pt-14 pb-12 md:pt-44 md:pb-32 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-100 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="section-container" ref={heroRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className={`mb-4 transition-all duration-1000 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'}`}>
                <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-portfolio-accent rounded-full font-medium mb-4">
                  Senior Product Designer · Enterprise Systems · AI-Enabled Workflows · Complex Operational Platforms
                </span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-text-dark dark:text-white mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'}`}>
                <span className="block text-portfolio-accent bg-gradient-to-r from-portfolio-accent to-blue-600 bg-clip-text text-transparent">Designing AI-Enabled Decision Systems for Enterprise Finance</span>
              </h1>

              <p className={`text-lg text-portfolio-text-light dark:text-gray-300 mb-8 max-w-xl transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'}`}>
                Senior Product Designer with 8+ years in enterprise fintech — building collateral management systems, AI-assisted decisioning workflows, and regulated lending platforms at Cync Software (nCino) and Bank of America. I work closest to the decisions that are expensive to get wrong.
              </p>

              <p className={`text-sm font-medium text-portfolio-text-dark dark:text-gray-100 mb-8 max-w-xl transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'}`}>
                Actively targeting senior product design and design lead roles at enterprise software companies, regulated-industry platforms, and mission-critical SaaS products.
              </p>
              
              <div className={`flex flex-wrap gap-4 mb-8 transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'}`}>
                <a href="#portfolio" className="portfolio-button-primary flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  View Case Studies <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <button 
                  onClick={handleDownloadCV}
                  className="portfolio-button-outline flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Download Resume <Download size={18} />
                </button>
              </div>

              <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'}`}>
                <div className="rounded-xl bg-white/80 dark:bg-gray-900/70 border border-blue-100 dark:border-gray-800 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-accent mb-2">Domains</p>
                  <p className="text-sm text-portfolio-text-light dark:text-gray-300">AI-enabled products, workflow platforms, decision-support tools, and data-rich applications across SaaS, fintech, and enterprise software</p>
                </div>
                <div className="rounded-xl bg-white/80 dark:bg-gray-900/70 border border-blue-100 dark:border-gray-800 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-accent mb-2">Systems</p>
                  <p className="text-sm text-portfolio-text-light dark:text-gray-300">Multi-user products that combine data, automation, and explainable guidance across complex operational workflows</p>
                </div>
                <div className="rounded-xl bg-white/80 dark:bg-gray-900/70 border border-blue-100 dark:border-gray-800 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-accent mb-2">Outcomes</p>
                  <p className="text-sm text-portfolio-text-light dark:text-gray-300">More clarity, faster decisions, and greater trust in complex product experiences</p>
                </div>
              </div>
              
              <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center gap-6">
                  <a href="https://github.com/Manishs94" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-dark dark:text-white hover:text-portfolio-accent transition-all duration-300 transform hover:scale-110">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/manish-sondhi-2b3bb2217/" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-dark dark:text-white hover:text-portfolio-accent transition-all duration-300 transform hover:scale-110">
                    <Linkedin size={24} />
                  </a>
                </div>
                
                <SocialShare 
                  title="Check out Manish Sondhi's UX Portfolio"
                  description="Senior product design across AI-enabled systems, product UX, complex platforms, and decision-support experiences"
                />
              </div>
            </div>
            
            <div className={`order-1 md:order-2 transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'}`}>
              <div className="relative max-w-md mx-auto">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full z-0 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-portfolio-accent opacity-10 dark:opacity-20 rounded-full z-0 animate-pulse animation-delay-1000"></div>
                <div className="relative z-10 overflow-hidden rounded-xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-xl">
                  <LazyImage 
                    alt="Manish Sondhi - Product & UX Designer" 
                    className="w-full h-auto rounded-xl object-cover transition-transform duration-700 hover:scale-105" 
                    src="/lovable-uploads/3999e1de-e3d3-4f49-8d34-fccee8f17e09.jpg" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
