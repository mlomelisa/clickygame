import React, { Component } from "react";
import Card from "./Card";
import { Container, Row, Col } from "./Grid";
import characters from '../characters.json';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import Thumbnail from "./thumbnail";




export function CharactersContainer({
  
 
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
          {this.state.characters.map(character => (
            <Thumbnail src={thumbnail} />
            )
            )}
          </Col>

        

        </Row>
      </Container>
    </li>
  );
})


export default CharactersContainer;