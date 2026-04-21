import StarRating from "./StarRating";
import CountdownTimer from "./CountdownTimer";

function DealCard({ product }) {
  const discountedPrice = (
    product.price * (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="deal-card">
      <div className="deal-image-wrap">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="deal-info">
        <StarRating rating={product.rating} />
        <p className="deal-category">{product.category}</p>
        <h3 className="deal-title">{product.title}</h3>
        <p className="deal-description">{product.description}</p>
        <div className="deal-pricing">
          <span className="deal-old-price"><i className="fas fa-rupee-sign"></i>{product.price.toFixed(2)}</span>
          <span className="deal-new-price"><i className="fas fa-rupee-sign"></i>{discountedPrice}</span>
        </div>
        <hr className="deal-divider" />
        <p className="deal-countdown-label">Deal ends in</p>
        <CountdownTimer hrs={17} min={36} sec={42} />
      </div>
    </div>
  );
}

export default DealCard;