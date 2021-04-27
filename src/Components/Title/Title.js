import React from "react";
import FadeIn from "react-fade-in";
import "./Title.scss";

class Title extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (event) => {
    if (event.which === 13) {
      this.props.onRouteChange("carousel");
    } 
  };
  render() {
    const { onRouteChange } = this.props;
    return (
      <FadeIn transitionDuration='2000'>
        <section className="titleSection">
          <container>
            <h1 className="title-title">
              Hi, My Name is Josh
              <br />
              I'm a developer.
            </h1>
            <p className="title-button-paragraph">
              <br />
              <span
                id="button"
                role="button"
                tabIndex={0}
                className="cta-btn cta-btn--title grow title-button"
                onClick={() => onRouteChange("carousel")}
                onKeyDown={() => onRouteChange("carousel")}
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
