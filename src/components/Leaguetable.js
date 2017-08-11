import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const leagueStyle = {
  "color": "white",
  "background-color": "rgb(0,51,102)",
  "border-top-left-radius": "6px",
  "border-top-right-radius": "6px",
  "border-bottom-left-radius": "6px",
  "border-bottom-right-radius": "6px",
  "margin-bottom": "20px"
};

class Leaguetable extends Component {
  render() {
    const players = this.props.players;
    const PlayerRow = props => {
      return (
        <tr>
          <td>
            {props.id}
          </td>
          <td>
            {props.name}
          </td>
          <td>
            {props.won}
          </td>
          <td>
            {props.lost}
          </td>
          <td>
            {`${props.won / (props.won + props.lost) * 100}%`}
          </td>
          <td>
            {props.won * 2}
          </td>
        </tr>
      );
    };
    return (
      <div className="container" style={leagueStyle}>
        <div className="row">
          <div className="col-xs-12">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Won</th>
                  <th>Lost</th>
                  <th>Winning %</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, i) => {
                  return (
                    <PlayerRow
                      key={i}
                      id={i}
                      name={player.name}
                      won={player.won}
                      lost={player.lost}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Leaguetable;
