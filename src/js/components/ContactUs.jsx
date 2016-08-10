var React = require('react');

var ContactUs = React.createClass({
     render: function() {
         if (!this.state.user) {
             return <div>LOADING INFO.</div>;
         }
         var user = this.state.user;
    return (
      <img src={user.avatar_url}/>
    )
  }
})

module.exports = ContactUs;