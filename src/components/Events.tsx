import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Tag } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  time: string;
  category: string;
  description: string;
  image?: string;
}

const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const events: Event[] = [
  {
    id: 1,
    title: 'Decode AI',
    date: 'April 19, 2025',
    location: 'KNIT Sultanpur',
    time: 'Prompt Engineering',
    category: 'AI/ML',
    description: 'A prompt engineering event exploring creative and technical applications of AI prompts.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    title: 'Hack the Web',
    date: 'January 18, 2025',
    location: 'KNIT Sultanpur',
    time: 'Open Source',
    category: 'open-source',
    description: 'An open-source web development event focused on collaborative coding and GitHub contributions.',
    image: 'https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    title: 'Long INT',
    date: 'February 6, 2025',
    location: 'Online / KNIT',
    time: '5-Day CP Contest',
    category: 'CompetitiveProgramming',
    description: 'A five-day competitive programming contest to test logical skills and algorithmic thinking.',
    image: 'https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    title: 'Short INT',
    date: 'October 24, 2024',
    location: 'Online / KNIT',
    time: '2-Hour CP Contest',
    category: 'CompetitiveProgramming',
    description: 'A short but intense competitive programming event designed to challenge your coding speed.',
    image: 'https://media.hackerearth.com/blog/wp-content/uploads/2019/09/Capture_HAckathon_wordpress.jpg'
  }
];


  const filters = [
    { label: 'All', value: 'all' },
    { label: 'CompetitiveProgramming', value: 'competitivprogramming' },
    { label: 'open-source', value: 'hackathon' },
    { label: 'AI/ML', value: 'seminar' },
    { label: 'Networking', value: 'networking' },
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const categoryColors = {
    competitivprogramming: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    hackathon: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    seminar: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    networking: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  };

  return (
    <section id="events" className="section-padding bg-neutral-50 dark:bg-neutral-800/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-primary-500 dark:text-primary-400"
            data-aos="fade-up"
          >
            Events & Activities
          </h2>
          <p 
            className="text-lg text-neutral-600 dark:text-neutral-400"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Join us for workshops, hackathons, and networking opportunities to enhance your programming skills.
          </p>
        </div>

        <div 
          className="flex flex-wrap gap-3 justify-center mb-10"
          data-aos="fade-up"
        >
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.value
                  ? 'bg-primary-500 text-white dark:bg-primary-400 dark:text-neutral-900'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div 
              key={event.id} 
              className="event-card group"
              data-aos="fade-up"
              data-aos-delay={100 * (index % 3)}
            >
              {event.image && (
                <div className="h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${categoryColors[event.category as keyof typeof categoryColors]}`}>
                {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
              </span>
              
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                {event.title}
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-neutral-600 dark:text-neutral-400 text-sm">
                  <Calendar className="w-4 h-4 mr-2 text-accent-500" />
                  {event.date}
                </div>
                
                <div className="flex items-center text-neutral-600 dark:text-neutral-400 text-sm">
                  <Clock className="w-4 h-4 mr-2 text-accent-500" />
                  {event.time}
                </div>
                
                <div className="flex items-center text-neutral-600 dark:text-neutral-400 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-accent-500" />
                  {event.location}
                </div>
              </div>
              
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                {event.description}
              </p>
              
              <a 
                href="#" 
                className="inline-block text-primary-500 dark:text-primary-400 text-sm font-medium hover:underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;