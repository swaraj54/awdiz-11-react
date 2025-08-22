import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Navbar = () => {
  const { state } = useContext(CounterContext);
  const router = useNavigate();
  function redirecttoLogin() {
    router("/login");
  }
  return (
    <div >
      <button>Counter from Context: {state?.count}</button>
      <button onClick={() => router("/")}>Home</button>
      <button onClick={() => router("/register")}>Register</button>
      <button onClick={redirecttoLogin}>Login</button>
    </div>
  );
};

export default Navbar;
