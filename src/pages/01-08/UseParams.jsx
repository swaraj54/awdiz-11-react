import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseParams = () => {
  const router = useNavigate();
  const [tshirt, setTshirt] = useState([
    {
      id: 1,
      name: "T-shirt 1",
      price: 100,
      image:
        "https://levi.in/cdn/shop/files/A79730158_02_Front.jpg?v=1751045764",
    },
    {
      id: 2,
      name: "T-shirt 2",
      price: 200,
      image:
        "https://levi.in/cdn/shop/files/A79730158_02_Front.jpg?v=1751045764",
    },
    {
      id: 3,
      name: "T-shirt 3",
      price: 300,
      image:
        "https://levi.in/cdn/shop/files/A79730158_02_Front.jpg?v=1751045764",
    },
    {
      id: 4,
      name: "T-shirt 4",
      price: 400,
      image:
        "https://levi.in/cdn/shop/files/A79730158_02_Front.jpg?v=1751045764",
    },
    {
      id: 5,
      name: "T-shirt 5",
      price: 500,
      image:
        "https://levi.in/cdn/shop/files/A79730158_02_Front.jpg?v=1751045764",
    },
  ]);
  const parentStlying = { display: "flex", justifyContent: "space-around" };
  console.log(tshirt, "tshirt");
  return (
    <div style={parentStlying}>
      {tshirt.map((product) => (
        <div
          key={product.id}
          onClick={() => router(`/product/${product.id}`)}
          style={{ border: "1px solid black", cursor: "pointer" }}
        >
          <img
            style={{ width: "100px", height: "140px" }}
            src={product.image}
          />
          <h3>Name: {product.name}</h3>
          <h3>Price: {product.price}/-</h3>
        </div>
      ))}
    </div>
  );
};

export default UseParams;
