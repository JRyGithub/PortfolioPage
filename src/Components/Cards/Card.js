import * as React from "react";
import Tilt from "react-tilt";
import "./Card.scss";

const Card = () => {
  return (
    <Tilt className="Tilt br2 w-20 mr2 bg-base shadow-5 pointer" options={{ max: 5, perspective:500}}>
      <div className="Tilt-inner">
        <div className=" w-20 mr2 bg-green shadow-5 pointer"></div>
      </div>
    </Tilt>
  );
};

export default Card;
