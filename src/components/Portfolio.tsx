
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ui', name: 'UI Design' },
    { id: 'ux', name: 'UX Research' },
    { id: 'product', name: 'Product Design' },
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Finance App Redesign',
      category: ['ui', 'product'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'A complete redesign of a finance management application focusing on simplicity and user engagement.',
      link: '#'
    },
    {
      id: 2,
      title: 'E-commerce User Research',
      category: ['ux'],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Extensive user research for an e-commerce platform to identify pain points and opportunities.',
      link: '#'
    },
    {
      id: 3,
      title: 'Health Tracking Platform',
      category: ['ui', 'ux', 'product'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'End-to-end design of a health tracking platform that encourages regular activity and mindfulness.',
      link: '#'
    },
    {
      id: 4,
      title: 'Smart Home Control App',
      category: ['ui', 'product'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'User interface design for a smart home control system with intuitive controls and automation features.',
      link: '#'
    },
  ];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(selectedCategory));

  return (
    <section id="portfolio" className="py-24 bg-portfolio-bg-light">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-portfolio-accent rounded-full font-medium mb-4">
            Portfolio
          </span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading mx-auto">
            Take a look at some of my recent work that showcases my design skills and approach.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-portfolio-accent text-white'
                  : 'bg-white text-portfolio-text-dark hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.category.map((cat) => (
                    <span key={cat} className="px-3 py-1 bg-blue-50 text-portfolio-accent rounded-full text-sm">
                      {categories.find(c => c.id === cat)?.name || cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-portfolio-text-dark mb-2">{project.title}</h3>
                <p className="text-portfolio-text-light mb-6">{project.description}</p>
                <a 
                  href={project.link} 
                  className="flex items-center gap-2 text-portfolio-accent hover:underline font-medium"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="portfolio-button-primary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
