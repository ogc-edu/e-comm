import "./HomePage.css";
import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { ProductContainer } from "../components/ProductContainer.jsx";
import axios from "axios";

export const HomePage = ({ cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <title>Home</title>
      <Header cartItems={cart} />
      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            const {
              id,
              image,
              name,
              rating: productRating,
              priceCents: price,
            } = product;
            return (
              <ProductContainer
                key={id}
                image={image}
                name={name}
                rating={productRating}
                price={price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
