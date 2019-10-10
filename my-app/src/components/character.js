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

functionSort = (characters) => {
  
  characters = characters.sort(() => Math.random() - 0.5)

  return characters
}


handleChange = event => {
  event.preventDefault();
  
    this.setState({
      count: this.state.count + 1,
      checked: "true",
      characters: this.functionSort(this.state.characters)
     })      
  
}



render() {
  console.log(this.state.count)
  return (
    <div>
   <Header count={this.state.count} topcount={this.state.topcount} />
    <Jumbotron />
    <Container>
      {this.state.characters.map(character => {        
        return(
          
          <div key={character.id} onClick={this.handleChange} >
          <Thumbnail src={character.img} ischecked={character.checked}/>
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