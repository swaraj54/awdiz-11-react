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
import { useEffect, useState } from "react";
import StyledComponent from "./pages/02-08/StyledComponent";
import CreateFruit from "./pages/02-08/CreateFruit";
import Greeting from "./pages/02-08/Greeting";
import DynamicStyles from "./pages/03-08/DynamicStyles";
import Products from "./pages/08-08/Products";
import SingleProduct from "./pages/08-08/SingleProduct";
import UseMemo from "./pages/10-08/UseMemo";
import UseCallback from "./pages/10-08/UseCallback";
import UseRef from "./pages/13-08/UseRef";
import MultiStepperForm from "./pages/17-08/MultiStepperForm";
import UseReducer from "./pages/20-08/UseReducer";
import ContextCounter from "./pages/22-08/ContextCounter";
import CounterRedux from "./redux/CounterRedux";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import api from "./services/axiosConfig";
import { login } from "./redux/Store";
import AddProduct from "./components/seller/AddProduct";
import ViewProducts from "./components/seller/ViewProducts";
import AllProducts from "./components/user/AllProducts";
import ProductDetails from "./components/user/ProductDetails";
import Cart from "./components/user/Cart";
import Orders from "./components/user/Orders";

function App() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState(["Virat", "Rohit", "Dhoni"]);
  const user = useSelector((state) => state.counter.user);

  async function getUserData() {
    try {
      const response = await api.get("/auth/get-current-user");
      console.log("user data", response.data);
      if (response.data.success) {
        dispatch(login(response.data.user));
      }
    } catch (error) {
      console.log("error fetching user data", error);
    }
  }
  useEffect(() => {
    if (user) {
      // user logged in
    } else {
      getUserData();
    }
  }, [user]);

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

        <Route path="/products" element={<Products />} />
        <Route path="/single-product/:productId" element={<SingleProduct />} />
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/use-callback" element={<UseCallback />} />
        <Route path="/use-ref" element={<UseRef />} />
        <Route path="/multi-stepper-form" element={<MultiStepperForm />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/context-counter" element={<ContextCounter />} />
        <Route path="/redux-counter" element={<CounterRedux />} />

        {/* sellers routes  */}
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/view-products" element={<ViewProducts />} />

        {/* user routes  */}
        <Route path="/all-product" element={<AllProducts />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
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
// useMemo
// memo()
// useCallback
// useRef - uncontrolled component - not using state
// useReducer

// Pending

// useContext

// redux
