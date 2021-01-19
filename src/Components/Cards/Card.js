import * as React from "react";
import Tilt from "react-tilt";
import "./Card.scss";

const Card = ({project}) => {
    const color = project.color;

    // var classes = cx({
    //     'Tilt': true,
    //     'br2': true,
    //     'w-20': true,
    //     'mr2': true,
    //     'shadow-5': true,
    //     'pointer': true,
    //     'bg-color': 'bg-color-'+color
    // });
    console.log(project.color);
  return (
    <Tilt className={`Tilt br2 w-20 mr2 bg-base-${color} shadow-5 pointer bg-base`} options={{ max: 5, perspective:500}}>
      <div className="Tilt-inner">
        <div className=" w-20 mr2 shadow-5 pointer"></div>
      </div>
    </Tilt>
  );
};

export default Card;
