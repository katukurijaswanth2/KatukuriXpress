export const QtySelector = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <div className="cp__qty-wrap">
      <span className="cp__qty-label">Qty:</span>
      <div className="cp__qty-ctrl">
        <button className="cp__qty-btn" onClick={onDecrement}>−</button>
        <span className="cp__qty-val">{quantity}</span>
        <button className="cp__qty-btn" onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};
