import React from "react";

const Btn = ({ btnName, cssClass, onToggle }) => {
  return (
    <>
      <button className={`btn ${cssClass}`} onClick={onToggle}>
        {btnName}
      </button>
    </>
  );
};

export default Btn;
