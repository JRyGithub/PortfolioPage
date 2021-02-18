import * as React from "react";
import "./ProjectTitle.scss";

class ProjectTitle extends React.Component {
  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="titleBox tc">
        <h1 className="f-subline lh-title ta-c mb2 pb2 headlineTitle">
          <a
          role="button"
          tabIndex={0}
          className="homeButton" 
          onClick={() => onRouteChange("title")}
          onKeyDown={() => onRouteChange("title")}>
            Home/
          </a>
          MyProjects
        </h1>
      </div>
    );
  }
}

export default ProjectTitle;
