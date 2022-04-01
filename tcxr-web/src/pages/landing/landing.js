import React, { Component } from "react";
import UserInput from "../../components/userInput/userInput";
import "./landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  state = { target: "teacher" };

  handleSetTarget = (targetValue) => {
    this.setState({ target: targetValue });
  };

  render() {
    return (
      <React.Fragment>
        <div>Landing page</div>

        <div className="targetViewer">
          <p>
            Target viewer: <b>{this.state.target}</b>
          </p>
          <UserInput setTarget={this.handleSetTarget} />
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
