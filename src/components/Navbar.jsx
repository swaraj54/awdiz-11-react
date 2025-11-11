import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/Store";
import api from "../services/axiosConfig";

const Navbar = () => {
  const user = useSelector((state) => state.counter.user);
  const dispatch = useDispatch();
  const router = useNavigate();
  function redirecttoLogin() {
    router("/login");
  }
  async function Logout() {
    try {
      const response = await api.get("/auth/logout");
      if (response.data.success) {
        dispatch(logout());
        alert(response.data.message);
        router("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button onClick={() => router("/")}>Home</button>
      {!user && <button onClick={() => router("/register")}>Register</button>}
      {!user && <button onClick={redirecttoLogin}>Login</button>}
      {user?.role == "seller" && (
        <>
          <button onClick={() => router("/add-product")}>Add Product</button>
          <button onClick={() => router("/view-products")}>View Product</button>
          <button>View Orders</button>
        </>
      )}
      {user?.role == "user" && (
        <>
          <button onClick={() => router("/all-product")}>Products</button>
          <button onClick={() => router("/cart")}>Cart</button>
          <button>View Orders</button>
        </>
      )}
      {user && <button onClick={Logout}>Logout</button>}
    </div>
  );
};

export default Navbar;
