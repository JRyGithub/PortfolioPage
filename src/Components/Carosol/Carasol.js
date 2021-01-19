import React, { useState } from "react";
import "./Carasol.scss";
import { ProjectData } from "../../Data/ProjectData";
import Card from "../Cards/Card";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { set } from "object-path";

class Carosol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: ProjectData,
      length: ProjectData.length,
    };
  }
  

  nextSlide = () => {
    this.state.projectData.unshift(this.state.projectData.pop());
    this.setState(this.state.projectData);
  };
  previousSlide = () => {
    this.state.projectData.push(this.state.projectData.shift());
    this.setState(this.state.projectData);
  };

  render() {
    return (
      <div className="carosolBox">
        <div className="carosol flex flex-wrap h-100">
        { console.log(this.state.projectData)}
          <BsFillCaretLeftFill className="icon left" onClick={this.previousSlide} />
          {
          this.state.projectData.map((project, index) => {
            if (index < 3) {
              console.log(index);
              return (
                <>
                  <Card project={project} />
                </>
              );
            }
          })}
          <BsFillCaretRightFill className="icon right" onClick={this.nextSlide} />
        </div>
      </div>
    );
  }
}

export default Carosol;
