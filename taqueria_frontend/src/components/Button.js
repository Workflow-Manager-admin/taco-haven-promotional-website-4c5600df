import React from "react";

/**
 * Button component for consistent styling and usage.
 * Accepts: children, onClick, type, className, ...rest
 */
// PUBLIC_INTERFACE
function Button({ children, onClick, type = "button", className = "", ...rest }) {
  return (
    <button
      type={type}
      className={`btn${className ? " " + className : ""}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
