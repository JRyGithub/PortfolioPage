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
    document.addEventListener("keydown", handleKeyDown);
  },[])

  const handleKeyDown = (event) => {
    if (event.which === 39) {
      nextSlide();
    } else if (event.which === 37) {
      previousSlide();
    }
  };

  const nextSlide = () => {
    console.log(projectData);
    console.log("next");
    projectData.unshift(projectData.pop());
    setProjectData(projectData);
  };
  const previousSlide = () => {
    console.log("prev");
    projectData.push(projectData.shift());
    setProjectData(projectData);
  };


  return (
    <div className="carosolBox w-100">
      <div className="carosol flex flex-wrap">
        <BiChevronLeft
          className="icon left"
          onClick={previousSlide}
        />
        {projectData.map((project, index) => {
          if (index < 3) {
            console.log(index);
            return (
              <>
                <Card project={project} />
              </>
            );
          }
        })}
        <BiChevronRight
          className="icon right"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}


export default Carosol;
