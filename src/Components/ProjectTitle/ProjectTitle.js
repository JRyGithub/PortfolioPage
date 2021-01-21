import * as React from "react";
import FadeIn from "react-fade-in";
import "./ProjectTitle.scss";

class ProjectTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onRouteChange } = this.props;
    return (
      //<FadeIn transitionDuration="2000">
      <div className="titleBox tc">
        <h1 className="f-subline lh-title ta-c mb2 pb2 headlineTitle">
          <a className="homeButton" onClick={() => onRouteChange("title")}>
            Home/
          </a>
          MyProjects
        </h1>
      </div>
      //</FadeIn>
    );
  }
}
{
  /* <span
            className="grow project-button f6 no-underline ph3 pv2 mb2 dib"
            onClick={() => onRouteChange("title")}
          >
            Discover less
          </span> */
}
export default ProjectTitle;
