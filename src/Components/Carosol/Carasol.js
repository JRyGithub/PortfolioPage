import * as React from "react";
import "./Carasol.scss";
import Card from "../Cards/Card";

const Carosol = () => {
  return (
    <div className="carosolBox">
      <div className="carosol flex flex-wrap h-100">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}; 
//<div className=" w-20 mr2 bg-green shadow-5"></div>
export default Carosol;
