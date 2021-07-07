import "./css/layout.css";
import "./css/comp.css";

import Header from "./Components/Header";
import ItemHeaderComp from "./Components/ItemHeaderComp";

function App() {
  return (
    <div className="Funding--site">
      <Header />

      <section className="mainContent">
        <ItemHeaderComp />
      </section>
    </div>
  );
}

export default App;
