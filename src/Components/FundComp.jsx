import React from "react";

const FundComp = () => {
  return (
    <section className="mainPageComp FundContanier">
      <div className="FundComp">
        <div className="FundItems">
          <p className="FundtItems__Header">$89000</p>
          <p className="FundItem__subHead">of $100000 backed</p>
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
        <div className="fundProgessBar"></div>
      </div>
    </section>
  );
};

export default FundComp;
