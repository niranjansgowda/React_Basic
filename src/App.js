import React, { Component } from 'react';
import './App.css';
import Niru from './Niru/Niru.js'

class App extends Component {
    render(){
        return (
            <div className="App">
              <h1>Test</h1>
              <Niru name="Shreyas"/>
            </div>
          );
    }
}

export default App;