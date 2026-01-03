import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-4 rounded-lg text-white font-medium shadow-sm transition-all duration-200 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
