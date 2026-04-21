export const PriceDisplay = ({ price, discountPercentage }) => {
  const originalPrice = discountPercentage
    ? (price / (1 - discountPercentage / 100)).toFixed(0)
    : null;
  const discountPct = discountPercentage ? Math.round(discountPercentage) : null;

  return (
    <div className="cp__prices">
      {discountPct && (
        <span className="cp__discount-pct">
          <i className="fa-solid fa-arrow-down"></i> {discountPct}%
        </span>
      )}
      {originalPrice && (
        <span className="cp__original-price">₹{originalPrice}</span>
      )}
      <span className="cp__final-price">₹{price}</span>
    </div>
  );
};
