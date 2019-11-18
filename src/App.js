import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Wrapper from "./components/Wrapper";
import Images from "./imageLink.json";
import GeneralCard from "./components/GenericCard";

class App extends Component {

  state = {
    Images,
    currentScore: 0,
    highScore: 0,
    clicked: [],
    message: "Start the game by clicking on a champion"
  };

  imageEvent = (id) => {
    if (this.state.clicked.indexOf(id) === -1) {
      var newGameScore = this.state.currentScore + 1;
      this.setState({ currentScore: newGameScore } );
      this.state.clicked.push(id);
      this.setState({clicked: this.state.clicked} );
      this.setState({message: "You're doing great!"} );
      if (newGameScore > this.state.highScore)
        this.setState({ highScore: newGameScore } );
      this.shuffle(this.state.Images);
    } else {
      this.setState({message: "Oh No! Guess you're back to 0 Gold..."});
      if (newGameScore > this.state.highScore)
        this.setState({ highScore: newGameScore });
      this.setState({ currentScore: 0 });
      this.state.clicked.length = 0;
    }
  };

  shuffle = (imageArray) => {
    for (let i = imageArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
    }
    return imageArray;
  };

  render(){
    return (
        <div>
          <Navbar
              message={this.state.message}
              score={this.state.currentScore}
              maxScore={this.state.highScore}
          />
          <Jumbotron />
    <Wrapper>
          {this.state.Images.map(beverage => (
              <GeneralCard
                  imageEvent={this.imageEvent}
                  id={beverage.id}
                  image={beverage.image}
              />
          ))}
        </Wrapper>
        </div>
    );
  }
}

export default App;