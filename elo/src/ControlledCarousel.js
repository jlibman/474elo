import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'
import avatar from './img/facebook-avatar.jpg'
import './App.css';


class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    // const { index, direction } = this.state;
    const index = this.props.index;
    const direction = this.props.direction;

    return (
      <Carousel 
        className="controlled-carousel"
        activeIndex={index}
        direction={direction}
        onSelect={this.props.onClick}>

        <Carousel.Item>
          <img width={700} height={441} src={avatar} />
          <Carousel.Caption>
            <h2 bsStyle="h2">Person A</h2>
            <p>Score: {this.props.otherScore}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img width={700} height={441} src={avatar} />
          <Carousel.Caption>
            <h2 bsStyle="h2">Person B</h2>
            <p>Score: {this.props.otherScore}</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
        <img width={700} height={441} src={avatar} />
          <Carousel.Caption>
            <h2 bsStyle="h2">Person C </h2>
            <p>Score: {this.props.otherScore}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img width={700} height={441} src={avatar} />
          <Carousel.Caption>
            <h2 bsStyle="h2">Person D</h2>
            <p>Score: {this.props.otherScore}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;
