import * as React from "react";
import Title from '../Components/Title/Title.js';
import Carasol from '../Components/Carosol/Carasol';
import Header from '../Components/Header/Header';
import ProjectTitle from '../Components/ProjectTitle/ProjectTitle';
import'./App.scss';

import { ProjectData } from '../Data/ProjectData';
import FadeIn from "react-fade-in";

const intialState ={
    route: 'title', //Temp set to Carasol
    projectData: ''
}

class  App extends React.Component {
    constructor(){
        super();
        this.state = intialState;
        this.projectData = ProjectData;
    }
    onRouteChange = (route) => {
        this.setState({ route: route });
      }

    render(){
        const {route} = this.state;
        return (
            <div className="App">                                
                {
                    route === 'title' ?
                    <Title onRouteChange={this.onRouteChange}/>
                    :
                    (
                        <span>
                        <Header onRouteChange={this.onRouteChange}/>  
                            <FadeIn className="slideShow"  transitionDuration='3000'>
                                <Carasol  projects={ ProjectData }/>
                            </FadeIn>
                        </span>
                    )
                }                
            </div>
        )
    }
}

export default App

//App did have vh-100 w-100