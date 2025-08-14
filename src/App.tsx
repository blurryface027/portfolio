import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Linkedin, ArrowRight, ExternalLink } from 'lucide-react';

const experiences = [
  { year: '2023', role: 'Creative Director', company: 'Fisga' },
  { year: '2021', role: 'Brand Consultant', company: 'Freelance' },
  { year: '2020', role: 'Junior Brand Designer', company: 'Creativio Agency' },
  { year: '2019', role: 'Design Intern', company: 'Luxe Brands' },
];

const projects = [
  { 
    title: 'Luxe Fashion Rebrand', 
    year: '2024', 
    category: 'Branding',
    description: 'Complete visual identity redesign for luxury fashion brand'
  },
  { 
    title: 'TechFlow Mobile App', 
    year: '2024', 
    category: 'Product Design',
    description: 'UI/UX design for productivity mobile application'
  },
  { 
    title: 'Artisan Coffee Co.', 
    year: '2023', 
    category: 'Branding',
    description: 'Logo design and brand identity for artisan coffee roastery'
  },
  { 
    title: '3D Product Visualization', 
    year: '2023', 
    category: '3D Rendering',
    description: 'Photorealistic product renders for e-commerce platform'
  },
  { 
    title: 'FinanceFlow Dashboard', 
    year: '2022', 
    category: 'Product Design',
    description: 'Financial dashboard interface with data visualization'
  },
  { 
    title: 'Motion Brand Campaign', 
    year: '2021', 
    category: 'Motion Design',
    description: 'Animated brand campaign for digital marketing'
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 right-20 text-8xl font-bold text-zinc-900 opacity-20 select-none">
          KRX
        </div>
        <div className="absolute bottom-40 left-20 text-6xl font-bold text-zinc-900 opacity-15 select-none">
          ALPHA
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-zinc-800 rounded-full opacity-10"></div>
      </div>

      {/* Navigation */}
      <nav
  className={`fixed top-0 w-full z-50 transition-all duration-300
    ${isScrolled
      ? 'bg-zinc-900/1 backdrop-blur-lg shadow-lg'
      : 'bg-transparent'
    }`}
>

        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/mylogo2.png" alt="Logo" className="h-8 w-auto" />
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="hover:text-stone-300 transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('works')}
              className="hover:text-stone-300 transition-colors duration-200"
            >
              Works
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="hover:text-stone-300 transition-colors duration-200"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-stone-300 transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
              Krishna
              <br />
              <span className="text-stone-300">Sharma</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-400 font-light mb-2">
              Graphic & Brand Identity Designer
            </p>
          </div>
          
          <div className="mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-3xl mx-auto">
              Hi, I'm Krishna Sharma, a graphic designer passionate about giving brands their unique identity. 
              Logo specialist, dedicated to crafting distinctive visual identities with expertise in 
              <span className="text-white font-medium"> Branding, Typography, Color Theory, and Creative Direction.</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <button 
              onClick={() => scrollToSection('works')}
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-stone-200 transition-all duration-300 flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-stone-600 px-8 py-3 rounded-full font-medium hover:border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          <button 
            onClick={() => scrollToSection('works')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up animate-bounce" 
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <ChevronDown className="w-6 h-6 text-stone-400" />
          </button>
        </div>
      </section>

      {/* Selected Works Section */}
      <section id="works" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Selected Works</h2>
            <p className="text-xl text-stone-400">Recent projects from 2021 to 2024</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm text-stone-400 font-medium">{project.year}</span>
                  <span className="text-sm text-stone-300 bg-zinc-800 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-stone-200 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-stone-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <button className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all duration-300">
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Experience</h2>
            <p className="text-xl text-stone-400">Professional journey and growth</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-stone-600 to-transparent"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 group">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-white rounded-full border-4 border-zinc-950 group-hover:bg-stone-300 transition-colors duration-300"></div>
                
                <div className="ml-16 bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 w-full group-hover:border-zinc-600 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-lg font-medium text-stone-300">{exp.year}</span>
                  </div>
                  <p className="text-stone-400">{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-stone-400 mb-12 leading-relaxed">
            Ready to elevate your brand? Let's create something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:krishna158310@gmail.com"
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-stone-200 transition-all duration-300 flex items-center gap-3 group"
            >
              <Mail className="w-5 h-5" />
              work@krishnasharma.dev
            </a>
            <a 
              href="https://www.linkedin.com/in/blurryface027"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-stone-600 px-8 py-4 rounded-full font-medium hover:border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm">© 2025 Krishna Sharma. All rights reserved.</p>
          <p className="text-stone-400 text-sm">Crafted with passion for design excellence</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
