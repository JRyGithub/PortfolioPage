import * as React from "react";
import './ProjectTitle.scss'; 

class ProjectTitle extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
    const {onRouteChange} = this.props;
    return (
        <div className="tc">
            <h1 className="f-headline lh-solid ta-c">My Projects</h1>
            <span className= "cta-btn cta-btn--title" onClick={() => onRouteChange('title')}>Return</span>
        </div>
    )
    }
};

export default ProjectTitle;