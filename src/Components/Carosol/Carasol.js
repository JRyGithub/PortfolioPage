import React, { useState } from "react";
import "./Carasol.scss";
import { ProjectData} from "../../Data/ProjectData";
import Card from "../Cards/Card";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";

const Carosol = ({}) => {

    const length = ProjectData.length;
    const nextSlide = () =>{
        //setCurrent(current === length - 1? 0 : current + 1);
        ProjectData.unshift(ProjectData.pop());
        console.log(ProjectData);
    };
    const previousSlide = () => {
        // setCurrent(current === 0 ? length - 1 : current - 1);
        ProjectData.push(ProjectData.shift());
        console.log(ProjectData);
    };

return (
    <div className="carosolBox">
      <div className="carosol flex flex-wrap h-100">
        <BsFillCaretLeftFill className='icon left' onClick={previousSlide}/>
        {ProjectData.map(( project, index ) =>{
            if(index <3){
            console.log(index);
            return (
                <>
                    <Card project={project}/>
                </>
                );
            }
        })}
        <BsFillCaretRightFill className='icon right' onClick={nextSlide}/>
      </div>
    </div>
  );
};
//{projects.Map((project, index)=>{
//             return (<Card />);
//         })} 
/* <Card/>
        <Card/>
        <Card/> */

export default Carosol;
