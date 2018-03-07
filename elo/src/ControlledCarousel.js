import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'
import ischool from './img/ischool-logo.png'
import meme from './img/meme.png'
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
        activeIndex={index}
        direction={direction}
        onSelect={this.props.onClick}>

        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={meme} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={ischool} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={meme} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={ischool} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;
