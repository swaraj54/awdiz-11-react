import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/axiosConfig";

const ProductDetails = () => {
  const router = useNavigate();
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState({});
  const { productId } = useParams();
  console.log(productId, "productId");
  const getSingleProductData = async () => {
    try {
      console.log("inside function");
      setLoading(true);
      const response = await api.get(`/products/product-details/${productId}`);
      if (response.data.success) {
        //   console.log(response, "response");
        setProductData(response.data.product);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addProductCart = async () => {
    try {
      const response = await api.post("/users/add-cart", {
        productId: productId,
      });
      if (response.data.success) {
        alert(response.data.message);
        router("/cart");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (productId) {
      getSingleProductData();
    }
  }, [productId]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "45%", height: "100vh" }}>
            <img src={productData.imgUrl} />
          </div>
          <div style={{ width: "45%", height: "100vh" }}>
            <h1>Name: {productData.name}</h1>
            <h1>Title: {productData.price}</h1>
          </div>
          <div>
            <button onClick={addProductCart}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
