import React, { useCallback, useEffect, useState } from "react";
import "./Carasol.scss";
import { ProjectData } from "../../Data/ProjectData";
import Card from "../Cards/Card";
import {
  BiChevronRight,
  BiChevronLeft
} from "react-icons/bi";
import { isMobile } from "react-device-detect";
import { useSwipeable } from "react-swipeable";


function Carosol() {
  const [projectData, setProjectData] = useState(ProjectData);
  const [mobileOrNot, setMobileOrNot] = useState(isMobile);
  const [slideNumber, setSlideNumber] = useState(0);

  function nextSlide() {
    slideNumber === 6 ?
      setSlideNumber(() => 0)
      :
      setSlideNumber(() => slideNumber + 1)
  };
  function previousSlide() {
    slideNumber === 0 ?
      setSlideNumber(() => 6)
      :
      setSlideNumber(() => slideNumber - 1)
  };

  useEffect(() => {
    const rightChev = document.getElementById("rightChev");
    const leftChev = document.getElementById("leftChev");

    const handleKeyDown = (event) => {
      if (event.which === 39) {
        nextSlide();
      } else if (event.which === 37) {
        previousSlide();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    if (rightChev != null) {
      rightChev.addEventListener("click", nextSlide);
      leftChev.addEventListener("click", previousSlide);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (rightChev != null) {
        rightChev.removeEventListener("click", nextSlide);
        leftChev.removeEventListener("click", previousSlide);
      }
    }

  }, [slideNumber, isMobile]);

  function handleWindowSizeChange() {
    if (isMobile || window.innerWidth <=700 ) {
      setMobileOrNot(true);
      document.body.style.overflow = "visible";
    }
    else {
      setMobileOrNot(false);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => previousSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });


  if (mobileOrNot) {
    return (
      <div className="carosolBox w-100" {...handlers}>
        <div className="carosol flex flex-wrap">
          <Card className="cards" project={projectData[slideNumber]} projectNumTotal={projectData.length} projectNum={slideNumber + 1} />
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="carosolBox w-100">
        <div className="carosol flex">
          <BiChevronLeft
            id="leftChev"
            className="icon left"
          />
          <Card className="cards" project={projectData[slideNumber]} projectNumTotal={projectData.length} projectNum={slideNumber + 1} />
          <BiChevronRight
            id="rightChev"
            className="icon right"
          />
        </div>
      </div>
    );
  }
}


export default Carosol;
