import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DogList from './DogList'; 
import DogDetails from './DogDetails'; 
import NavBar from './NavBar';
import whiskeyImg from './images/whiskey.jpg'; 
import dukeImg from './images/duke.jpg'; 
import perryImg from './images/perry.jpg'; 

class App extends React.Component {
  render() {
    const { dogs } = this.props;
    return (
      <Router>
        <div>
          <NavBar dogs={dogs} />
          <Switch>
            <Route exact path="/dogs" render={() => <DogList dogs={dogs} />} />
            <Route path="/dogs/:name" render={props => {
              const name = props.match.params.name;
              const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());
              return dog ? <DogDetails dog={dog} /> : <Redirect to="/dogs" />;
            }} />
            <Redirect to="/dogs" />
          </Switch>
        </div>
      </Router>
    );
  }
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskeyImg,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: dukeImg,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perryImg,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
  ]
};

export default App;

