import * as React from "react";
import Tilt from "react-tilt";
import "./Card.scss";

const Card = ({ project }) => {
  const color = project.color;
  const image = project.image;
  const desc = project.description;
  const urlLink = project.url;
  
  return (
    <section class="mw7">
      <article className="bt bb b--black-10">
        <a className="db pv4 ph3 ph0-l no-underline black dim" href={`${urlLink}`}>
          <div className="flex flex-column flex-row-ns">
            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
              <img src={ `${image}` } className="db projectImage" alt="Photo of project." />
            </div>
            <div className="w-100 w-60-ns pl3-ns">
              <h1 className="f3 fw1 mt0 lh-title">{`${desc}`}</h1>
              <p className="f6 f5-l lh-copy">
                The tech giant says it is ready to begin planning a quantum
                computer, a powerful cpu machine that relies on subatomic particles instead
                of transistors.
          </p>
              <p className="f6 lh-copy mv0">By Robin Darnell</p>
            </div>
          </div>
        </a>
      </article>
    </section>
  );
};

export default Card;
