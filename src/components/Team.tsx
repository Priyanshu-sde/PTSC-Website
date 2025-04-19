import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    // Final Year Post Holders
    { name: 'Gaurpad Shukla', role: 'Secretary' },
    { name: 'Anshika Shukla', role: 'Secretary' },
    { name: 'Vansh Kunwar Ji', role: 'CP Head' },
    { name: 'Gunjan Chauhan', role: 'CP Head' },
    { name: 'Anurag Srivastva', role: 'Web Dev Head' },
    { name: 'Abhishek Sharma', role: 'Web Dev Head' },
    { name: 'Piyush Kumar', role: 'Data Science Head' },
    { name: 'Raj Chaudhary', role: 'App Dev Head' },
    { name: 'Yash Saraswat', role: 'Event Head' },
    { name: 'Arpit Mishra', role: 'Event Head' },
    { name: 'Garima Joshi', role: 'Media Head' },
    { name: 'Deep Aryan', role: 'Support Head' },

  ].map((member) => ({
    ...member,
    image: 'https://tg-stockach.de/wp-content/uploads/2020/12/5f4d0f15338e20133dc69e95_dummy-profile-pic-300x300.png', // Replace with actual images
    bio: '',
    social: {
      linkedin: '#',
      github: '#',
      email: 'example@email.com'
    }
  }));

  return (
    <section id="team" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-primary-500 dark:text-primary-400"
            data-aos="fade-up"
          >
            Meet Our Team
          </h2>
          <p 
            className="text-lg text-neutral-600 dark:text-neutral-400"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A diverse group of passionate students working together to build a vibrant programming community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="team-card group"
              data-aos="fade-up"
              data-aos-delay={100 * (index % 3)}
            >
              <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-primary-100 dark:border-primary-800 group-hover:border-accent-400 transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-1 text-neutral-800 dark:text-neutral-200 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                {member.name}
              </h3>
              
              <p className="text-accent-500 font-medium mb-3">{member.role}</p>
              
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{member.bio}</p>
              
              <div className="flex justify-center gap-3 mt-auto">
                {member.social.linkedin && (
                  <a 
                    href={member.social.linkedin} 
                    className="p-2 text-neutral-500 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                
                {member.social.github && (
                  <a 
                    href={member.social.github} 
                    className="p-2 text-neutral-500 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                
                {member.social.email && (
                  <a 
                    href={`mailto:${member.social.email}`} 
                    className="p-2 text-neutral-500 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;