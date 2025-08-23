import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Store.JS";

const CounterRedux = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  console.log(counter, "counter");
  return (
    <div>
      <h1>CounterRedux</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default CounterRedux;
