var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/App');

// var list = {

// <div>
// <GithubUser username="ziad-saab"/>
// <GithubUser username="ziad-saab"/>
// <GithubUser username="ziad-saab"/>
// <GithubUser username="ziad-saab"/>
// </div>

// };
// OR!!

var names = ["asdfa","asdfasdf","asdfadf"];
/*
var list = names.map(function(name, idx){
    return <GithubUser key="idx" username="name"/>
})
username="gaearon"
*/
ReactDOM.render(<App/>, document.getElementById('app'));
