import React from 'react';

export const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className}  ${outline ? 'button--outline' : ''}`}>
      {children}
    </button>
  );
};
