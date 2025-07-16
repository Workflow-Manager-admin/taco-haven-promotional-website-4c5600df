import React from "react";

/**
 * Card component to wrap content in a visually consistent card UI.
 * Accepts: children, className, ...rest
 */
// PUBLIC_INTERFACE
function Card({ children, className = "", ...rest }) {
  return (
    <div className={`card${className ? " " + className : ""}`} {...rest}>
      {children}
    </div>
  );
}

export default Card;
