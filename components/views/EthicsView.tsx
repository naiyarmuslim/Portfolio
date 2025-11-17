
import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { AccentColor } from '../../types';

interface EthicsViewProps {
  accentColor: AccentColor;
}

const PrincipleIcon: React.FC<{ children: React.ReactNode, accentColor: AccentColor }> = ({ children, accentColor }) => (
  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-${accentColor}-500/10 text-${accentColor}-400 flex items-center justify-center`}>
    {children}
  </div>
);

const EthicsView: React.FC<EthicsViewProps> = ({ accentColor }) => {
  const accentTextClass = `text-${accentColor}-400`;
  const accentBorderClass = `border-${accentColor}-500`;

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold ${accentTextClass}`}>Digital Ethics Manifesto</h2>
        <p className="mt-4 text-lg text-slate-dark max-w-3xl mx-auto">
          The core beliefs driving my work as a technologist, ensuring that innovation serves humanity responsibly.
        </p>
      </div>

      <Card className={`max-w-4xl mx-auto border-t-4 ${accentBorderClass}`}>
        <h3 className="text-2xl font-bold text-slate-light mb-4">Preamble</h3>
        <p className="text-slate-dark mb-8">
          In an age of unprecedented technological advancement, the creators of systems bear a profound responsibility. We must not only build what is possible, but what is right. Our work should empower individuals, protect their autonomy, and contribute to a more resilient and equitable digital world.
        </p>

        <h3 className="text-2xl font-bold text-slate-light mb-6">Three Core Principles</h3>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <PrincipleIcon accentColor={accentColor}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </PrincipleIcon>
            <div>
              <h4 className="text-lg font-semibold text-slate-light">Privacy-First</h4>
              <p className="text-slate-dark">A steadfast commitment to building systems that minimize data collection and prioritize user anonymity. Technology should be a tool, not a surveillance apparatus.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <PrincipleIcon accentColor={accentColor}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l1.414 1.414a1 1 0 01.293.707V11H5V6.414a1 1 0 01.293-.707l1.414-1.414zM15 11h-1V6.414a1 1 0 01.293-.707l1.414-1.414a1 1 0 011.414 0l1.414 1.414a1 1 0 01.293.707V11h-1z" /></svg>
            </PrincipleIcon>
            <div>
              <h4 className="text-lg font-semibold text-slate-light">Open Access</h4>
              <p className="text-slate-dark">A core belief in democratizing knowledge and tools. Information should be freely accessible, fostering a community of learning and mutual empowerment.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <PrincipleIcon accentColor={accentColor}>
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </PrincipleIcon>
            <div>
              <h4 className="text-lg font-semibold text-slate-light">Systemic Resilience</h4>
              <p className="text-slate-dark">A focus on building durable, self-hosted, and offline-capable solutions that reduce dependency on centralized platforms and are resilient to failure.</p>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
};

export default EthicsView;
