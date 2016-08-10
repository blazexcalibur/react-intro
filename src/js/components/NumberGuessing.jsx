var React = require('react');

var NumberGuessing = React.createClass({
    getInitialState: function() {
        return {
            //gameStatus: 'playing',
            numberToGuess: 42, // something between 1 and 100 generated when we start a game
            guesses: []
        }
    },
    componentDidMount: function(){
        this._startGame;
    },
    
    _startGame: function(){
        this.setState({
            numberToGuess: Math.random(),
            guesses: []
        })
    },
    
     _handleButtonClick: function(event){
        this.setState({
            guesses: this.state.guesses.concat([this.refs.userGuess.value])
        })
        // console.log(this.state.guesses)
     },
    
     _numberOfTries: function(tries){
        var opening = "Guess a number between 1 and 100";
        var remain = "Remaining tries: ";
        var guesses = "Your guesses";
        
        if(tries==0){
          return (
              <div>
                <p>Guess a number between 1 and 100</p>
                <p>Remaining tries: 5</p>
                <br/>
                <input type="text" ref="userGuess"/>
                <button className="guessButton" onClick={this._handleButtonClick} > Check my guess!</button>
              </div>
          );
        } else if(tries <= 5){
            if(this.refs.userGuess.value == this.state.numberToGuess){
                return (
                    <div>
                        <p>You win!</p>
                            <button className="newGameButton" onClick={this._startGame} > New</button>
                    </div>
                )
            } else if (tries ==5){
                return (
                    <div>
                        <p>You have lost!</p>
                            <button className="newGameButton" onClick={this._startGame} > New</button>
                    </div>
                    );
            } else {
                return (
                    <div>
                        <p>Guess a number between 1 and 100</p>
                        <p>Your guesses {this.state.guesses.join(",")}</p>
                        <p>Too {this.state.guesses[this.stage.guesses.length]>this.set.numberToGuess?'Low':'High'}</p>
                        <p>Remaining tries: {5-tries}</p>
                        <br/>
                        <input type="text" ref="userGuess"/>
                        <button className="guessButton" onClick={this._handleButtonClick} > Check my guess!</button>
                    </div>
                )
            }
        }
     },
        render: function() {
            return (
                <div>
                    {this._numberOfTries(this.state.guesses.length)}
                </div>
            );
        }
});

module.exports = NumberGuessing;
    