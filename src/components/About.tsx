import React from 'react';
import { BookOpen, Rocket, Code, Users } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Club Founded',
      description: 'Started with just 5 members and a passion for coding'
    },
    {
      year: '2021',
      title: 'First Contest',
      description: 'Organized our inaugural 2-hour coding competition'
    },
    {
      year: '2023',
      title: 'Industry Partnerships',
      description: 'Collaborated with Arsh Goel for exclusive challenge'
    },
    {
      year: '2024',
      title: 'Members Recruited',
      description: '17 Members recruited offically for Batch 2027'
    },
  ];

  const values = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary-500 dark:text-primary-400" />,
      title: 'Learning',
      description: 'We believe in continuous education and skill development'
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary-500 dark:text-primary-400" />,
      title: 'Innovation',
      description: 'Creating solutions that push technological boundaries'
    },
    {
      icon: <Code className="h-8 w-8 text-primary-500 dark:text-primary-400" />,
      title: 'Craftsmanship',
      description: 'Writing clean, efficient, and maintainable code'
    },
    {
      icon: <Users className="h-8 w-8 text-primary-500 dark:text-primary-400" />,
      title: 'Community',
      description: 'Building strong relationships and collaborative teams'
    },
  ];

  return (
    <section id="about" className="section-padding bg-neutral-50 dark:bg-neutral-800/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-primary-500 dark:text-primary-400"
            data-aos="fade-up"
          >
            About PTSC
          </h2>
          <p 
            className="text-lg text-neutral-600 dark:text-neutral-400"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We are a passionate community of student programmers dedicated to fostering technical excellence
            and collaborative innovation through hands-on learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">Our Mission</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              At PTSC, we aim to empower students with practical programming skills that bridge the gap between
              academic learning and industry demands. We create a supportive environment where members can explore
              new technologies, collaborate on meaningful projects, and develop their technical and soft skills.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              Through workshops, hackathons, project collaborations, and industry connections, we prepare our
              members to become well-rounded developers ready to make an impact in the tech world.
            </p>
          </div>

          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">Our Values</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-sm flex flex-col items-center text-center"
                  data-aos="zoom-in"
                  data-aos-delay={100 * index}
                >
                  <div className="mb-3">{value.icon}</div>
                  <h4 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">{value.title}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-6 text-center text-neutral-800 dark:text-neutral-200">Our Journey</h3>
          
          <div className="timeline-container py-6">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="timeline-item"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={100 * index}
              >
                <div className="timeline-dot">
                  <span className="text-xs font-bold text-neutral-900">{index + 1}</span>
                </div>
                <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-sm">
                  <div className="text-accent-400 font-semibold mb-1">{milestone.year}</div>
                  <h4 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">{milestone.title}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;