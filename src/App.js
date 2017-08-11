import React, { Component } from "react";
import Leaguetable from "./components/Leaguetable";
import Header from "./components/Header";
import NewPlayer from "./components/Newplayer";
import Addgames from "./components/Addgames";
import Latestgames from "./components/Latestgames";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.addPlayer = this.addPlayer.bind(this);
    this.addGame = this.addGame.bind(this);
    this.state = {
      players: [],
      games: []
    };
  }

  addGame(game) {
    const players = this.state.players;
    const winnerIndex = players.findIndex(function(c) {
      return c.name === game.winner;
    });
    const winningPlayer = players[winnerIndex];
    players[winnerIndex] = {
      name: winningPlayer.name,
      won: winningPlayer.won + 1,
      lost: winningPlayer.lost
    };
    const loserIndex = players.findIndex(function(c) {
      return c.name === game.loser;
    });
    const losingPlayer = players[loserIndex];
    players[loserIndex] = {
      name: losingPlayer.name,
      won: losingPlayer.won,
      lost: losingPlayer.lost + 1
    };
    this.setState({ players: players });
    this.setState({ games: this.state.games.concat([game]) });
  }

  addPlayer(name) {
    const player = { name: name, won: 0, lost: 0 };
    this.setState({ players: this.state.players.concat([player]) });
  }

  render() {
    return (
      <div>
        <Header />
        <Leaguetable players={this.state.players} />
        <div className="container">
          <div className="row">
            <div className="col-xs-4">
              <NewPlayer addPlayer={this.addPlayer} />
            </div>
            <div className="col-xs-4">
              <Addgames addGame={this.addGame} players={this.state.players} />
            </div>
            <div className="col-xs-4">
              <Latestgames games={this.state.games} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
