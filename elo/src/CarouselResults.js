import React, { Component } from 'react';
// import ControlledCarousel from './ControlledCarousel';
// import ischool from './img/ischool-logo.png'
import './App.css';

class CarouselResults extends Component {
    componentDidMount() {
        var people = this.props.people;
        var index = this.props.index;
        // console.log("eople" + people);
    }
  render() {
    return (
        <div>
            my score: {this.props.scoreA}
            their score:{this.props.otherScore}
        </div>
    );
  }
}

export default CarouselResults;
