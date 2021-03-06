import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { pledgeSubmit } from "../../redux/ducks/Pledges";

const ShowModalPop = ({ rewardName, pledgeAmount, pledgeRemain, desci }) => {
  const dispatch = useDispatch();

  const [selectPopupModule, setSelectPopupModule] = useState(false);
  const [enteredPledge, setEnteredPledge] = useState("");
  const [pledgeRemainsState, setPledgeRemainsState] = useState(pledgeRemain);

  const onSelectPopupModule = () => {
    setSelectPopupModule(!selectPopupModule);
  };

  const decrementRemains = () => {
    setPledgeRemainsState(pledgeRemainsState - 1);
  };

  const onSubmitPledge = (e) => {
    e.preventDefault();

    //check whether the char entered is a valid number
    if (!parseInt(enteredPledge)) {
      alert("Please enter a valid pledge");
      return;
    }

    decrementRemains();
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
              {rewardName}{" "}
              <span className={`${pledgeAmount === null ? "hide" : ""}`}>
                Pledge ${pledgeAmount} or more
              </span>
            </p>
            <p
              className={`${
                pledgeRemain === null ? "hide" : "ShowModal__PledgeRemain"
              }`}
            >
              <span>{pledgeRemainsState} </span>
              left
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

ShowModalPop.defaultProps = {
  pledgeRemain: null,
  pledgeAmount: null,
};
