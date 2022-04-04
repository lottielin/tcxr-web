import React, { Component } from "react";
import UserInput from "../../components/userInput/userInput";

class Executable extends Component {
  state = {};
  render() {
    return (
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Block level button
        </Button>
        <Button variant="secondary" size="lg">
          Block level button
        </Button>
      </div>
    );
  }
}

export default Executable;
