import React, { Component } from 'react';
// import ControlledCarousel from './ControlledCarousel';
// import ischool from './img/ischool-logo.png'
import './App.css';

class CarouselResults extends Component {
  render() {
    return (
        <div>
            my score: {this.props.scoreA}
            their score:{this.props.scoreB}
        </div>
    );
  }
}

export default CarouselResults;
