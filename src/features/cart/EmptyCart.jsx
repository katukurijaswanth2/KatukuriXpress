export const EmptyCart = () => {
  return (
    <div className="cp__empty">
      <i className="fa-solid fa-cart-shopping cp__empty-icon"></i>
      <h2>Your cart is empty!</h2>
      <p>Add items to it now.</p>
      <a href="/" className="cp__shop-btn">Shop Now</a>
    </div>
  );
};
