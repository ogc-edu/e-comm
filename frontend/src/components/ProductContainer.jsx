import checkmarkIcon from "../assets/icons/checkmark.png";
import rating45 from "../assets/ratings/rating-45.png";
import rating40 from "../assets/ratings/rating-40.png";

// Preload all product images using Vite's glob import
const productImages = import.meta.glob("../assets/products/*.jpg", {
  eager: true,
  import: "default",
});

// Helper function to get image URL
const getImageUrl = (imagePath) => {
  // imagePath is like "assets/products/athletic-cotton-socks-6-pairs.jpg"
  const imageName = imagePath.split("/").pop();
  const imageKey = `../assets/products/${imageName}`;
  return productImages[imageKey] || imagePath;
};

export const ProductContainer = ({ image, name, rating, price }) => {
  const { stars: ratingStars, count: ratingCount } = rating;
  const ratingStarsImage = ratingStars === 4.5 ? rating45 : rating40;
  const imageSrc = getImageUrl(image);
  return (
    <>
      <div className="product-container">
        <div className="product-image-container">
          <img className="product-image" src={imageSrc} />
        </div>

        <div className="product-name limit-text-to-2-lines">{name}</div>

        <div className="product-rating-container">
          <img className="product-rating-stars" src={ratingStarsImage} />
          <div className="product-rating-count link-primary">{ratingCount}</div>
        </div>

        <div className="product-price">${price / 100}</div>

        <div className="product-quantity-container">
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div className="product-spacer"></div>

        <div className="added-to-cart">
          <img src={checkmarkIcon} />
          Added
        </div>

        <button className="add-to-cart-button button-primary">
          Add to Cart
        </button>
      </div>
    </>
  );
};
