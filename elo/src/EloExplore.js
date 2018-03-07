import React, { Component } from 'react';
import DoMath from './doMath'

class EloExplore extends Component {
    constructor(props) {
        super();
        this.state = {
            name : '',
            title: ''
        }

    }

    firstChange(event) {
        this.setState({
            title: event.target.value
        })
      }
      onChange(event) {
          this.setState({
            name : event.target.value
          })
      }


    render(){

        return (
            <div>
                <label>
                Your Elo Score (a number between 0 and 2000)
                <input type="text" name="title" value={this.state.title} onChange={this.firstChange.bind(this)} />
                </label>
                <br/>
                <label>
                Your opponents Elo Score (a number between 0 and 2000).
                <input type="text" name="opponent" value={this.state.name} onChange={this.onChange.bind(this)} />
                </label>
                <DoMath data = {this.props} />
             </div>
             
        );
    }
}

export default EloExplore;
