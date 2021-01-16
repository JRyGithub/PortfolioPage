import * as React from "react";
import Background from "../Components/Background/Background.js";
import Footer from "../Components/Footer/Footer.js";
import Title from '../Components/Title/Title.js';
import Carasol from '../Components/Carosol/Carasol';


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
            <div className="App">
                <Background />
                {
                    route === 'title' ?
                    <Title />
                    :
                    <Carasol />
                }
                <Footer />
            </div>
        )
    }
}

export default App
