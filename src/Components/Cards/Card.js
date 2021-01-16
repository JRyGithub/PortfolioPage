import * as React from "react";
import Tilt from 'react-tilt'; 
import './Card.scss';

const Card = () => {
    return (
        <Tilt className="Tilt br2 shadow-2" id="card" options={{ max : 40 }}>
            <div className="Tilt-inner"> </div>
        </Tilt>
    )
}

export default Card;