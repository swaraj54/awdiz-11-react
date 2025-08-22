import React, { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

const ContextCounter = () => {
  const { state, dispatch } = useContext(CounterContext);
  console.log(state, "state");
  return (
    <div>
      <h1>Context Counter: {state?.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

export default ContextCounter;
