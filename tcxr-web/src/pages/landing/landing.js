import React, { Component } from "react";
import UserInput from "../../components/userInput/userInput";
import Pillar from "../../components/pillar/pillar";
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
          <p>TO DO 1: route to different pages based on target viewer</p>
          {/* if routing to diff pages: 
          1) in-page rendering with Link (make each button in userInput a link)
          2) use optional params to label */}
          <p>TO DO 2: dynamically render different versions of pillars</p>
          <UserInput setTarget={this.handleSetTarget} />
        </div>

        <div className="pillarContainer">
          <p>Pillars</p>
          <Pillar identity={this.state.target} />
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
