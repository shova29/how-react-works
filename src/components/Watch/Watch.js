import React, { useEffect, useState } from "react";
import Display from "../Display/Display";
import Tablet from "../Tablet/Tablet";

const Watch = () => {
  const [steps, setSteps] = useState(0);

  const increaseSteps = () => {
    // setSteps(steps + 1);
    const newStepsCount = steps + 1;
    setSteps(newStepsCount);
  };

  useEffect(() => {
    console.log(steps);
  }, [steps]);

  return (
    <div style={{ border: "2px solid purple", margin: "20px" }}>
      <h2>This is my smart watch.</h2>
      <h3>My current Stes: {steps}</h3>
      <button onClick={increaseSteps}>De Dourrrrrrrr................</button>
      <Display name="grape" steps={steps}></Display>
      <Tablet></Tablet>
    </div>
  );
};

export default Watch;
