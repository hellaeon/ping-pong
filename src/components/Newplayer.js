import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const headerStyle = {
  "textAlign": "center",
   "display": "block"
};

class NewPlayer extends Component {
  constructor(props) {
    super(props);
    this.submitPlayer = this.submitPlayer.bind(this);
  }

  submitPlayer(e){
    console.log(e.target.value);
    this.props.addPlayer(e.target.value);
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4">
            <form onSubmit={this.submitPlayer}>
              <div className="form-group">
                <label htmlFor="player" style={headerStyle}>Add a new player</label>
                <input type="text" className="form-control" id="player" placeholder="eg. Jimbo"/>
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-block btn-danger" value="Add Player" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPlayer;