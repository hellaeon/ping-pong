import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const playerStyle = {
  "color": "white",
  "background-color": "rgb(0,51,102)",
  "border-top-left-radius": "6px",
  "border-top-right-radius": "6px",
  "border-bottom-left-radius": "6px",
  "border-bottom-right-radius": "6px",
  "margin-left": "-20px"
};

const textStyle = {
  "textAlign": "center",
  "display": "block"
};

const colorStyle = {
  "background-color": "rgba(255,255,255,0.1)",
  "color": "white"
};

class NewPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.addPlayer(this.state.name);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4" style={playerStyle}>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="player" style={textStyle}>
                  Add a new player
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="player"
                  placeholder="eg. Jimbo"
                  value={this.state.value}
                  onChange={this.handleChange}
                  style={colorStyle}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-block btn-danger">
                  Add Player
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPlayer;
