import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {
      name: formData.name ? '' : 'Name is required',
      email: !formData.email 
        ? 'Email is required' 
        : !validateEmail(formData.email) 
          ? 'Please enter a valid email' 
          : '',
      message: formData.message ? '' : 'Message is required',
    };
    
    setErrors(newErrors);
    
    // If no errors, submit form
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      // In a real application, you would submit the form data to a server here
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset submission state after delay
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-accent-400" />,
      title: 'Email Us',
      details: 'programmingclub@knit.ac.in',
      link: 'mailto:programmingclub@knit.ac.in'
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent-400" />,
      title: 'Find Us',
      details: 'Computer Science and Engineering Department',
      link: '#'
    },
    {
      icon: <Phone className="w-5 h-5 text-accent-400" />,
      title: 'Call Us',
      details: '7068451653',
      link: 'tel:7068451653'
    },
  ];

  return (
    <section id="contact" className="section-padding bg-neutral-50 dark:bg-neutral-800/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-primary-500 dark:text-primary-400"
            data-aos="fade-up"
          >
            Get In Touch
          </h2>
          <p 
            className="text-lg text-neutral-600 dark:text-neutral-400"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Have a question or want to join our club? Send us a message and we'll get back to you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {contactInfo.map((info, index) => (
            <a 
              href={info.link} 
              key={index}
              className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="mb-4 p-3 bg-primary-100 dark:bg-primary-900/50 rounded-full">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
                {info.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {info.details}
              </p>
            </a>
          ))}
        </div>

        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 md:p-8 max-w-3xl mx-auto" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-6 text-neutral-800 dark:text-neutral-200">
            Send a Message
          </h3>
          
          {formSubmitted ? (
            <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-4 rounded-md mb-6">
              Thank you for your message! We'll get back to you soon.
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input ${errors.name ? 'border-red-500 dark:border-red-500' : ''}`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input ${errors.email ? 'border-red-500 dark:border-red-500' : ''}`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input"
                placeholder="Your subject"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`input resize-none ${errors.message ? 'border-red-500 dark:border-red-500' : ''}`}
                placeholder="Write your message here..."
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;