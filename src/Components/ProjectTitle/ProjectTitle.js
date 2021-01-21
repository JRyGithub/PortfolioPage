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
          <h1 className="f-headline lh-solid ta-c mb2 pb2 headlineTitle">My Projects</h1>
          <span
            className="f5 grow no-underline ba bw2 ph3 pv2 mb2 pt0 mt0 dib pointer"
            onClick={() => onRouteChange("title")}
          >
            Discover less
          </span>
        </div>
      //</FadeIn>
    );
  }
}

export default ProjectTitle;
