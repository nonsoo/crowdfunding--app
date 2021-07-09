import React from "react";

import Btn from "./Btn";

const ShowModalPop = ({ rewardName, pledgeAmount, pledgeRemain, desci }) => {
  return (
    <section className="ShowModalPopContainer">
      <div className="ShowModalPop">
        <div className="ShowModalPop__Circle">
          <div className="ShowModalPop__Circle--fill"></div>
        </div>
        <div className="ShowModalPop__ContentContainer">
          <div className="ShowModalPop__NameCon">
            <p className="ShowModalPop__Name">
              {rewardName} <span>Pledge ${pledgeAmount} or more</span>
            </p>
            <p className="ShowModal__PledgeRemain">
              <span>{pledgeRemain}</span> left
            </p>
          </div>
          <p className="ShowModalPop__descri">{desci}</p>
        </div>
      </div>
      <div className="EnterPledge">
        <p className="EnterPledge__Title">Enter your pledge</p>
        <form className="EnterPledge__fieldCon">
          <input type="text" className="EnterPledge__FieldText" />
          <Btn btnName="Continue" />
        </form>
      </div>
    </section>
  );
};

export default ShowModalPop;
