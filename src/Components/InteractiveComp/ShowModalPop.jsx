import React from "react";

const ShowModalPop = () => {
  return (
    <div className="ShowModalPop">
      <div className="ShowModalPop__Circle"></div>
      <div className="ShowModalPop__ContentContainer">
        <div className="ShowModalPop__NameCon">
          <p className="ShowModalPop__Name">
            Pledge with no rewards <span>Pledge $25 or more</span>
          </p>
          <p className="ShowModal__PledgeRemain">101 Left</p>
        </div>
        <p className="ShowModalPop__descri"></p>
      </div>
    </div>
  );
};

export default ShowModalPop;
