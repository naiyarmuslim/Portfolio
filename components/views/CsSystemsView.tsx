
import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { AccentColor } from '../../types';

interface CsSystemsViewProps {
  accentColor: AccentColor;
}

const CsSystemsView: React.FC<CsSystemsViewProps> = ({ accentColor }) => {
  const accentTextClass = `text-${accentColor}-400`;
  const accentBorderClass = `border-${accentColor}-500`;

  const skills = ['C', 'Python', 'JavaScript', 'Git/Bash/CLI', 'Hardware Repair', 'Troubleshooting', 'MS Office Suite', 'Adobe Photoshop'];

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold ${accentTextClass}`}>CS & Systems</h2>
        <p className="mt-4 text-lg text-slate-dark">A foundation in systems thinking and low-level knowledge.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className={`border-l-4 ${accentBorderClass}`}>
          <h3 className="text-xl font-bold text-slate-light mb-2">Formal Education</h3>
          <p className="font-semibold text-slate-light">Applied Computer Science, B.Sc.</p>
          <p className="text-sm text-slate-dark mb-4">University of Applied Sciences, Fulda</p>
          <p className="font-semibold text-slate-light">Pre-College Informatik Program</p>
          <p className="text-sm text-slate-dark">A decisive U-Turn in 2022 into the world of technology.</p>
        </Card>
        
        <Card className={`border-l-4 ${accentBorderClass}`}>
            <h3 className="text-xl font-bold text-slate-light mb-4">Core Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <span key={skill} className="bg-teal-400/10 text-teal-300 text-sm font-medium px-3 py-1 rounded-full">
                        {skill}
                    </span>
                ))}
            </div>
        </Card>
      </div>
      
      <div>
        <h3 className={`text-3xl font-bold text-center mb-8 ${accentTextClass}`}>Featured Projects</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
                <h4 className="text-xl font-bold text-slate-light mb-2">Sabaa – Offline AI Assistant</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-400/10 text-blue-300 text-xs font-medium px-2 py-1 rounded">Python</span>
                    <span className="bg-purple-400/10 text-purple-300 text-xs font-medium px-2 py-1 rounded">LLaMA</span>
                    <span className="bg-green-400/10 text-green-300 text-xs font-medium px-2 py-1 rounded">ChromaDB</span>
                </div>
                <p>A privacy-first AI assistant that runs completely offline, ensuring user data remains secure and private. A practical application of modern AI on local hardware.</p>
            </Card>
            <Card>
                <h4 className="text-xl font-bold text-slate-light mb-2">Personal Cloud Server</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-400/10 text-gray-300 text-xs font-medium px-2 py-1 rounded">Linux</span>
                    <span className="bg-sky-400/10 text-sky-300 text-xs font-medium px-2 py-1 rounded">Docker</span>
                    <span className="bg-emerald-400/10 text-emerald-300 text-xs font-medium px-2 py-1 rounded">Nginx</span>
                </div>
                <p>A self-hosted cloud infrastructure for personal data management, secured with a firewall and SSL. Focuses on network configuration, security, and digital sovereignty.</p>
            </Card>
        </div>
      </div>

    </Section>
  );
};

export default CsSystemsView;