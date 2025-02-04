import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children, className }) => {
  const baseClasses = 'px-8 py-3 rounded text-base cursor-pointer transition-colors duration-200';
  const variantClasses = {
    primary: 'bg-[#1a237e] text-white hover:bg-[#151b60]',
    secondary: 'bg-white text-[#1a237e] border border-[#1a237e] hover:bg-gray-50'
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex justify-between items-center gap-8">
      <div className="flex-1">
        <h1 className="text-5xl text-[#1a237e] mb-4">
          Landing2 page template for developers & startups
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Beautifully designed templates using React.js, ant design and styled-components! 
          Save weeks of time and build your landing page in minutes.
        </p>
        <div className="flex gap-4">
          <Button variant="primary">Explore</Button>
          <Button variant="secondary">Learn more</Button>
        </div>
      </div>
    </div>
  );
};

export default Home; 