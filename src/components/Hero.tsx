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
        title="Manish Sondhi | Product & UX Designer Portfolio"
        description="Creating delightful digital experiences through user-centered design. Product & UX Designer specializing in fintech and financial services."
        keywords="UX Designer, Product Designer, Fintech UX, Financial Services Design, User Experience Portfolio"
      />
      
      <section id="home" className="pt-32 pb-24 md:pt-44 md:pb-32 relative overflow-hidden">
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
                  Product & UX Designer
                </span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-text-dark dark:text-white mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'}`}>
                Creating <span className="text-portfolio-accent bg-gradient-to-r from-portfolio-accent to-blue-600 bg-clip-text text-transparent">delightful experiences</span> that users love
              </h1>
              
              <p className={`text-lg text-portfolio-text-light dark:text-gray-300 mb-8 max-w-lg transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'}`}>
                I design user-centered digital products that solve real problems through research, iteration, and thoughtful UI/UX principles.
              </p>
              
              <div className={`flex flex-wrap gap-4 mb-8 transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'}`}>
                <a href="#portfolio" className="portfolio-button-primary flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  View My Work <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <button 
                  onClick={handleDownloadCV}
                  className="portfolio-button-outline flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Download Resume <Download size={18} />
                </button>
              </div>
              
              <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center gap-6">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-dark dark:text-white hover:text-portfolio-accent transition-all duration-300 transform hover:scale-110">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-dark dark:text-white hover:text-portfolio-accent transition-all duration-300 transform hover:scale-110">
                    <Linkedin size={24} />
                  </a>
                </div>
                
                <SocialShare 
                  title="Check out Manish Sondhi's UX Portfolio"
                  description="Amazing product and UX design work in fintech and financial services"
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
