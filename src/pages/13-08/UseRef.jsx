import React from "react";

const UseRef = () => {
  const inputRef = React.useRef(1); // {current : "hii"}
  const Increment = () => {
    inputRef.current = inputRef.current + 1; // {current : 2}
    console.log(inputRef.current,"inputRef.current");
  };
  console.log("Re-rendering...")
  return (
    <div>
      <h1>{inputRef.current}</h1>
      <button onClick={Increment}>+</button>
    </div>
  );
};

export default UseRef;
