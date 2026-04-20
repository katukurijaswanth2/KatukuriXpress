export const ProductCard = ({ item, onBuyNow }) => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    // Removed the key prop from here
    <div className="card"> 
      <span className="badge">NEW</span>

      <div className="image-container">
        <img src={item.thumbnail} alt={item.title} />
      </div>

      <h3 className="title-c">{item.title}</h3>

      <p className="category ">
        {item.category}
      </p>

      <div className="price">
        <span className="old">₹{item.price + 50}</span>
        <span className="new">₹{item.price}</span>
      </div>
      <button 
        type="button"
        className="productBtn buy-btn" 
        onClick={() =>{ onBuyNow(item.id),
          scrollToTop();
        }}
       

      >
        <i className="fa-solid fa-bag-shopping" style={{ color: '#008000' }}></i> Buy
      </button>
    </div>
  );
};