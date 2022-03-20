import React from "react";
import Dial from "../Dial/Dial";

const Display = (props) => {
  return (
    <div style={{ border: "2px solid red", margin: "10px" }}>
      <h2>Name: {props.name}</h2>
      <p>So far steps today: {props.steps}</p>
      <Dial steps={props.steps}></Dial>
    </div>
  );
};

export default Display;
