import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { AccentColor } from '../../types';

interface GuidanceViewProps {
  accentColor: AccentColor;
}

const GuidanceView: React.FC<GuidanceViewProps> = ({ accentColor }) => {
  const accentTextClass = `text-${accentColor}-400`;
  const accentBorderClass = `border-${accentColor}-500`;
  const accentButtonClass = `bg-${accentColor}-600 hover:bg-${accentColor}-700`;
  
  const services = [
    { name: 'Visa Walkthroughs', icon: '📄' },
    { name: 'Document Preparation', icon: '📁' },
    { name: 'Student Interview Prep', icon: '🎤' },
    { name: 'Destination Analysis', icon: '🌍' },
  ];

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold ${accentTextClass}`}>Guidance Hub</h2>
        <p className="mt-4 text-lg text-slate-dark max-w-3xl mx-auto">
          Bridging the Opportunity Gap for the Resilient Youth of Gilgit-Baltistan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Card className={`border-l-4 ${accentBorderClass}`}>
          <h3 className="text-2xl font-bold text-slate-light mb-4">A Deeply Personal Mission</h3>
          <p>
            Born from the resilient spirit of Gilgit-Baltistan—a remote region where ingenuity is a necessity—my mission is deeply personal. I've witnessed firsthand the immense, often untapped, potential of a people who are physically tough, mentally sharp, and incredibly hardworking. Having faced these struggles myself, I understand the landscape of challenges and opportunities.
          </p>
          <br/>
          <p>
            My guidance hub is a bridge. It’s my commitment to show the youth of my community the pathways available in places like Germany, to help them recognize their own strength, and to provide the clear, actionable support they need to turn their potential into reality. I make videos to motivate and guide them because I believe all they need is an opportunity.
          </p>
        </Card>

        <Card>
          <h3 className="text-2xl font-bold text-slate-light mb-4">Expertise & Services</h3>
          <ul className="space-y-4">
            {services.map(service => (
              <li key={service.name} className="flex items-center">
                <span className="text-2xl mr-4">{service.icon}</span>
                <span className="text-slate-light">{service.name}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h3 className={`text-2xl font-bold ${accentTextClass} mb-6`}>Connect & Learn</h3>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <a href="#" className={`px-8 py-3 rounded-lg font-semibold text-white transition-transform duration-200 hover:scale-105 ${accentButtonClass}`}>
            Watch on YouTube
          </a>
          <a href="#" className={`px-8 py-3 rounded-lg font-semibold text-white transition-transform duration-200 hover:scale-105 ${accentButtonClass}`}>
            Follow on Instagram
          </a>
           <a href="#" className={`px-8 py-3 rounded-lg font-semibold text-white transition-transform duration-200 hover:scale-105 ${accentButtonClass}`}>
            Find me on TikTok
          </a>
        </div>
      </div>

    </Section>
  );
};

export default GuidanceView;