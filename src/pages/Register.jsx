import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [name , setName] = React.useState("");
//   const [email , setEmail] = React.useState("");
//   const [password , setPassword] = React.useState("");
//   const [confirmPassword , setConfirmPassword] = React.useState("");

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <h2>Name : {name} Email : {email} Password : {password} Confirm Password : {confirmPassword}</h2>
//       <form>
//         <label>Name</label><br/>
//         <input type='text' onChange={(event)=> setName(event.target.value) } /><br/>
//         <label>Email</label><br/>
//         <input type='email' onChange={(event)=> setEmail(event.target.value) } /><br/>
//         <label>Password</label><br/>
//         <input type='password' onChange={(event)=> setPassword(event.target.value) } /><br/>
//         <label>Confirm Password</label><br/>
//         <input type='password' onChange={(event)=> setConfirmPassword(event.target.value) }/><br/>
//         <input type='submit' />
//       </form>
//     </div>
//   )
// }

const Register = () => {
  const user = useSelector((state) => state.counter.user);
  const router = useNavigate();
  const [userData, setUserData] = useState({
    name: "user 2",
    email: "user2@gmail.com",
    password: "pass@123",
    confirmPassword: "pass@123",
    role: "user",
  });

  const handleChange = (event) => {
    console.log(event.target.value, event.target.name);
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  const handleChangeRole = (event) => {
    setUserData({ ...userData, role: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (
        userData.name &&
        userData.email &&
        userData.password &&
        userData.confirmPassword
      ) {
        // api call
        const response = await axios.post(
          "http://localhost:8000/api/v1/auth/register",
          userData
        );

        if (response.data.success) {
          alert(response.data.message);
          setUserData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        } else {
          alert(response.data.message);
        }
      } else {
        alert("Please fill all fields");
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    if (user?.userId) {
      router("/");
    }
  }, [user]);
  return (
    <div>
      <h1>Sign Up</h1>
      <h2>
        Name : {userData.name} Email : {userData.email} Password :{" "}
        {userData.password} Confirm Password : {userData.confirmPassword}
      </h2>
      <form onSubmit={handleSubmit}>
        <label>Role</label>
        <select onChange={handleChangeRole}>
          <option value="user">User</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>
        <br />
        <label>Name</label>
        <br />
        <input
          name="name"
          type="text"
          value={userData.name}
          onChange={handleChange}
        />
        <br />
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
        <button>Show</button>
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          name="confirmPassword"
          type="password"
          value={userData.confirmPassword}
          onChange={handleChange}
        />
        <button>Show</button>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default Register;
