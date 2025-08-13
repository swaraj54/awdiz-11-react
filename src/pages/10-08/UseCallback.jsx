import React, { useCallback } from "react";
import ChildrenComponent from "./ChildrenComponent";

const UseCallback = () => {
  const [counter, setCounter] = React.useState(0);
  const [counter2, setCounter2] = React.useState(2);

  // const Incement = () => {
  //   setCounter(counter + 1);
  // };

  const Increment = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div>
      <h1>Parent Text : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <h1>Parent Text : {counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Increment Counter
      </button>
      <ChildrenComponent counter={counter} Increment={Increment} />
    </div>
  );
};

export default UseCallback;
