var React = require('react');
var $ = require('jquery');

var GithubProfile = React.createClass({
     propTypes: {
        username: React.PropTypes.string.isRequired
    },
     getInitialState: function() {
        return {}
    },
    componentDidUpdate: function(prevProps){
        if(prevProps.username!==this.props.username){
            this.fetchData()
        }
    },
    fetchData: function(){
        var url = `https://api.github.com/users/${this.props.username}`;
        var that = this; // or use => ... .then(response => {})   

         $.getJSON(url).then(
            function(response) {
                that.setState({
                user: response
                });
            }
        )
    },
    componentDidMount: function(){
        this.fetchData();
        //this.componentDidUpdate();
    },
     render: function() {
         if (!this.state.user) {
             return <div>LOADING INFO.</div>;
         }
         var user = this.state.user;
         return (
          <div className="github-user">
              <img className="github-user__avatar" src={user.avatar_url}/>
              <div className="github-user__info">
                  <p>{user.login} ({user.name})</p>
                  <p>{user.bio}</p>  
              </div>
          </div>
    )
  }
});

module.exports = GithubProfile;