export const PriceSummary = ({ totalMRP, totalDiscount, totalAmount, fees }) => {
  return (
    <div className="cp__right">
      <h2 className="cp__summary-title">PRICE DETAILS</h2>
      <div className="cp__summary-divider" />

      <div className="cp__summary-row">
        <span>MRP.</span>
        <span>₹{Math.round(totalMRP).toLocaleString()}</span>
      </div>
      <div className="cp__summary-row">
        <span>
          Fees <i className="fa-solid fa-chevron-down cp__chevron"></i>
        </span>
        <span>₹{fees}</span>
      </div>
      <div className="cp__summary-row cp__summary-row--discount">
        <span>
          Discounts <i className="fa-solid fa-chevron-down cp__chevron"></i>
        </span>
        <span>- ₹{Math.round(totalDiscount).toLocaleString()}</span>
      </div>

      <div className="cp__summary-divider" />

      <div className="cp__summary-row cp__summary-row--total">
        <span>Total Amount</span>
        <span>₹{Math.round(totalAmount).toLocaleString()}</span>
      </div>

      <div className="cp__summary-divider" />

      <div className="cp__savings-banner">
        You will save ₹{Math.round(totalDiscount).toLocaleString()} on this order
      </div>

      <div className="cp__secure-note">
        <i className="fa-solid fa-shield-halved cp__shield-icon"></i>
        <p>Safe and secure payments. Easy returns. 100% Authentic products.</p>
      </div>

      <div className="cp__place-order-bar">
        <div className="cp__place-order-prices">
          <span className="cp__place-mrp">
            {Math.round(totalMRP).toLocaleString()}
          </span>
          <span className="cp__place-total">
            ₹{Math.round(totalAmount).toLocaleString()}
          </span>
        </div>
        <button className="cp__place-order-btn">Place order</button>
      </div>
    </div>
  );
};
