var React = require('react');

var CharacterLimit = React.createClass({
    getInitialState: function() {
    return {
      currentInput: "",
      limit: React.PropTypes.number.isRequired
    };
    },
    _handleInput: function(event) {
    var value = event.target.value;
    if(value.length <= this.props.limit){
        this.setState({
            currentInput: value
        })
    }
    },
    render: function() {
    return (
      <div className="well clearfix">
        <textarea ref="limit" onInput={this._handleInput} value={this.state.currentInput}>
        </textarea>
        <br/>
        <p>{this.props.limit-this.state.currentInput.length}</p>
        
       </div>
       );
     }
})

module.exports = CharacterLimit;
