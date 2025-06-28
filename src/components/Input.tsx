// src/components/common/Input.tsx
import React from 'react';

// Mendefinisikan tipe props untuk komponen Input
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string; // id tetap wajib
  error?: string;
  labelSubtitle?: string;
}

const Input: React.FC<InputProps> = ({ label, id, type = 'text', placeholder, value, onChange, error, className = '', labelSubtitle, ...props }) => {
  const inputStyles = `w-full p-3.5 mb-3.5 border border-border-light rounded-lg box-border text-base bg-input-bg text-text-dark placeholder:text-text-medium placeholder:text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue ${error ? 'border-red-500' : ''} ${className}`;

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block mb-2 font-bold text-lg text-text-dark">
          {label}
          {labelSubtitle && <span className="block text-sm font-normal text-text-medium -mt-1.5">{labelSubtitle}</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputStyles}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;