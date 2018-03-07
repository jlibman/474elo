import React, { Component } from 'react';
// import ControlledCarousel from './ControlledCarousel';
// import ischool from './img/ischool-logo.png'
import './App.css';

class CarouselResults extends Component {
    
    componentDidMount() {
        // var people = this.props.people;
        // var index = this.props.index;
        // console.log("eople" + people);
    }
  render() {
    return (
        <div bsStyle=" container-fluid" className="results">
            <h3 bsStyle="h3">my score: {this.props.scoreA}</h3>
            <h3 bsStyle="h3">their score:{this.props.otherScore}</h3>
        </div>
    );
  }
}

export default CarouselResults;
