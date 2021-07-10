import React from "react";
import { useSelector } from "react-redux";

const FundComp = () => {
  const totalPledge = useSelector((state) => state.BackedState.totalPledge);
  const totalAmountPledged = useSelector((state) => state.BackedState.pledge);

  return (
    <section className="mainPageComp FundContanier">
      <div className="FundComp">
        <div className="FundItems">
          <p className="FundtItems__Header">${totalAmountPledged}</p>
          <p className="FundItem__subHead">of ${totalPledge} backed</p>
        </div>
        <div className="FundItems">
          <p className="FundtItems__Header">5000</p>
          <p className="FundItem__subHead">total backers</p>
        </div>
        <div className="FundItems">
          <p className="FundtItems__Header">56</p>
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
