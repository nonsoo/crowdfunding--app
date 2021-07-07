import React from "react";
import Btn from "./InteractiveComp/Btn";

import companyLogo from "../imgs/logo-mastercraft.svg";

const ItemHeaderComp = () => {
  return (
    <section className="itemHeaderComp mainPageComp">
      <img
        className="itemHeaderComp__Img"
        src={companyLogo}
        alt="company logo"
      />
      <p className="itemHeader__Title">Mastercraft Bamboo Monitor Riser</p>
      <p className="itemHeader__descri">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="itemHeaderBtnContainer">
        <Btn
          btnName="Back this Project"
          cssClass="itemHeaderBtnContainer__btn"
        />
        <Btn btnName="Bookmark" />
      </div>
    </section>
  );
};

export default ItemHeaderComp;
