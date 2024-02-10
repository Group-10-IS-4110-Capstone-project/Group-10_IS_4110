import React from 'react';
import './Button.css'

const Button = ({ type, variant, className, id, onClick, children }) => {
  return (
    <button 
      type={type ? type : "button"} 
      className={className ? `btn-component${className}` : "btn-component"} 
      id={id} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;