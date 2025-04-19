import React from 'react';
import { Code2, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { title: 'Quick Links', items: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Team', href: '#team' },
      { name: 'Events', href: '#events' },
    ]},
    { title: 'Resources', items: [
      { name: 'Learning Materials', href: '#resources' },
      { name: 'Workshops', href: '#events' },
      { name: 'Code Repository', href: '#' },
      { name: 'Partner Programs', href: '#' },
    ]},
    { title: 'Contact', items: [
      { name: 'Email Us', href: 'mailto:programmingclub@knit.ac.in' },
      { name: 'Join the Club', href: '#contact' },
      { name: 'Location', href: '#contact' },
      { name: 'FAQ', href: '#' },
    ]},
  ];
  
  return (
    <footer className="bg-neutral-800 dark:bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 text-white mb-4">
              <Code2 className="h-8 w-8 text-accent-400" />
              <span className="font-heading font-bold text-2xl">PTSC</span>
            </a>
            
            <p className="text-neutral-400 mb-6 max-w-md">
              A student-led programming club dedicated to fostering a community of coders, 
              innovators, and problem solvers through hands-on learning and collaboration.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-neutral-400 hover:text-accent-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-accent-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-accent-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-accent-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {links.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-white">{column.title}</h3>
              <ul className="space-y-2">
                {column.items.map((item, idx) => (
                  <li key={idx}>
                    <a 
                      href={item.href} 
                      className="text-neutral-400 hover:text-accent-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-neutral-700 pt-8 mt-8 text-neutral-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} PTSC- Programming and Tech Skills Club, KNIT. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="#" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-400 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;