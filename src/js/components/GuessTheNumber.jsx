var React = require('react');

var GuessTheNumber = React.createClass({
  propTypes: {
    numberToGuess: React.PropTypes.string.isRequired,
  },
  _handleButtonClick: function(){
      { if(this.refs.userGuess.value == this.props.numberToGuess){
          alert("you have guessed right!");
        } else if(this.refs.userGuess.value > this.props.numberToGuess){
            alert("too high!");
        } else {
          alert("too low!");
        }
      }
  },
  render: function() {
    return (
        <div>
            <p>Guess a number between 1 and 100</p>
                <input type="text" ref="userGuess"/>
            <button className="guessButton" onClick={this._handleButtonClick}> Check my guess!</button>
        </div>
    );
  }
});

module.exports = GuessTheNumber;