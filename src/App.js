import React, { Component } from "react";
import Leaguetable from "./components/Leaguetable";
import Header from "./components/Header";
import NewPlayer from "./components/Newplayer";
import Addgames from "./components/Addgames";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      data: []
    };
  }

  addPlayer(player) {
    this.setState({
      players: this.state.players.concat([player])
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Leaguetable />
        <div className="container">
          <div className="row">
            <div className="col-xs-4">
              <NewPlayer addPlayer={this.addPlayer}/>
            </div>
            <div className="col-xs-4">
              <Addgames />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
