
import React from 'react';
import Section from '../ui/Section';
import { AccentColor } from '../../types';

interface ContactViewProps {
  accentColor: AccentColor;
}

const ContactView: React.FC<ContactViewProps> = ({ accentColor }) => {
  const accentTextClass = `text-${accentColor}-400`;
  const accentButtonClass = `bg-${accentColor}-600 hover:bg-${accentColor}-700`;

  const links = [
    { 
      name: 'Email', 
      url: 'mailto:naiyarmuslim@gmail.com', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
    },
   
    { 
      name: 'GitHub', 
      url: '#', 
      icon: <svg xmlns="https://github.com/naiyarmuslim" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 inline-block"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.73c0 5.46 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    },
    { 
      name: 'Instagram', 
      url: '#', 
      icon: <svg xmlns="https://www.instagram.com/reels.gull/" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 inline-block"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    },
  ];

  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`text-4xl font-bold ${accentTextClass}`}>Contact & Connect</h2>
        <p className="mt-4 text-lg text-slate-dark">
          I'm always open to collaborating on interesting projects or discussing new ideas. Feel free to reach out.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center px-6 py-3 rounded-lg font-bold text-white text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${accentButtonClass}`}
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ContactView;