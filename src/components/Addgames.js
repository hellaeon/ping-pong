import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const textStyle = {
  textAlign: "center",
  display: "block",
  fontWeight: "bold"
};

class Addgames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1name: "",
      player2name: "",
      player1score: 0,
      player2score: 0,
      player1setsWon: 0,
      player2setsWon: 0,
      sets: []
    };

    this.setPlayer1name = this.setPlayer1name.bind(this);
    this.setPlayer2name = this.setPlayer2name.bind(this);
    this.setPlayer1score = this.setPlayer1score.bind(this);
    this.setPlayer2score = this.setPlayer2score.bind(this);
    this.addSet = this.addSet.bind(this);
    this.addGame = this.addGame.bind(this);
  }

  addGame() {
    const player1name = this.state.player1name;
    const player2name = this.state.player2name;
    const player1setsWon = Number(this.state.player1setsWon);
    const player2setsWon = Number(this.state.player2setsWon);
    const winner = player1setsWon > player2setsWon ? player1name : player2name;
    const winnerScore =
      player1setsWon > player2setsWon ? player1setsWon : player2setsWon;
    const loser = player1setsWon < player2setsWon ? player1name : player2name;
    const loserScore =
      player1setsWon < player2setsWon ? player1setsWon : player2setsWon;
    const game = {
      winner: winner,
      winnerScore: winnerScore,
      loser: loser,
      loserScore: loserScore,
      sets: this.state.sets
    };
    this.props.addGame(game);
    this.setState({player1name: "", player2name: "", player1score: 0, player2score: 0, player1setsWon: 0, player2setsWon: 0, sets: []});
  }

  addSet() {
    const player1name = this.state.player1name;
    const player2name = this.state.player2name;
    const player1score = Number(this.state.player1score);
    const player2score = Number(this.state.player2score);
    const player1SetScore = player1score > player2score ? 1 : 0;
    const player2SetScore = player2score > player1score ? 1 : 0;
    if (player1score > player2score)
      this.setState({ player1setsWon: this.state.player1setsWon + 1 });
    if (player2score > player1score)
      this.setState({ player2setsWon: this.state.player2setsWon + 1 });
    const set = {
      player1name: player1name,
      player2name: player2name,
      player1SetScore: player1SetScore,
      player2SetScore: player2SetScore
    };
    this.setState({ sets: this.state.sets.concat([set]) });
  }

  setPlayer1name(event) {
    this.setState({ player1name: event.target.value });
  }

  setPlayer2name(event) {
    this.setState({ player2name: event.target.value });
  }

  setPlayer1score(event) {
    this.setState({ player1score: event.target.value });
  }

  setPlayer2score(event) {
    this.setState({ player2score: event.target.value });
  }

  render() {
    const players = this.props.players;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4">
            <form>
              <div className="form-group">
                <p style={textStyle}>Add Games</p>
                <select className="form-control" onChange={this.setPlayer1name} 
                        value={this.state.player1name ? this.state.player1name : ''}>
                <option disabled selected value>Please select...</option>  
                {players.map((player, i) => {
                  return (
                    <option key={i}>{player.name}</option>
                  );
                })}
                </select>
                <p style={textStyle}>vs</p>
                <select className="form-control" onChange={this.setPlayer2name} 
                        value={this.state.player2name ? this.state.player2name : ''}>
                <option disabled selected value>Please select...</option>
                  {players.map((player, i) => {
                    return (
                      <option key={i}>{player.name}</option>
                    );
                  })}
                </select>
                <p style={textStyle}>Score (max. of 5)</p>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    id="player1"
                    placeholder="Player 1 score"
                    onChange={this.setPlayer1score}
                    value={this.state.player1score}
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="player2"
                    placeholder="Player 2 score"
                    onChange={this.setPlayer2score}
                    value={this.state.player2score}
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="button"
                  id="submit"
                  className="btn btn-block btn-default"
                  value="Add Set"
                  onClick={this.addSet}
                />
              </div>
            </form>
            <button className="btn btn-block btn-danger" onClick={this.addGame}>
              Add Game
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Addgames;
