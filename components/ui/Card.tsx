
import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, children, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-slate-800/50 rounded-lg shadow-xl p-6 transition-all duration-300 hover:shadow-2xl hover:bg-slate-800 ${onClick ? 'cursor-pointer hover:-translate-y-1' : ''} ${className}`}
    >
      {title && <h3 className="text-xl font-bold text-slate-light mb-4">{title}</h3>}
      <div className="text-slate-dark">{children}</div>
    </div>
  );
};

export default Card;
