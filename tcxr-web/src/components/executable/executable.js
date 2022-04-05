import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./executable.css";

class Executable extends Component {
  state = {};
  render() {
    return (
      <div className="gap-2 executable-container">
        <Button className="executable" variant="info" size="lg">
          Windows Installment
        </Button>
        <Button className="executable" variant="light" size="lg">
          Mac OS Installment
        </Button>
      </div>
    );
  }
}

export default Executable;
