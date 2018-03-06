import React, { Component } from 'react';
import ControlledCarousel from './ControlledCarousel';
import ischool from './img/ischool-logo.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        app
        <img src={ischool} />
        <ControlledCarousel />
      </div>
    );
  }
}

export default App;
