import "./HomePage.css";
import { Header } from "../components/Header";
import { products } from "../data/products.js";
import { ProductContainer } from "../components/ProductContainer.jsx";

export const HomePage = () => {
  return (
    <>
      <title>Home</title>
      <Header />
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
