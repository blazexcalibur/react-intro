var React = require('react');

var GithubSearchForm = React.createClass({

  _handleSubmit: function(event){
      event.preventDefault();
      this.props.onSearch(this.refs.userInput.value);
      
  },
  render: function() {
    return (
      <div >
        <p>Enter a GitHub username:</p>
            <input type="text" ref="userInput" />
        <button onClick={this._handleSubmit}>Go!</button>
      </div>
    );
  }
});
  
module.exports = GithubSearchForm;
  
  
  