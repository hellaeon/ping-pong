import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const lasestStyle = {
    "color": "white",
    "background-color": "rgb(0,51,102)",
    "border-top-left-radius": "6px",
    "border-top-right-radius": "6px",
    "border-bottom-left-radius": "6px",
    "border-bottom-right-radius": "6px",
    "margin-left": "20px"
  };

const textStyle = {
    "textAlign": "center",
    "display": "block",
    "fontWeight": "bold"
  };

  const alignStyle = {
    "textAlign": "center",
    "display": "block"
  };  

  const setStyle = {
    "display": "inline-block"
  };  

class Latestgames extends Component {
  render() {
    const games = this.props.games;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4" style={lasestStyle}>
              <p style={textStyle}>Latest Games</p>
              {games.map((game, i) => {
                  return (
                      <div key={i} style={alignStyle}>
                      <p>{`${game.winner} ${game.winnerScore} - ${game.loserScore} ${game.loser}`}</p>
                      {game.sets.map((set, i) => {
                          return (
                              <p style={setStyle}>{` ${set.player1SetScore} - ${set.player2SetScore} | `}</p>
                          );
                      })}
                      </div>
                  );
                })}
          </div>
        </div>
      </div>
    );
  }
}

export default Latestgames;