import React from 'react';
import { ChevronDown, Github, Globe, Code } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(45,27,105,0.1) 0%, rgba(6,214,160,0.05) 100%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 dark:bg-primary-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-400/10 dark:bg-accent-400/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 flex justify-center">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-full shadow-lg animate-float inline-flex">
              <Code className="h-12 w-12 text-primary-500 dark:text-primary-400" />
            </div>
          </div>

          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-500 dark:text-primary-400"
            data-aos="fade-up"
          >
            PTSC- Programming and Tech Skills Club, KNIT
          </h1>

          <div className="h-12 mb-6">
            <TypeAnimation
              sequence={[
                'Building Tomorrow\'s Developers',
                2000,
                'Code. Create. Collaborate.',
                2000,
                'Where Ideas Come to Life',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-2xl font-medium text-neutral-700 dark:text-neutral-300"
            />
          </div>

          <p 
            className="text-lg md:text-xl mb-8 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A student-led community passionate about coding, innovation, and technology.
            Join us to learn, build, and grow together.
          </p>

          <div 
            className="flex flex-wrap gap-4 justify-center mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a href="#contact" className="btn btn-primary">
              Join Us
            </a>
            <a href="#about" className="btn btn-outline">
              Learn More
            </a>
          </div>

          <div 
            className="flex justify-center gap-6 mb-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a 
              href="#" 
              className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="Website"
            >
              <Globe className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <a
            href="#about"
            className="inline-block text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;