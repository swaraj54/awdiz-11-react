import React from "react";

const PersonalInfo = ({ userData, handleChange }) => {
  return (
    <div>
      <label>Name</label>
      <br />
      <input
        required
        name="name"
        value={userData.name}
        onChange={handleChange}
      />
      <br />
      <label>Email</label>
      <br />
      <input
        required
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      <br />
      <label>Number</label>
      <br />
      <input
        required
        type="number"
        name="mobile"
        value={userData.mobile}
        onChange={handleChange}
      />
      <br />
    </div>
  );
};

export default PersonalInfo;
