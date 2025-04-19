import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Countdown from 'react-countdown';
import { ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const decodeAIDate = new Date('2025-04-25T00:00:00');

  const countdownRenderer = ({ days, hours, minutes, seconds }: any) => (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg">
        <div className="text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400">{days}</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">Days</div>
      </div>
      <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg">
        <div className="text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400">{hours}</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">Hours</div>
      </div>
      <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg">
        <div className="text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400">{minutes}</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">Minutes</div>
      </div>
      <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg">
        <div className="text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400">{seconds}</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">Seconds</div>
      </div>
    </div>
  );

  return (
    <section 
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
          <div className="mb-8 flex justify-center" data-aos="fade-down">
            <img 
              src="/ptsc.png" 
              alt="PTSC Logo" 
              className="h-24 w-24 md:h-32 md:w-32"
            />
          </div>

          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-500 dark:text-primary-400"
            data-aos="fade-up"
          >
            Programming and Tech Skills Club
          </h1>

          <p 
            className="text-xl md:text-2xl font-medium text-neutral-600 dark:text-neutral-400 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            KNIT Sultanpur
          </p>

          <div className="h-12 mb-8">
            <TypeAnimation
              sequence={[
                'Innovate. Code. Create.',
                2000,
                'Learn. Build. Grow.',
                2000,
                'Connect. Collaborate. Succeed.',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-2xl font-medium text-neutral-700 dark:text-neutral-300"
            />
          </div>

          <div 
            className="flex flex-wrap gap-4 justify-center mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link to="/join" className="btn btn-primary">
              Join PTSC
            </Link>
            <Link to="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>

          <div 
            className="max-w-2xl mx-auto mb-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">
              Next Event: Decode AI
            </h3>
            <Countdown 
              date={decodeAIDate}
              renderer={countdownRenderer}
            />
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              Join us on April 19, 2025 for an exciting workshop on Prompt Engineering
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <Link
            to="/about"
            className="inline-block text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors animate-bounce"
            aria-label="Learn more"
          >
            <ChevronDown className="h-8 w-8" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;