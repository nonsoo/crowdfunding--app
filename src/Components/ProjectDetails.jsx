import React from "react";

import RewardsComp from "./InteractiveComp/RewardsComp";

const ProjectDetails = () => {
  const RewardsLst = [
    {
      id: 1,
      rewardName: "Bamboo Stand",
      pledgeAmount: "25",
      descri: `You get an ergonomic stand made of natural bamboo. You've helped us launch 
        our our promotional campaign and you will be added to the special backer list.`,
      pledgeRemains: 101,
    },
    {
      id: 2,
      rewardName: "Black Edition Stand",
      pledgeAmount: "75",
      descri: `You get a Black Special Edition computer stand and a personal thank you. You'll 
      be added to our Backer member list. Shipping is included.`,
      pledgeRemains: 64,
    },
    {
      id: 3,
      rewardName: "Mahogany Special Edition",
      pledgeAmount: "200",
      descri: `You get two Special Edition Mahogany stands, a Backer T-shirt, and a personal thank you.
      You'll be added to our Backer member list.`,
      pledgeRemains: 0,
    },
  ];
  return (
    <section className="mainPageComp">
      <div className="AboutSection">
        <p className="AboutSection__Title">About this Project</p>
        <p className="aboutSection__Descri">
          The Mastercraft Bamboo Monitor Riser is a strudy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className="aboutSection__Descri">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </div>
      <div className="RewardCompContainer">
        {RewardsLst.map((Reward) => (
          <RewardsComp
            key={Reward.id}
            rewardName={Reward.rewardName}
            pledgeAmount={Reward.pledgeAmount}
            rewardDescri={Reward.descri}
            pledgeRemains={Reward.pledgeRemains}
            BtnName={
              Reward.pledgeRemains === 0 ? "Out of Stock" : "Select Reward"
            }
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectDetails;
