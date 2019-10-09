import React, { Component } from "react";
import characters from '../characters.json';
import {Col,Row,Container} from './Grid';
import Header from './Header';
import Jumbotron from './jumbotron';
import Thumbnail from './thumbnail';


class CharactersContainer extends Component {
state = {
  characters,
  count: 0,
  topcount: 0
}



// handleIncrement increments this.state.count by 1
handleIncrement = () => {
  // We always use the setState method to update a component's state
  this.setState({ count: this.state.count + 1 } );
};


render() {
  console.log(this.state.count)
  return (
    <div>
   <Header count={this.state.count} topcount={this.state.topcount} />
    <Jumbotron />
    <Container>
      {this.state.characters.map(character => {        
        return(
          
          <div key={character.id} onClick={this.handleIncrement}>
          <Thumbnail src={character.img}  checked={character.checked}/>
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