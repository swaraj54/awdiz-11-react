import React from "react";

const Review = ({userData}) => {
  return (
    <div>
        <h2>Your name: {userData.name}</h2>
        <h2>Your email: {userData.email}</h2>
        <h2>Your mobile: {userData.mobile}</h2>
        <h2>Your username: {userData.username}</h2>
        <h2>Your password: {userData.password}</h2>
    </div>
  );
};

export default Review;
