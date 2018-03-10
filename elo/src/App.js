import React, { Component } from 'react';
import ControlledCarousel from './ControlledCarousel';
import CarouselResults from './CarouselResults';
import ischool from './img/ischool-logo.png'
import './App.css';
import Description from './Description'
import Intro from './Intro'

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
  }

  handleSelect(selectedIndex, e) {
    // alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
    // console.log(this.state.direction)
    // console.log('type:' + typeof(this.state.people))
    if(e.direction == 'next') {
      // console.log("right")
      this.setState({
        scoreA: (this.state.scoreA + this.state.people[this.state.index]*0.05)
      });
    } else {
      // console.log("left")
      this.setState({
        scoreA: (this.state.scoreA - this.state.people[this.state.index]*0.05)
      });
    }
  }

  render() {
    return (
      <div className="App">
            <Intro />
        <h1 bsStyle="h1">Tinder Example</h1>
        <ControlledCarousel 
          onClick={this.handleSelect}
          index={this.state.index}
          direction={this.state.direction}
          otherScore={this.state.people[this.state.index]}
        />

        <Description />
        
        <CarouselResults 
          scoreA={this.state.scoreA}
          scoreB={this.state.scoreB}
          index={this.state.index}
          otherScore={this.state.people[this.state.index]}
        />
      </div>


    );
  }
}

export default App;
