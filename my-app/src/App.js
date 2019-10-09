  
import React, { Component } from "react";
import CharactersContainer from "./components/character"
import characters from './characters.json';
import {Col,Row,Container} from './components/Grid';
import Header from './components/Header';
import Jumbotron from './components/jumbotron';
import Thumbnail from './components/thumbnail';


class App extends Component {

render() {
  return (
    
   <CharactersContainer />
   
    )}

  }

export default App;