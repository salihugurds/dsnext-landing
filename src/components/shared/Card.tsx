import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  padding = 'md',
}) => {
  const baseStyles = 'bg-white rounded-lg shadow-sm overflow-hidden';
  
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7',
  };
  
  const hoverStyles = hoverable
    ? 'transition-all duration-300 hover:shadow-md transform hover:-translate-y-1'
    : '';
  
  const cardStyles = `${baseStyles} ${paddingStyles[padding]} ${hoverStyles} ${className}`;
  
  return <div className={cardStyles}>{children}</div>;
};

export default Card;