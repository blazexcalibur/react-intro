var React = require('react');
var ImageCaption = require('./ImageCaption');
var Layout = require('./Layout');
var GuessTheNumber = require('./GuessTheNumber');
var YouClicked = require('./YouClicked');
var CharacterCounter = require('./CharacterCounter');
var CharacterLimit = require('./CharacterLimit');
var NumberGuessing = require('./NumberGuessing');

var GithubSearch = require('./GithubSearch');

var imageList = [
  {id: 42, source: "https://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

var App = React.createClass({
  renderImage: function (image){
    return (
          <ImageCaption key={image.id} source={image.source} text={image.text}/>
    );
  },
  render: function() {
    return (
      <main>
        <h1>My first React App</h1>
        <hr/>
            <div>
                <ImageCaption key="3" source="https://i.imgur.com/D8JWn.jpg" text="This is a Unitail!"/>
            </div>
        <hr/>
            <div>
                {imageList.map(this.renderImage)}
            </div>
        <hr/>
            <h2>Testing Layout</h2>
                <Layout> <h2>About us</h2> <p>We are <a href="https://facebook.github.io/react/">React</a> developers!</p> </Layout>
        <hr/>
            <GuessTheNumber numberToGuess="3"/>
        <hr/>
            <YouClicked/>
        <hr/>
            <CharacterCounter/>
        <hr/>
            <CharacterLimit limit={150}/>
        <hr/>
            <NumberGuessing/>
        <hr/>
            
        <hr/>
            <GithubSearch/>
      </main>
    );
  }
});

module.exports = App;