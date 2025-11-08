import axios from "axios";
import React, { useEffect, useState } from "react";
import { login } from "../redux/Store.js";
import { useDispatch, useSelector } from "react-redux";
import api from "../services/axiosConfig.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.counter.user);
  console.log(user, "user");
  const [userData, setUserData] = useState({
    email: "user2@gmail.com",
    password: "pass@123",
  });

  const handleChange = (event) => {
    console.log(event.target.value, event.target.name);
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (userData.email && userData.password) {
        // api call
        const response = await api.post("/auth/login", userData);

        if (response.data.success) {
          dispatch(login(response.data.user));
          alert(response.data.message);
          setUserData({
            email: "",
            password: "",
          });
        } else {
          alert(response.data.message);
        }
      } else {
        alert("Please fill all fields");
      }
    } catch (error) {
      console.log(error, "error in api call");
      alert(error);
    }
  };
  useEffect(()=>{
    if(user?.userId){
      router('/')
      
    }
  }, [user])
  return (
    <div>
      <h1>Sign IN / Login - {user?.name}</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <br />
        <input
          name="email"
          type="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          name="password"
          type="password"
          value={userData.password}
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
