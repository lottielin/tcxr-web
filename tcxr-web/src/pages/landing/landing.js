import React, { Component } from "react";
import UserInput from "../../components/userInput/userInput";
import Pillar from "../../components/pillar/pillar";
import Executable from "../../components/executable/executable";
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
          <UserInput setTarget={this.handleSetTarget} />
        </div>

        <div className="pillarViewer">
          <p>Pillars - Approach 1: Dynamic rendering in landing page</p>
          <div className="pillarContainer">
            <Pillar identity={this.state.target} />
          </div>
        </div>

        <div className="executableViewer">
          <Executable />
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
