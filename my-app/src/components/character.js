import React, { Component } from "react";
import characters from '../characters.json';
import {Col,Row,Container} from './Grid';
import Header from './Header';
import Jumbotron from './jumbotron';
import Thumbnail from './thumbnail';


class CharactersContainer extends Component {
state = {
  characters
}


render() {
  return (
    <div>
   <Header />
    <Jumbotron />

    <Container>
     
     
      {this.state.characters.map(character => {
        console.log(character)
        return(
          <div key={character.id}>
          <Thumbnail src={character.img} />
        </div>
        )
      }  
    )}


  </ Container>
  </div>
  ) 
 }
}


export default CharactersContainer;