import * as React from "react";
import './Carasol.scss';
import Card from  '../Cards/Card';

const Carosol = () => {
    return (
        <div id="home" className="vh-100 dt w-100 tc black cover">
            <div className="dtc v-mid" id="titleContainer">
                <Card />
                <container>
                    <h1 className="carasolthree">My projects.</h1>
                </container>                   
            </div>
        </div>
        
        /*<section classname='jumbatron'  id='carosol'>
            <Card />
            <container>
                <h1 className="carasol-carasol">My projects.</h1>
            </container>      
        </section>*/
        
    )
}

export default Carosol;