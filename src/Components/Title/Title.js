import * as React from "react";
import FadeIn from "react-fade-in";
import Button from "../Button/Button";
import "./Title.scss";

class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onRouteChange } = this.props;
    return (
      <FadeIn transitionDuration='2000'>
        <section className="titleSection">
          <container>
            <h1 className="title-title">
              Hi, My Name is Josh
              <br />
              Im a developer.
            </h1>
            <p className="title-button">
              <br />
              <span
                className="cta-btn cta-btn--title grow br-pill"
                onClick={() => onRouteChange("carousel")}
              >
                Discover more
              </span>
            </p>
          </container>
        </section>
      </FadeIn>
    );
  }
}

export default Title;
