import React, { useEffect, useState } from "react";
import api from "../../services/axiosConfig";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const router = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getUserCartProducts() {
    try {
      setLoading(true);
      const response = await api.get("/users/get-cart-products");
      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function placeOrder() {
    try {
      setLoading(true);
      const response = await api.get("/users/place-order");
      if (response.data.success) {
        alert(response.data.message)
        router("/orders")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getUserCartProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Cart :</h1>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                width: "70%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                border: "1px solid black",
              }}
            >
              {products.map((product) => (
                <div
                  onClick={() => router(`/product-details/${product._id}`)}
                  style={{
                    cursor: "pointer",
                    width: "18%",
                    height: "400px",
                    borderRadius: "10px",
                    border: "1px solid black",
                  }}
                  key={product._id}
                >
                  <img
                    style={{ height: "80%", width: "100%" }}
                    src={product.imgUrl}
                  />
                  <h2>Name: {product.name}</h2>
                  <h3>Price: {product.price}</h3>
                </div>
              ))}
            </div>
            <div style={{ border: "1px solid black", width: "25%" }}>
              <button onClick={placeOrder}>Place Order</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
