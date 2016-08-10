var React = require('react');

var YouClicked = React.createClass({
    getInitialState: function(){
        return ({timesClicked: 0, timesReset: 0});
    },
    _handleButtonClick: function(event){
            this.setState({
                timesClicked: this.state.timesClicked + 1
            })
    },
    _numberOfClicks: function(click){
            if(click==0){
                return ("You haven't clicked yet!");
            } else if (click == 1){
                return ("You have clicked once!");
            } else if (click == 2){
                return ("You have clicked twice!");
            } else {
                return ("You have clicked " + click + " times!");
            }
    },
    _resetStat: function(){
         this.setState({
                timesClicked: 0,
                timesReset: this.state.timesReset + 1
            })
    },
    _numberOfReset: function(reset){
        return ("You have reset " + reset + " time");
    },
    render: function(){
        return (
            <div>
                <button onClick={this._handleButtonClick}> Click Me!</button>
                <button onClick={this._resetStat}> Reset!</button>
                <p> {this._numberOfClicks(this.state.timesClicked)}</p>
                <p> {this._numberOfReset(this.state.timesReset)}</p>
            </div>
        );
    }
})

module.exports = YouClicked;