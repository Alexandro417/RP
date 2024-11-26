import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-blue-500 text-white py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
