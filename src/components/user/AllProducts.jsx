import React, { useEffect, useState } from "react";
import api from "../../services/axiosConfig";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
    const router= useNavigate()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getSellerProducts() {
    try {
      setLoading(true);
      const response = await api.get("/products/get-products");
      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getSellerProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
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
      )}
    </div>
  );
};

export default AllProducts;
