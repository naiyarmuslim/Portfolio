
import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { AccentColor } from '../../types';

interface TravelViewProps {
  accentColor: AccentColor;
}

const TravelView: React.FC<TravelViewProps> = ({ accentColor }) => {
  const accentTextClass = `text-${accentColor}-400`;

  const photos = [
    { location: 'Alpine Summit', color: '808080' },
    { location: 'Coastal Village', color: '6A82A0' },
    { location: 'Bustling Market', color: 'A06A6A' },
    { location: 'Ancient Ruins', color: 'A0976A' },
    { location: 'Urban Metropolis', color: '556B2F' },
    { location: 'Serene Forest', color: '2F6B5E' },
  ];

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold ${accentTextClass}`}>Travel & Photography</h2>
        <p className="mt-4 text-lg text-slate-dark">Exploring and documenting the world, one frame at a time.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        {photos.map((photo, index) => (
          <div key={index} className="aspect-w-4 aspect-h-3 group overflow-hidden rounded-lg shadow-lg">
            <img
              src={`httpshttps://placehold.co/600x400/${photo.color}/FFFFFF?text=${encodeURIComponent(photo.location)}`}
              alt={photo.location}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">{photo.location}</h3>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <h3 className={`text-xl font-bold mb-2 ${accentTextClass}`}>Travel Philosophy</h3>
          <p>I approach travel as a systems analyst approaches a new network: with curiosity and a desire to understand its underlying structure. My focus is on culturally immersive, minimalist journeys that reveal the unique social and logistical systems of each new place.</p>
        </Card>
         <Card>
          <h3 className={`text-xl font-bold mb-2 ${accentTextClass}`}>Other Interests</h3>
          <ul className="list-disc list-inside text-slate-light grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <li>Fitness & Calisthenics</li>
            <li>Cricket</li>
            <li>Football</li>
            <li>Table Tennis</li>
            <li>Reading Non-Fiction</li>
            <li>Vintage Hardware</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
};

export default TravelView;