import React, { use, useMemo, useState } from "react";

const UseMemo = () => {
  const [counter, setCounter] = React.useState(1);
  const [counter2, setCounter2] = useState(2);
  console.log("Rerendering UseMemo Component");
    const result = heavyCalculation(counter); // click on coutner 2 to check delay
//   const result = useMemo(() => heavyCalculation(counter), [counter]);

  return (
    <div>
      <h1>result : {result}</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h1>counter2 : {counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Increment Counter2
      </button>
    </div>
  );
};
const heavyCalculation = (num) => {
  console.log("Calculating heavy calculation");
  let output = 0;
  for (var i = 0; i < 1000000000; i++) {
    output += i;
  }
  return output + num;
};

export default UseMemo;
