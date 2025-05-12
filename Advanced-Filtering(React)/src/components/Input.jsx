import React from "react";

function Input({ handleChange, title, name, value, color }) {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name={name} value={value} onChange={handleChange} />
      <span className="checkMark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
}
export default Input;
