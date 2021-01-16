import * as React from "react";
import Background from "../Components/Background/Background.js";
import Footer from "../Components/Footer/Footer.js";
import Title from '../Components/Title/Title.js';
import Carasol from '../Components/Carosol/Carasol';
import ProjectTitle from '../Components/ProjectTitle/ProjectTitle';
import'./App.scss';

const intialState ={
    route: 'title' //Temp set to Carasol
}

class  App extends React.Component {
    constructor(){
        super();
        this.state = intialState;
    }
    render(){
        const {route} = this.state;
        return (
            <div className="App vh-100 w-100">
                <Background />
                {
                    route === 'title' ?
                    <Title />
                    :
                    (
                        <span>
                            <Carasol />
                            <ProjectTitle />
                        </span>
                    )
                }
                <Footer />
            </div>
        )
    }
}

export default App
