import "./css/layout.css";
import "./css/comp.css";

import Header from "./Components/Header";
import ItemHeaderComp from "./Components/ItemHeaderComp";
import FundComp from "./Components/FundComp";

function App() {
  return (
    <div className="Funding--site">
      <Header />

      <section className="mainContent">
        <ItemHeaderComp />
        <FundComp />
      </section>
    </div>
  );
}

export default App;
