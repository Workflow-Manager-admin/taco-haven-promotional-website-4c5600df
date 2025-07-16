import React from "react";

/**
 * Tag component for use in menus, specials, etc.
 * Accepts: children, className, ...rest
 */
// PUBLIC_INTERFACE
function Tag({ children, className = "", ...rest }) {
  return (
    <span className={`menu-tag${className ? " " + className : ""}`} {...rest}>
      {children}
    </span>
  );
}

export default Tag;
