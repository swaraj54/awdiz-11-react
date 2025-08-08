import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState({});
  const { productId } = useParams();
  console.log(productId, "productId");
  const getSingleProductData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      //   console.log(response, "response");
      setProductData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
            <img src={productData.image} />
          </div>
          <div style={{ width: "45%", height: "100vh" }}>
            <h1>Name: {productData.title}</h1>
            <h1>Title: {productData.price}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
