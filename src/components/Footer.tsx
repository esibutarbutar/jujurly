// src/components/layout/Footer.tsx
import React from 'react';

// Mendefinisikan tipe props untuk komponen Footer
interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer className="text-center p-4 bg-card-bg border-t border-gray-200 mt-8 text-sm text-text-medium">
      {text}
    </footer>
  );
};

export default Footer;