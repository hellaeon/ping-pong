import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const headerStyle = {
  "textAlign": "center",
  "display": "block",
  "fontWeight": "bold"
};

class Addgames extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4">
            <form>
              <div className="form-group">
                <p style={headerStyle}>Add Games</p>
                <select className="form-control">
                  <option value="volvo">Sani</option>
                  <option value="saab">Elmar</option>
                  <option value="opel">Sachin</option>
                </select>
                <p style={headerStyle}>vs</p>
                <select className="form-control">
                  <option value="volvo">Sani</option>
                  <option value="saab">Elmar</option>
                  <option value="opel">Sachin</option>
                </select>
                <p style={headerStyle}>Score (max. of 5)</p>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    id="player1"
                    placeholder="Player 1 score"
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="player2"
                    placeholder="Player 2 score"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  id="submit"
                  className="btn btn-block btn-default"
                  value="Add Set"
                />
              </div>
            </form>
            <button className="btn btn-block btn-danger" onClick="">Add Game</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Addgames;
