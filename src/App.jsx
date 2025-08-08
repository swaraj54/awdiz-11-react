import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UseState from "./pages/30-07/UseState";
import UseEffect from "./pages/30-07/UseEffect";
import UseParams from "./pages/01-08/UseParams";
import Product from "./pages/01-08/Product";
import { useState } from "react";
import StyledComponent from "./pages/02-08/StyledComponent";
import CreateFruit from "./pages/02-08/CreateFruit";
import Greeting from "./pages/02-08/Greeting";
import DynamicStyles from "./pages/03-08/DynamicStyles";
import Products from "./pages/08-08/Products";
import SingleProduct from "./pages/08-08/SingleProduct";

function App() {
  const [users, setUsers] = useState(["Virat", "Rohit", "Dhoni"]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-params" element={<UseParams />} />
        <Route
          path="/product/:productId"
          element={<Product users={users} setUsers={setUsers} />}
        />
        <Route path="/styled-component" element={<StyledComponent />} />
        <Route path="/create-fruit" element={<CreateFruit />} />
        <Route
          path="/greeting"
          element={<Greeting name="Awdiz" isLoggedIn={false} />}
        />
        <Route path="/dynamic-styles" element={<DynamicStyles />} />

        <Route path='/products' element={<Products />} />
        <Route path='/single-product/:productId' element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;

// Completed 
// useState 
// useNavigate 
// useEffect 
// useParams 
// fakestoreapi



// Pending 

// useMemo 
// useCallback 
// useRef - uncontrolled componented - not using state  


// useReducer 
// useContext 


// redux 
