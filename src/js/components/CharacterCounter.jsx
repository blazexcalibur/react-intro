var React = require('react');

var CharacterCounter = React.createClass({
    getInitialState: function() {
    return {
      currentInput: ""
    };
    },
    _handleInput: function(event) {
    var value = event.target.value;
    this.setState({
        currentInput: value
    })
    },
    render: function() {
    return (
      <div className="well clearfix">
        <textarea onInput={this._handleInput}>
        </textarea>
        <br/>
        <p>{this.state.currentInput.length}</p>
        <button className="btn btn-primary pull-right" >Tweet</button>
       </div>
       );
     }
})

module.exports = CharacterCounter;