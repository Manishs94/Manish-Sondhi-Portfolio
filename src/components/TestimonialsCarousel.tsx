import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
const testimonials = [{
  id: 1,
  quote: "Working with this designer was a game-changer for our product. They understood our users better than we did and delivered designs that exceeded our expectations.",
  name: "Sarah Johnson",
  title: "Product Manager at TechStart",
  avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  company: "TechStart",
  rating: 5
}, {
  id: 2,
  quote: "An exceptional design partner who balances creativity with business requirements perfectly. Our user engagement metrics increased by 45% after implementing their designs.",
  name: "Michael Chen",
  title: "CEO at InnovateCo",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  company: "InnovateCo",
  rating: 5
}, {
  id: 3,
  quote: "Their design process is thorough and collaborative. They take the time to understand the problem deeply before proposing solutions, which leads to outstanding results.",
  name: "Emily Rodriguez",
  title: "UX Director at DesignAgency",
  avatar: "https://randomuser.me/api/portraits/women/35.jpg",
  company: "DesignAgency",
  rating: 5
}, {
  id: 4,
  quote: "The attention to detail and user-centric approach resulted in a 60% increase in user satisfaction scores. Highly recommend for any serious design project.",
  name: "David Kim",
  title: "Head of Product at StartupX",
  avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  company: "StartupX",
  rating: 5
}, {
  id: 5,
  quote: "Transformed our entire design system and improved our development velocity by 40%. The strategic thinking behind each decision was impressive.",
  name: "Lisa Wang",
  title: "VP of Engineering at TechFlow",
  avatar: "https://randomuser.me/api/portraits/women/28.jpg",
  company: "TechFlow",
  rating: 5
}];
const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    ref,
    isVisible
  } = useScrollAnimation({
    threshold: 0.2
  });
  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return <section id="testimonials" className="py-24">
      <div className="section-container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-portfolio-accent rounded-full font-medium mb-4">
            Testimonials
          </span>
          <h2 className="section-heading text-white">What Clients Say</h2>
          <p className="section-subheading mx-auto text-white">
            I pride myself on delivering exceptional work that makes clients happy. Here's what some of them have to say.
          </p>
        </div>
        
        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Main Testimonial Display */}
          <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute -top-5 left-8 bg-portfolio-accent p-3 rounded-full">
              <Quote size={32} className="text-white" />
            </div>
            
            <div className="pt-8 text-center">
              <blockquote className="text-lg md:text-xl text-portfolio-text-light dark:text-gray-300 mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-16 h-16 rounded-full object-cover" />
                <div className="text-left">
                  <h4 className="font-bold text-lg text-portfolio-text-dark dark:text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-portfolio-text-light dark:text-gray-400">
                    {testimonials[currentIndex].title}
                  </p>
                  <p className="text-sm text-portfolio-accent font-medium">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
              
              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mt-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => <span key={i} className="text-yellow-400 text-xl">★</span>)}
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full w-10 h-10 p-0">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-portfolio-accent' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}`} />)}
            </div>
            
            <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full w-10 h-10 p-0">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsCarousel;