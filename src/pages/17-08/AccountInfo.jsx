import React from "react";

const AccountInfo = ({ userData, handleChange }) => {
  return (
    <div>
      <label>Username</label>
      <br />
      <input
        required
        name="username"
        value={userData.username}
        onChange={handleChange}
      />
      <br />
      <label>Password</label>
      <br />
      <input
        required
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      <br />
      <label>Confirm password</label>
      <br />
      <input
        required
        type="password"
        name="confirmpassword"
        value={userData.confirmpassword}
        onChange={handleChange}
      />
      <br />
    </div>
  );
};

export default AccountInfo;
