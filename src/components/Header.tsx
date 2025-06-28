// src/components/layout/Header.tsx
import React from 'react';

// Mendefinisikan tipe props untuk komponen Header
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-card-bg p-4 text-center border-b border-gray-200">
      <h1 className="text-primary-blue text-3xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;