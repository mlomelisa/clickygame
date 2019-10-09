  
import React, { Component } from "react";
import Wrapper from './components/Wrapper';
import characters from './characters.json';
import {Col,Row,Container} from './components/Grid';
import Header from './components/Header';
import Jumbotron from './components/jumbotron';
import Thumbnail from './components/thumbnail';


class App extends Component {
state = {
  characters
}


render() {
  return (
    <div>
  
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
export default App;