import React, { memo } from "react";

const ChildrenComponent = ({ counter, Increment }) => {
  console.log("ChildrenComponent Rendered");
  return (
    <div>
      <h2>Children Text - {counter}</h2>
      <button onClick={Increment}>+</button>
    </div>
  );
};

export default memo(ChildrenComponent);
