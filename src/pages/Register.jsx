import React, { useState } from "react";

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
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value, event.target.name);
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      if (
        userData.name &&
        userData.email &&
        userData.password &&
        userData.confirmPassword
      ) {
        // api call
        alert("Submitted Successfully!");
        setUserData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        alert("Please fill all fields");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <h2>
        Name : {userData.name} Email : {userData.email} Password :{" "}
        {userData.password} Confirm Password : {userData.confirmPassword}
      </h2>
      <form onSubmit={handleSubmit}>
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
        <button >Show</button>
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          name="confirmPassword"
          type="password"
          value={userData.confirmPassword}
          onChange={handleChange}
        />
        <button >Show</button>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default Register;
