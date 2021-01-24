import * as React from "react";
import Tilt from "react-tilt";
import "./Card.scss";

const Card = ({ project }) => {
  const color = project.color;
  const image = project.image;
  const desc = project.description;
  const urlLink = project.url;

  return (
    <Tilt
      className={`Tilt br2 w-20 mr2 bg-base-${color} shadow-5 pointer bg-base h-50`}
      options={{ max: 5, perspective: 500 }}
    >
      <div className="Tilt-inner">
        {image === null ? (
          <div className=""></div>
        ) : (
          <>
            <a href={`${urlLink}`}>
            <img
              className="pa0 ma0 projectImage shadow-5"
              src={`${image}`}
              alt={`${image}`}
            ></img>
            <div className="ImageDescription"><p className="ImageFont">{`${desc}`}</p></div>
            </a>
          </>
        )}
      </div>
    </Tilt>
  );
};

export default Card;
