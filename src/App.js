import "./css/layout.css";
import "./css/comp.css";

import { useSelector, useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";

import Header from "./Components/Header";
import ItemHeaderComp from "./Components/ItemHeaderComp";
import FundComp from "./Components/FundComp";
import ProjectDetails from "./Components/ProjectDetails";

import ShowModalPop from "./Components/InteractiveComp/ShowModalPop";

import { onShowModal } from "./redux/ducks/ShowModals";

function App() {
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

  const showModal = useSelector((state) => state.showModalReducers.showModal);

  const dispatch = useDispatch();
  return (
    <div className="Funding--site">
      <Header />

      <section className="mainContent">
        <ItemHeaderComp />
        <FundComp />
        <ProjectDetails RewardsLst={RewardsLst} />
      </section>

      <section
        className={`${showModal ? "showModalContainerBackground" : "hide"}`}
      >
        <section className="showModal">
          <MdClose
            className="showModal__close"
            onClick={() => dispatch(onShowModal())}
          />
          <p className="showModal__Title">Back this project</p>
          <p className="showModal__desci">
            Want to support us in brining Mastercraft Bamboo Monitor Riser out
            to the world?
          </p>
          <div className="ModalPopContainer">
            {RewardsLst.map((Reward) => (
              <ShowModalPop
                key={Reward.id}
                rewardName={Reward.rewardName}
                pledgeAmount={Reward.pledgeAmount}
                desci={Reward.descri}
                pledgeRemain={Reward.pledgeRemains}
              />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
