import * as React from "react";
import "./Header.scss";
import Particles from "react-particles-js";


function Header ({ onRouteChange}){
  return (
    <header class="w-100 ph3 pv3 pv4-ns ph4-m ph5-r tr">
      <nav class="f6 fw6 ttu tracked">
        <a class="link dim dib mr3" href="#" title="Home" onClick={() => onRouteChange("title")}>Home</a>
      </nav>
    </header>
  );
};
//M0,128L80,112C160,96,320,64,480,90.7C640,117,800,203,960,213.3C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z
export default Header;
