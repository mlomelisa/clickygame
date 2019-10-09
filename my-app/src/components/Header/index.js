import React from "react";
import "./style.css";
import { Container, Row, Col } from "../Grid";



function Header() {
  return (
   
          <nav className="navbar sticky">
       
            <div className='header'>
            <a href="/">Clicky Game</a>
            </div>
            <div className='header'>
            Click an image to begin!
            </div >
            <div className='header'> 
             Score:0 |Top Score:0
            </div>
        
        </nav>
  )
}

export default Header;