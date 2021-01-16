import * as React from "react"; 
import Background from "../Background/Background";
import Button from "../Button/Button";
import './Title.scss';

const Title = () => {
    return (
        <section className='jumbotron' id='title'>
            <container>
            <h1 className="title-title">Hi, My Name is Josh
            <br/>
            Im a developer.
            </h1>
            <p className="title-button">
                <br/>
                <Button />
            </p>
             </container>      
        </section>
    )
}

export default Title;