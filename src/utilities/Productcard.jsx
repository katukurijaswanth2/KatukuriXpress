export const ProductCard = ({ item, onBuyNow }) => {
  return (
    <div className="card" key={item.id}>
      <span className="badge">NEW</span>

      <div className="image-container">
        <img src={item.thumbnail} alt={item.title} />
      </div>

      <h3 className="title">{item.title}</h3>

      <p className="category text-xs text-gray-500 uppercase mb-1">
        {item.category}
      </p>

      <div className="price">
        <span className="old">₹{item.price + 50}</span>
        <span className="new">₹{item.price}</span>
      </div>

      <button className="buy-btn" onClick={() => onBuyNow(item.id)}>
        BUY NOW →
      </button>
    </div>
  );
};