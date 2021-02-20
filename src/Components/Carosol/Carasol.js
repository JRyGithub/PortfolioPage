import React, { useEffect, useState } from "react";
import "./Carasol.scss";
import { ProjectData } from "../../Data/ProjectData";
import Card from "../Cards/Card";
import {
  BiChevronRight,
  BiChevronLeft
} from "react-icons/bi";

function Carosol() {
  const [projectData, setProjectData] = useState(ProjectData);
  useEffect(() => {
    const rightChev = document.getElementById("rightChev");
    const leftChev = document.getElementById("leftChev");

    const nextSlide = () => {
      projectData.unshift(projectData.pop());
      setProjectData([...projectData, projectData]);
    };

    const previousSlide = () => {
      projectData.push(projectData.shift());
      setProjectData([...projectData, projectData]);
    };

    const handleKeyDown = (event) => {
      if (event.which === 39) {
        nextSlide();
      } else if (event.which === 37) {
        previousSlide();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    rightChev.addEventListener("click", nextSlide);
    leftChev.addEventListener("click", previousSlide);

  }, [])

  return (
    <div className="carosolBox w-100">
      <div className="carosol flex flex-wrap">
        <BiChevronLeft
          id="leftChev"
          className="icon left"
        />
        <Card className= "cards" project={projectData[0]} />
        <BiChevronRight
          id="rightChev"
          className="icon right"
        />
      </div>
    </div>
  );
}


export default Carosol;
