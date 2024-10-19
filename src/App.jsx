import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Card3 from "./components/Card/Card3";


const App = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="wrap">
            <Card />
            <Card3/>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
