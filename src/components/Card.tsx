// src/components/common/Card.tsx
import React from 'react';

// Mendefinisikan tipe props untuk komponen Card
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-card-bg p-8 rounded-lg shadow-md mb-8 ${className}`}>
      {children}
    </div>
  );
};

export default Card;