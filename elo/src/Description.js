import React, { Component } from 'react';
import './App.css';

class Description extends Component {
    render() {
        return (
            <blockquote bsStyle="blockquote">
                <p bsStyle="mb-0">
                    Tinder uses the Elo Rating System in a similar fashion to its original intention. The difference lies in the way you “win” or “lose” in a “game”. Each game is defined as when your profile card is shown to a different user on Tinder. If the other user swipes left (dislikes your profile), you lose the game. If your the other user swipes right on your profile (likes your profile), you win the game. Your Elo Rating will still adjust according to the other user’s Elo Rating. Similarly, the if the right-swiping user has a high rating, your rating will rise and vise versa.
                </p>
            </blockquote>
        );
    }
}
export default Description;