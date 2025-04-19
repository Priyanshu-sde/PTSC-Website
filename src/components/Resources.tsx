import React, { useState } from 'react';
import { BookOpen, Code, Database, PenSquare, Brain, Globe } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  link: string;
  category: string;
  icon: JSX.Element;
}

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const resources: Resource[] = [
    {
      id: 1,
      title: 'Web Development Roadmap',
      description: 'A comprehensive guide to becoming a web developer',
      link: '#',
      category: 'web',
      icon: <Globe className="w-6 h-6 text-blue-500" />
    },
    {
      id: 2,
      title: 'Data Structures & Algorithms',
      description: 'Practice problems and solutions for DSA interview prep',
      link: '#',
      category: 'dsa',
      icon: <Code className="w-6 h-6 text-purple-500" />
    },
    {
      id: 3,
      title: 'Machine Learning Resources',
      description: 'Tutorials and notebooks for ML beginners',
      link: '#',
      category: 'ml',
      icon: <Brain className="w-6 h-6 text-green-500" />
    },
    {
      id: 4,
      title: 'Database Design Guide',
      description: 'Learn SQL and NoSQL database concepts',
      link: '#',
      category: 'db',
      icon: <Database className="w-6 h-6 text-yellow-500" />
    },
    {
      id: 5,
      title: 'Technical Interview Prep',
      description: 'Strategies and practice for coding interviews',
      link: '#',
      category: 'general',
      icon: <PenSquare className="w-6 h-6 text-red-500" />
    },
    {
      id: 6,
      title: 'Frontend Development Libraries',
      description: 'Tutorials for React, Vue, and Angular',
      link: '#',
      category: 'web',
      icon: <Globe className="w-6 h-6 text-blue-500" />
    },
    {
      id: 7,
      title: 'Competitive Programming Handbook',
      description: 'Algorithms and techniques for competitive coding',
      link: '#',
      category: 'dsa',
      icon: <Code className="w-6 h-6 text-purple-500" />
    },
    {
      id: 8,
      title: 'Open Source Contribution Guide',
      description: 'How to start contributing to open source projects',
      link: '#',
      category: 'general',
      icon: <BookOpen className="w-6 h-6 text-red-500" />
    },
  ];

  const categories = [
    { label: 'All Resources', value: 'all', icon: <BookOpen className="w-5 h-5" /> },
    { label: 'Web Development', value: 'web', icon: <Globe className="w-5 h-5" /> },
    { label: 'Algorithms & DSA', value: 'dsa', icon: <Code className="w-5 h-5" /> },
    { label: 'Machine Learning', value: 'ml', icon: <Brain className="w-5 h-5" /> },
    { label: 'Databases', value: 'db', icon: <Database className="w-5 h-5" /> },
    { label: 'General', value: 'general', icon: <PenSquare className="w-5 h-5" /> },
  ];

  const filteredResources = activeCategory === 'all'
    ? resources
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <section id="resources" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-primary-500 dark:text-primary-400"
            data-aos="fade-up"
          >
            Learning Resources
          </h2>
          <p 
            className="text-lg text-neutral-600 dark:text-neutral-400"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A curated collection of resources to help you enhance your programming skills.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10" data-aos="fade-up">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeCategory === category.value
                  ? 'bg-primary-500 text-white dark:bg-primary-400 dark:text-neutral-900'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredResources.map((resource, index) => (
            <div 
              key={resource.id} 
              className="resource-card"
              data-aos="fade-up"
              data-aos-delay={100 * (index % 4)}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 p-2 bg-white dark:bg-neutral-700 rounded-full">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                  {resource.title}
                </h3>
              </div>
              
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                {resource.description}
              </p>
              
              <a 
                href={resource.link} 
                className="inline-block text-primary-500 dark:text-primary-400 text-sm font-medium hover:underline mt-auto"
              >
                Explore resource →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;