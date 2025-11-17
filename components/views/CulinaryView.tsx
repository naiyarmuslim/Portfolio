import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { AccentColor } from '../../types';

interface CulinaryViewProps {
  accentColor: AccentColor;
}

const CulinaryView: React.FC<CulinaryViewProps> = ({ accentColor }) => {
  const accentTextClass = `text-${accentColor}-400`;
  
  const dishes = [
    { name: 'Gourmet Beef Burger', color: 'FF8855' },
    { name: 'Spicy Chicken Burger', color: 'D86A41' },
    { name: 'Mushroom Swiss Burger', color: 'B3522E' },
    { name: 'BBQ Bacon Burger', color: 'FF6B33' },
    { name: 'Veggie Fusion Burger', color: 'E65C2E' },
    { name: 'Double Cheeseburger', color: 'CC5229' },
  ];

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold ${accentTextClass}`}>Culinary Arts</h2>
        <p className="mt-4 text-lg text-slate-dark">A practical application of discipline, precision, and creativity.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-1">
          <Card>
            <h3 className={`text-xl font-bold mb-2 ${accentTextClass}`}>My Philosophy</h3>
            <p>My part-time work as a chef, specializing in crafting high-quality burgers, is more than a job—it's a practical exercise in discipline and consistency. It reinforces the methodical approach I value, proving that excellence in any field, from coding to cooking, comes from precision and a strong work ethic.</p>
          </Card>
        </div>
        <div className="lg:col-span-2">
           <Card>
            <h3 className={`text-xl font-bold mb-2 ${accentTextClass}`}>Thematic Link</h3>
            <p>The precision, patience, and problem-solving mindset honed in computer science directly translate to the kitchen. Debugging a complex algorithm is not unlike perfecting a recipe; both require attention to detail, understanding of core principles, and a willingness to iterate until the result is consistently excellent.</p>
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {dishes.map((dish, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src={`https://placehold.co/400x300/${dish.color}/FFFFFF?text=${encodeURIComponent(dish.name)}`} 
              alt={dish.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-white text-lg font-bold text-center p-4">{dish.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CulinaryView;