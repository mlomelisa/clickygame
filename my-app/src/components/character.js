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
 console.log(selected)
  function isSelected(item) {
    return item === userid;
  }
  
  if (selected.find(isSelected)) {
   let topScore = this.state.topcount
   let countNew = this.state.count
        if ( topScore > countNew) {

          alert('Game Over')
          this.setState({
            count: 0,
            topcount: this.state.topcount
            })
          return  (selected = [])
          
          
        } else {
          alert('Game Over')
          this.setState({
            count: 0,
            topcount: countNew
            })
          return  (selected = [])
        }    
    
  } else {
    selected = [ ...selected, userid ]
    this.setState({
    count: this.state.count + 1
    })
   return  selected  
  }

}
  


handleChange = (event) => {
  event.preventDefault();

    this.setState({
      selected: this.findId(this.state.selected, event.currentTarget.dataset.id),
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