import React, { useEffect, useState } from "react";
import api from "../../services/axiosConfig";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const router = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getUserOrders() {
    try {
      setLoading(true);
      const response = await api.get("/users/get-orders");
      if (response.data.success) {
        setOrders(response.data.orders);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUserOrders();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Orders :</h1>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                width: "90%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                border: "1px solid black",
              }}
            >
              {orders.map((order) => (
                <div
                  style={{
                    cursor: "pointer",
                    width: "90%",
                    height: "400px",
                    borderRadius: "10px",
                    border: "1px solid black",
                  }}
                  key={order._id}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    {order.products.map((product) => (
                      <div style={{ height: "100%", width: "30%" }}>
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={product.imgUrl}
                        />
                        <h3>{product.name}</h3>
                      </div>
                    ))}
                  </div>
                  <h3>Total Price: {order.price}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
