export const DeliveryOptions = ({ deliveryOptions }) => {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        const { priceCents, estimatedDeliveryTimeMs } = deliveryOption;
        const deliveryDate = new Date(
          estimatedDeliveryTimeMs
        ).toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        });
        const deliveryPrice = priceCents / 100;
        const deliveryPriceText =
          deliveryPrice > 0 ? `$${deliveryPrice} - Shipping` : "FREE Shipping";
        return (
          <div className="delivery-option" key={deliveryOption.id}>
            <input
              type="radio"
              className="delivery-option-input"
              name="delivery-option-2"
            />
            <div>
              <div className="delivery-option-date">{deliveryDate}</div>
              <div className="delivery-option-price">{deliveryPriceText}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
