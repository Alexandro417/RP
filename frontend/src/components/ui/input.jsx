import React from 'react';

const Input = ({ type = 'text', value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border border-gray-300 p-2 rounded ${className}`}
    />
  );
};

export default Input;
