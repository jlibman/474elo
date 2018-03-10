import React, { Component } from 'react';
import './App.css';

class Intro extends Component {
    render() {
        return (
            <div>
                
              <h1> The Elo Rating System Explained</h1>
        <p> The algorithm was originally created by Arpad Elo as a way to more accurately evaluate the skills of chess players. 
             The idea is that your Elo rating is derived from your games and your opponents’ ratings. If you have a low rating and win a game against someone with a high rating, your rating would then rise and your opponent’s would then lower.
              With this rating system, users are able to better evaluate their skills across time and their games. This rating system is now used beyond just chess tournaments.
               It is used in professional sports tournaments, League of Legends, and Tinder. 
            </p>

  <script src="http://d3js.org/d3.v3.min.js"></script>
  <script src="https://rawgit.com/jasondavies/d3-cloud/master/build/d3.layout.cloud.js"></script>
</div>
        );
    }
}
export default Intro;