import React, { Component } from "react";
import characters from '../characters.json';
import {Container} from './Grid';
import Header from './Header';
import Jumbotron from './jumbotron';
import Thumbnail from './thumbnail';


class CharactersContainer extends Component {
state = {
  characters,
  selected: [],
  count: 0,
  topcount: 0,
  ischecked: 0
}

functionSort = (characters) => {
  
  characters = characters.sort(() => Math.random() - 0.5)

  return characters
}


findId = (selected, userid) => {
 
  function isSelected(item) {
    return item === userid;
  }
  
  if (selected.find(isSelected)) {
    alert('Game Over')
    
  } else {
    selected = [ ...selected, userid ]
    console.log(selected)
   return selected  
  }

}
  


handleChange = (event) => {
  event.preventDefault();

  
    this.setState({
     // selected: [ ...this.state.selected, event.currentTarget.dataset.id ],
      selected: this.findId(this.state.selected, event.currentTarget.dataset.id),
      count: this.state.count + 1,
      ischecked: event.currentTarget.dataset.id,
      characters: this.functionSort(this.state.characters)
     })      
    
}

render() {
  
  return (
    <div>
   <Header count={this.state.count} topcount={this.state.topcount} />
    <Jumbotron />
    <Container>
      {this.state.characters.map(character => {     
       
        return(       
            
          <div  key={character.id} onClick={this.handleChange} data-id={character.id}  >
          <Thumbnail src={character.img} id={character.id} ischecked={this.state.ischecked == character.id ? '1' : '0' } />
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