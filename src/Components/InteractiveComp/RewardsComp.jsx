import React from "react";
import Btn from "./Btn";

const RewardsComp = ({
  rewardName,
  pledgeAmount,
  rewardDescri,
  pledgeRemains,
  BtnName,
}) => {
  return (
    <div className="Rewards">
      <div className="RewardsHeader">
        <p className="RewardsHeader__Name">{rewardName}</p>
        <p className="RewardsHeader__Amount">Pledge ${pledgeAmount} or more</p>
      </div>
      <p className="Rewards__Descri">{rewardDescri}</p>
      <div className="RewardsSelectors">
        <p className="RewardsSelectors__Name">
          <span className="RewardsSelectors__Name--Bold">{pledgeRemains}</span>
          left
        </p>
        <Btn btnName={BtnName} cssClass="RewardsSelectors__Btn" />
      </div>
    </div>
  );
};

export default RewardsComp;
