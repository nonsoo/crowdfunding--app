import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { pledgeSubmit } from "../../redux/ducks/Pledges";

const ShowModalPop = ({ rewardName, pledgeAmount, pledgeRemain, desci }) => {
  const dispatch = useDispatch();

  const [selectPopupModule, setSelectPopupModule] = useState(false);
  const [enteredPledge, setEnteredPledge] = useState("");

  const onSelectPopupModule = () => {
    setSelectPopupModule(!selectPopupModule);
  };

  const onSubmitPledge = (e) => {
    e.preventDefault();
    dispatch(pledgeSubmit(enteredPledge));
  };

  return (
    <section className="ShowModalPopContainer">
      <div className="ShowModalPop" onClick={() => onSelectPopupModule()}>
        <div className="ShowModalPop__Circle">
          <div
            className={`${selectPopupModule && "ShowModalPop__Circle--fill"}`}
          ></div>
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
      <div className={selectPopupModule ? "EnterPledge" : "hide"}>
        <p className="EnterPledge__Title">Enter your pledge</p>
        <form className="EnterPledge__fieldCon" onSubmit={onSubmitPledge}>
          <input
            type="text"
            defaultValue={enteredPledge}
            onChange={(e) => setEnteredPledge(e.target.value)}
            className="EnterPledge__FieldText"
          />
          <input type="Submit" value="Continue" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default ShowModalPop;
