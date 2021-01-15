import * as React from "react";
import './Background.scss';

const Background = () => {
    return (
        <span className= "backgroundImage">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path id="svgImage" fill-opacity="1" d="M0,32L120,80C240,128,480,224,720,245.3C960,267,1200,213,1320,186.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
            </svg>
        </span>
    )
}

export default Background;