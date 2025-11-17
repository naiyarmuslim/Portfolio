
import React, { useState } from 'react';
import { View, AccentColor } from '../types';

interface HeaderProps {
  views: View[];
  activeView: View;
  onNavigate: (view: View) => void;
  accentColor: AccentColor;
}

const accentColorClasses: Record<AccentColor, string> = {
  blue: 'text-blue-400',
  teal: 'text-teal-400',
  purple: 'text-purple-400',
  orange: 'text-orange-400',
  green: 'text-green-400',
  yellow: 'text-yellow-400',
  red: 'text-red-400',
  indigo: 'text-indigo-400',
};

const Header: React.FC<HeaderProps> = ({ views, activeView, onNavigate, accentColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (view: View) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  );

  const CloseIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className={`text-2xl font-bold ${accentColorClasses[accentColor]}`}>Naiyar Muslim</span>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-baseline space-x-4">
              {views.map((view) => (
                <button
                  key={view}
                  onClick={() => handleLinkClick(view)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeView === view
                      ? `${accentColorClasses[accentColor]} bg-slate-light/10`
                      : 'text-slate-light hover:text-white hover:bg-slate-light/5'
                  }`}
                >
                  {view}
                </button>
              ))}
            </nav>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-light hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-navy shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {views.map((view) => (
              <button
                key={view}
                onClick={() => handleLinkClick(view)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  activeView === view
                    ? `${accentColorClasses[accentColor]} bg-slate-light/10`
                    : 'text-slate-light hover:text-white hover:bg-slate-light/5'
                }`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
