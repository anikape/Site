import React, { useState } from "react";
import styles from "./Input.module.css";

const Input = ({ type, label, placeholder, value, onChange, isValid }) => {
  const [,] = useState();

  return (
    <div className={styles.formControl}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={label}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {!isValid && (
        <p style={{ fontSize: "14px", color: "red" }}>{label} inválido</p>
      )}
    </div>
  );
};

export default Input;
