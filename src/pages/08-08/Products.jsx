import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const router = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const getAllProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      //   console.log(response.data, "response.data");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllProducts();
    // alert("Component is mounted")
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
              onClick={() => router(`/single-product/${product.id}`)}
              style={{
                cursor: "pointer",
                width: "18%",
                height: "400px",
                borderRadius: "10px",
                border: "1px solid black",
              }}
              key={product.id}
            >
              <img
                style={{ height: "80%", width: "100%" }}
                src={product.image}
              />
              <h2>Name: {product.title}</h2>
              <h3>Price: {product.price}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
