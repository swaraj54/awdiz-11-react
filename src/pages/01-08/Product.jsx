import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = ({ users, setUsers }) => {
  console.log(users, "kuchbhi"); // kuchbhi is an array of users passed from App.jsx
  const { productId } = useParams();
  console.log(productId, "productId");

  useEffect(() => {
    if (productId) {
      // api call
    }
  }, [productId]);
  return (
    <div>
      Product - {productId}
      <div>
        {true ? (
          <div>{false ? <h1>Logged In 1</h1> : <h1>Logged In 2</h1>}</div>
        ) : (
          <h1>Please login.</h1>
        )}
      </div>
    </div>
  );
};

export default Product;
