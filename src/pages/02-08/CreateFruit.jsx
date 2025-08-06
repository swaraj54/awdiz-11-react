import React, { useState } from "react";

const CreateFruit = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);
  const [newFruit, setNewFruit] = useState("");
  const handleInputChange = (event) => {
    setNewFruit(event.target.value);
  };
  const handleSubmit = () => {
    if (newFruit.length > 0) {
      // console.log(setFruits,"setFruits")
      setFruits([...fruits, newFruit]);
      setNewFruit("");
    } else {
      alert("Please enter a fruit name before adding.");
    }
  };
  return (
    <div>
      <h2>Fruits</h2>
      {fruits.map((fruit, index) => (
        <div>
          <h1>
            {index + 1}. {fruit}
          </h1>
          <button>Delete</button>
        </div>
      ))}
      <input value={newFruit} onChange={handleInputChange} />
      {/* <input type="radio" value="honda" />
      <select>
        <option value="honda">Honda</option>
      </select> */}
      <br />
      <button onClick={handleSubmit}>Add {newFruit}</button>
    </div>
  );
};

export default CreateFruit;
