import React, { Component } from 'react';


import './App.css';
import SignIn from './components/SignIn';
import GetQuote from './components/GetQuote';
import Translator from './components/Translator';

class App extends Component {
  render() {
    return (
      <div>
        <GetQuote/>
        <Translator/>
      </div>
        
      
      
    );
  }
}

export default App;
