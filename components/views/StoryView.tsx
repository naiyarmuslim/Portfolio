import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { AccentColor } from '../../types';

interface StoryViewProps {
  accentColor: AccentColor;
}

const StoryView: React.FC<StoryViewProps> = ({ accentColor }) => {
  const accentTextClass = `text-${accentColor}-400`;
  const accentBorderClass = `border-${accentColor}-500`;

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold ${accentTextClass}`}>Life Story & Vision</h2>
        <p className="mt-4 text-lg text-slate-dark">A journey of transformation and the philosophy that connects it all.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <h3 className="text-2xl font-bold text-slate-light mb-4">The Narrative Arc</h3>
          <div className="space-y-4 text-slate-dark">
            <p><strong className={accentTextClass}>The Spark (Pentium 3):</strong> My fascination with technology began with disassembling and reassembling a Pentium 3 computer. It was a tangible introduction to the logic and structure of systems, planting a seed that would blossom years later.</p>
            <p><strong className={accentTextClass}>The Medical Detour:</strong> Following a traditional path, I completed my FSc (Pre-Medical) from the Federal Board of Intermediate and Secondary Education, Islamabad (2017-2019). This period, preceded by my Matriculation from Karakorum International University (2015-2017), solidified my realization that my true passion was not in biology, but in the digital systems that shape our world.</p>
            <p><strong className={accentTextClass}>The U-Turn (2022):</strong> In 2022, I made the decisive choice to pivot back to my original passion. Enrolling in a pre-college Informatik program, I fully committed to a future in computer science, aligning my career with my lifelong interests.</p>
          </div>
        </Card>

        <Card>
          <h3 className="text-2xl font-bold text-slate-light mb-4">Roots of Resilience & Work Ethic</h3>
          <p className="text-slate-dark">
            My work ethic is forged by my upbringing in Gilgit-Baltistan. Punctuality and diligence are not just professional traits; they are values learned from a community that works tirelessly in harsh conditions. I've spent nights on mountainsides, patching ancient canals by hand to water our crops—a task demanding absolute commitment. This experience instilled in me a profound respect for hard work and the mental toughness to see any challenge through. It is this very spirit of resilience that fuels my desire to guide others.
          </p>
        </Card>

        <Card>
          <h3 className="text-2xl font-bold text-slate-light mb-4">A Passion for Languages</h3>
          <p className="text-slate-dark mb-6">
            I believe language is the key to understanding new cultures and systems of thought. My linguistic journey began with my mother tongue and has expanded through academic necessity, professional environments, and personal curiosity.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-bold text-slate-light">BALTI</p>
              <p className="text-sm text-slate-dark">Mother Tongue</p>
            </div>
            <div>
              <p className="font-bold text-slate-light">URDU</p>
              <p className="text-sm text-slate-dark">National Language</p>
            </div>
            <div>
              <p className="font-bold text-slate-light">HINDI</p>
              <p className="text-sm text-slate-dark">Spoken Comprehension</p>
            </div>
            <div>
              <p className="font-bold text-slate-light">PUNJABI</p>
              <p className="text-sm text-slate-dark">Spoken Comprehension</p>
            </div>
             <div>
              <p className="font-bold text-slate-light">ENGLISH</p>
              <p className="text-sm text-slate-dark">Fluent</p>
            </div>
            <div>
              <p className="font-bold text-slate-light">GERMAN</p>
              <p className="text-sm text-slate-dark">Fluent (C1 / DSH 2)</p>
            </div>
            <div>
              <p className="font-bold text-slate-light">ARABIC</p>
              <p className="text-sm text-slate-dark">Script Read/Write</p>
            </div>
             <div>
              <p className="font-bold text-slate-light">PERSIAN</p>
              <p className="text-sm text-slate-dark">Script Read/Write</p>
            </div>
            <div>
              <p className="font-bold text-slate-light">RUSSIAN</p>
              <p className="text-sm text-slate-dark">Beginner (Learning)</p>
            </div>
          </div>
        </Card>

        <Card className={`border-l-4 ${accentBorderClass}`}>
          <h3 className="text-2xl font-bold text-slate-light mb-4">The Unifying Vision</h3>
          <blockquote className="text-xl italic text-slate-light border-l-4 border-slate-500 pl-4">
            "To embody the methodical thinking of an Engineer, the empathetic patience of a Guide, and the creative discipline of a Chef. It is in the synergy of these roles that true innovation is found."
          </blockquote>
        </Card>

        <Card>
          <h3 className="text-2xl font-bold text-slate-light mb-4">Future Aspiration</h3>
          <p className="text-slate-dark">My long-term goal is to specialize as a <strong className={accentTextClass}>Network Architect or Cybersecurity Expert</strong>, designing and securing the digital infrastructure of tomorrow. Concurrently, I will continue my mission to guide and empower others, ensuring that as I grow, I lift my community with me. This dual path of technical mastery and community service defines my professional and personal vision.</p>
        </Card>
      </div>
    </Section>
  );
};

export default StoryView;