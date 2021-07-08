import React from "react";
import Btn from "./Btn";

const RewardsComp = () => {
  return (
    <div className="Rewards">
      <div className="RewardsHeader">
        <p className="RewardsHeader__Name">Bamboo Stand</p>
        <p className="RewardsHeader__Amount">Pledge $25 or more</p>
      </div>
      <p className="Rewards__Descri">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
        quibusdam distinctio fugiat, tempore, esse et magni sequi eum
        perspiciatis fuga ea quia suscipit dolor consequuntur repudiandae ipsum
        eius nulla excepturi!
      </p>
      <div className="RewardsSelectors">
        <p className="RewardsSelectors__Name">
          <span className="RewardsSelectors__Name--Bold">101</span> left
        </p>
        <Btn btnName="Select Reward" cssClass="RewardsSelectors__Btn" />
      </div>
    </div>
  );
};

export default RewardsComp;
