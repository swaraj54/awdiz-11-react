import { useState } from "react";
import "./DynamicStyles.css";

const DynamicStyles = () => {
  const [toggleClass, setToggleClass] = useState(false);

  const buttonStyle = toggleClass ? "active-button" : "inactive-button";

  const handleClick = () => {
    // if (toggleClass) {
    //   setToggleClass(false);
    // } else {
    //   setToggleClass(true);
    // }
    setToggleClass(!toggleClass);
  };

  return (
    <div>
      <button className={buttonStyle} onClick={handleClick}>
        {toggleClass ? "Active" : "Inactive"}
      </button>
      {toggleClass && "True"}
      <Button>Click here akbwhdawgb.</Button>
    </div>
  );
};

const Button = ({ children }) => {
  return <button>{children} + </button>;
};

export default DynamicStyles;
