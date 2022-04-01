import React, { useState } from "react";
import { ToggleButton } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap-table";

const UserInput = (props) => {
  const [groupValue, setGroupValue] = useState("teacher");

  const userGroups = [
    { name: "Teacher", value: "teacher" },
    { name: "Student", value: "student" },
    { name: "Administrator", value: "administrator" },
    { name: "Parent", value: "parent" },
  ];

  const captureUserGroup = (e) => {
    setGroupValue(e.target.value);
    props.setTarget(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="userInput-container">
        <ButtonGroup className="identity-btns">
          {userGroups.map((group, idx) => (
            <ToggleButton
              key={idx}
              id={group.value}
              type="radio"
              variant={idx % 2 ? "outline-primary" : "outline-success"}
              name="radio"
              value={group.value}
              size="lg"
              checked={groupValue === group.value}
              onChange={captureUserGroup}
            >
              {group.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </React.Fragment>
  );
};

export default UserInput;
