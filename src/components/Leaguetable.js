import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'

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
            {`${props.won/(props.won+props.lost)*100}%`}
          </td>
          <td>
            {props.won*2}
          </td>
        </tr>
      );
    };
    return (
      <div className="container">
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
              return <PlayerRow 
                     key={i} 
                     id={i} 
                     name={player.name} 
                     won={player.won}
                     lost={player.lost}  />;
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
