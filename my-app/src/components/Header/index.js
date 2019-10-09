import React from "react";
import "./style.css";
import { Container, Row, Col } from "../Grid";



function Header() {
  return (
   
          <div>
            <Col >
            <h2>Clicky Game</h2>
            </Col>
            <Col>  
            <h2> Click an image to begin!  </h2> 
            </Col> 
            <Col>  
            <h2>Score:0 |Top Score:0</h2>
            </Col> 
            </div>   
  )
}

export default Header;