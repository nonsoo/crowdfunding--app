import React from "react";

import Checkmark from "../imgs/icon-check.svg";
import Btn from "./InteractiveComp/Btn";

const Thankyou = () => {
  return (
    <div className="Thankyou">
      <img src={Checkmark} alt="Check mark" className="Thankyou__Img" />
      <p className="Thankyou__Title">Thanks for your support!</p>
      <p className="Thankyou__descri">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser with the world! You will get an email once our campaign is
        completed.
      </p>
      <Btn btnName="Got it!" cssClass="Thankyou__Btn" />
    </div>
  );
};

export default Thankyou;
