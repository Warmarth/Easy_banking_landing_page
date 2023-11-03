import React from "react";

// destructuring
const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-field">
      <label htmlFor={name}> {label} </label>
      <span>
        <input
          autoFocus
          value={value}
          onChange={onChange}
          name={name}
          type="text"
          id={name}
          placeholder={label}
          pattern="[A-Za-zÀ-ž\s]{3,}"
          className="w-3/4 outline-offset-0 p-2 transparent"
          autoComplete="on"
        />
      </span>
    </div>
  );
};

export default Input;