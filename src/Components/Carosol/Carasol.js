import React, { Component, useState } from "react";
import "./Carasol.scss";
import { ProjectData } from "../../Data/ProjectData";
import Card from "../Cards/Card";
import {
  BsFillCaretRightFill,
  BsFillCaretLeftFill,
  BsArrowRight,
} from "react-icons/bs";

class Carosol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: ProjectData,
      length: ProjectData.length,
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
}

  handleKeyDown = (event) => {
    if (event.which === 39) {
      this.nextSlide();
    } else if (event.which === 37) {
      this.previousSlide();
    }
  };

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
      <div className="carosolBox w-100">
        <div className="carosol flex flex-wrap">
          <BsFillCaretLeftFill
            className="icon left"
            onClick={this.previousSlide}
          />
          {this.state.projectData.map((project, index) => {
            if (index < 3) {
              console.log(index);
              return (
                <>
                  <Card project={project} />
                </>
              );
            }
          })}
          <BsFillCaretRightFill
            className="icon right"
            onClick={this.nextSlide}
          />
        </div>
      </div>
    );
  }
}

export default Carosol;
