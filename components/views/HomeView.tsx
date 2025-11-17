
import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { AccentColor } from '../../types';

interface HomeViewProps {
  accentColor: AccentColor;
}

const HomeView: React.FC<HomeViewProps> = ({ accentColor }) => {
  const accentTextClass = `text-${accentColor}-400`;

  return (
    <Section>
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-light leading-tight">
          Naiyar Muslim:
          <br />
          <span className={`block mt-2 ${accentTextClass}`}>Where Code Meets Cuisine, Philosophy Guides Action.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-dark">
          A multi-disciplinary professional blending the precision of technology with the creativity of culinary arts, all grounded in a philosophy of guidance and ethical action.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="border-t-4 border-teal-500">
          <h3 className="text-2xl font-bold text-teal-400 mb-2">CS & Systems</h3>
          <p>Exploring the depths of computer science, from low-level systems to privacy-first AI solutions.</p>
        </Card>
        <Card className="border-t-4 border-orange-500">
          <h3 className="text-2xl font-bold text-orange-400 mb-2">Culinary Arts</h3>
          <p>Crafting experiences through food, where methodical experimentation meets creative fulfillment.</p>
        </Card>
        <Card className="border-t-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-400 mb-2">Guidance Hub</h3>
          <p>Empowering students and aspiring professionals with knowledge on visas, studies, and opportunities.</p>
        </Card>
        <Card className="border-t-4 border-yellow-500">
          <h3 className="text-2xl font-bold text-yellow-400 mb-2">Life & Vision</h3>
          <p>A journey of transformation, unifying diverse passions into a singular, purposeful vision.</p>
        </Card>
      </div>
    </Section>
  );
};

export default HomeView;
