import React, { Component } from 'react';
import ControlledCarousel from './ControlledCarousel';
import CarouselResults from './CarouselResults';
import ischool from './img/ischool-logo.png'
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      scoreA: 100,
      scoreB: 150
    };
  }

  handleSelect(selectedIndex, e) {
    alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
    console.log(this.state.direction)
    if(e.direction == 'next') {
      console.log("right")
      this.setState({
        scoreA: (this.state.scoreA + this.state.scoreB*0.05)
      });
    } else {
      console.log("left")
      this.setState({
        scoreA: (this.state.scoreA - this.state.scoreB*0.05)
      });
    }
  }

  render() {
    return (
      <div className="App">
        <CarouselResults 
          className="results"
          scoreA={this.state.scoreA}
          scoreB={this.state.scoreB}/>
        <ControlledCarousel 
          className="controlled-carousel"
          onClick={this.handleSelect}
          index={this.state.index}
          direction={this.state.direction}
        />
      </div>
    );
  }
}

export default App;
