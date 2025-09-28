
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Working with this designer was a game-changer for our product. They understood our users better than we did and delivered designs that exceeded our expectations.",
      name: "Sarah Johnson",
      title: "Product Manager at TechStart",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      id: 2,
      quote: "An exceptional design partner who balances creativity with business requirements perfectly. Our user engagement metrics increased by 45% after implementing their designs.",
      name: "Michael Chen",
      title: "CEO at InnovateCo",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      quote: "Their design process is thorough and collaborative. They take the time to understand the problem deeply before proposing solutions, which leads to outstanding results.",
      name: "Emily Rodriguez",
      title: "UX Director at DesignAgency",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg"
    },
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-portfolio-accent rounded-full font-medium mb-4">
            Testimonials
          </span>
          <h2 className="section-heading">What Clients Say</h2>
          <p className="section-subheading mx-auto">
            I pride myself on delivering exceptional work that makes clients happy. Here's what some of them have to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-xl shadow-md relative animate-fade-in"
              style={{ animationDelay: `${0.2 * testimonial.id}s` }}
            >
              <div className="absolute -top-5 left-8 bg-portfolio-accent p-2 rounded-full">
                <Quote size={24} className="text-white" />
              </div>
              <div className="pt-6">
                <p className="text-portfolio-text-light mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-portfolio-text-dark">{testimonial.name}</h4>
                    <p className="text-sm text-portfolio-text-light">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
