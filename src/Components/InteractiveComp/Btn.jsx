import React from "react";

const Btn = ({ btnName, cssClass }) => {
  return (
    <>
      <button className={`btn ${cssClass}`}> {btnName}</button>
    </>
  );
};

export default Btn;
