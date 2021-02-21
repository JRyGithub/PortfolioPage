import * as React from "react";
import "./Header.scss";


function Header ({ onRouteChange}){
  return (
    <header class="w-100 ph3 pv3 pv4-ns ph4-m ph5-r tr">
      <nav class="f6 fw6 tracked">
        <span class="link dim dib mr3 pointer" title="Home" onClick={() => onRouteChange("title")}>Home</span>
        <a class="link dim dib mr3 pointer" href="https://github.com/JRyGithub" title="Github" >Github</a>
        <a class="link dim dib mr3 pointer" href="https://www.linkedin.com/in/joshua-ryland/" title="LinkedIn" >LinkedIn</a>
      </nav>
    </header>
  );
};
export default Header;
