import React from "react";

const ConfirmModule = ({handleSubmit, handleConfrimModule}) => {
  return (
    <div>
      <h1>Confirm Action</h1>
      <button onClick={handleConfrimModule}>Cancel</button>
      <button onClick={handleSubmit}>Aproove</button>
    </div>
  );
};

export default ConfirmModule;
