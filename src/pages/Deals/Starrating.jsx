function StarRating({ rating }) {
  return (
    <div className="deal-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`star ${star <= Math.round(rating) ? "filled" : ""}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;