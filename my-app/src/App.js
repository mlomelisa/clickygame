import React, { Component } from "react";
import Card from './components/Card'
import Wrapper from './components/Wrapper'
import characters from './characters.json'

class App extends Component {
state = {
  characters
}

render() {
  return (
  <Wrapper>
  {this.state.characters.map(character => (
    <Card 
     image={character.img}
    />
  )
  )}
  </Wrapper>
  ) 
 }
}
export default App;
