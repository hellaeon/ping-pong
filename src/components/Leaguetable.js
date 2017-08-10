import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'

class Leaguetable extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "Sani",
          won: 0,
          lost: 1,
          winning: 0,
          points: 0
        },
        {
          id: 2,
          name: "Elmar",
          won: 1,
          lost: 0,
          winning: 100,
          points: 2
        },
        {
          id: 3,
          name: "Sachin",
          won: 1,
          lost: 1,
          winning: 50,
          points: 2
        }
      ]
    };
  }

  render() {
    const PersonRow = props => {
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
            {props.winning}
          </td>
          <td>
            {props.points}
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
            {this.state.data.map(person => {
              return <PersonRow 
                     key={person.id} 
                     id={person.id} 
                     name={person.name} 
                     won={person.won}
                     lost={person.lost}
                     winning={person.winning}
                     points={person.points}  />;
            })}
          </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Leaguetable;
