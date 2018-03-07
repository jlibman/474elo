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
      scoreB: '',
      people: ['150','50','250','130']
      
    };
    // var ;
  }

  handleSelect(selectedIndex, e) {
    // Integer.parseInt(this.state.people[selectedIndex])
    alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction,
      // scoreB: 
    });
    console.log(this.state.direction)
    console.log('type:' + typeof(this.state.people))
    if(e.direction == 'next') {
      console.log("right")
      this.setState({
        scoreA: (this.state.scoreA + this.state.people[this.state.index]*0.05)
      });
    } else {
      console.log("left")
      this.setState({
        scoreA: (this.state.scoreA - this.state.people[this.state.index]*0.05)
      });
    }

  }

  render() {
    
    // console.log()
    return (
      <div className="App">
        <CarouselResults 
          className="results"
          scoreA={this.state.scoreA}
          scoreB={this.state.scoreB}
          index={this.state.index}
          otherScore={this.state.people[this.state.index]}
        />
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
