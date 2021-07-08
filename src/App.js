import "./css/layout.css";
import "./css/comp.css";

import { MdClose } from "react-icons/md";

import Header from "./Components/Header";
import ItemHeaderComp from "./Components/ItemHeaderComp";
import FundComp from "./Components/FundComp";
import ProjectDetails from "./Components/ProjectDetails";

function App() {
  return (
    <div className="Funding--site">
      <Header />

      <section className="mainContent">
        <ItemHeaderComp />
        <FundComp />
        <ProjectDetails />
      </section>

      <section className="showModal">
        <MdClose className="showModal__close" />
        <p className="showModal__Title">Back this project</p>
        <p className="showModal__desci">
          Want to support us in brining Mastercraft Bamboo Monitor Riser out to
          the world?
        </p>
      </section>
    </div>
  );
}

export default App;
