import React from "react";
import { useSelector } from "react-redux";

const FundComp = () => {
  const totalPledge = useSelector((state) => state.BackedState.totalPledge);
  const totalAmountPledged = useSelector((state) => state.BackedState.pledge);
  const backers = useSelector((state) => state.BackedState.backers);
  const daysLeft = useSelector((state) => state.BackedState.daysLeft);
  return (
    <section className="mainPageComp FundContanier">
      <div className="FundComp">
        <div className="FundItems">
          <p className="FundtItems__Header">${totalAmountPledged}</p>
          <p className="FundItem__subHead">of ${totalPledge} backed</p>
        </div>
        <div className="FundItems">
          <p className="FundtItems__Header">{backers}</p>
          <p className="FundItem__subHead">total backers</p>
        </div>
        <div className="FundItems">
          <p className="FundtItems__Header">{daysLeft}</p>
          <p className="FundItem__subHead">days left</p>
        </div>
      </div>
      <div className="fundProgessContainer">
        <div
          className="fundProgessBar"
          style={{
            "--widthProgess": `calc(${totalAmountPledged}/${totalPledge}*100%)`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default FundComp;
