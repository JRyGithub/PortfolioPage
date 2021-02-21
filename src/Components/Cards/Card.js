import * as React from "react";
import "./Card.scss";

const Card = ({ project, projectNum, projectNumTotal }) => {
  const description = project.description;
  const image = project.image;
  const title = project.title;
  const urlLink = project.url;

  return (
    <section class="mw7">
      <article className="bt bb b--black-10">
        <div className="db pv4 ph3 ph0-l">
          <div className="flex flex-column flex-row-ns">
            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
              <a className="black dim db b--black-10 shadow-1" href={`${urlLink}`}>
                <img src={`${image}`} className="db projectImage" alt="Photo of project." />
              </a>
            </div>
            <div className="w-100 w-60-ns pl3-ns imageText">
              <h1 className="f2 fw6 mt0 lh-title b ">{`${title}`}</h1>
              <p className="f6 fw2 f5-l lh-copy">
                {`${description}`}
              </p>
              <div className="v-btm descriptionFooter tc center">
                <p className="v-btm tc center f6 mv0 b">{`${projectNum}`}/{`${projectNumTotal}`}</p>
              </div>
            </div>
          </div>
        </div>

      </article>
    </section>
  );
};

export default Card;
