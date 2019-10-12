import React from "react";
import "./style.css";


function Header(props) {

  return (
     <div class="container-fluid">
          <nav className="navbar container-fluid">  
            <div className='header'>
            <a href="/">Clicky Game</a>
            </div>
            <div className='header'>
            Click an image to begin!
            </div >
            <div className='header'> 
            <span> Score: {props.count} |Top Score: {props.topcount}</span>
            </div>
        </nav>
    </div>
    )
}

export default Header;