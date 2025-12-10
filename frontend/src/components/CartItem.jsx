import { DeliveryOptions } from "./DeliveryOptions";
export const CartItem = ({ cartItem, deliveryOptions }) => {
  if (!cartItem || !cartItem.product) {
    return null;
  }

  const { quantity, product } = cartItem;
  const image = product.image || "";
  const name = product.name || "";
  const priceCents = product.priceCents || 0;
  return (
    <div className="cart-item-container">
      <div className="delivery-date">Delivery date: Wednesday, June 15</div>

      <div className="cart-item-details-grid">
        <img className="product-image" src={image} />

        <div className="cart-item-details">
          <div className="product-name">{name}</div>
          <div className="product-price">${(priceCents / 100).toFixed(2)}</div>
          <div className="product-quantity">
            <span>
              Quantity: <span className="quantity-label">{quantity}</span>
            </span>
            <span className="update-quantity-link link-primary">Update</span>
            <span className="delete-quantity-link link-primary">Delete</span>
          </div>
        </div>

        {deliveryOptions.length > 0 && (
          <DeliveryOptions deliveryOptions={deliveryOptions} />
        )}
      </div>
    </div>
  );
};
