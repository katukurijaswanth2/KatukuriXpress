export const StarRating = ({ rating }) => {
  return (
    <div className="cp__stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < Math.round(rating) ? "cp__star cp__star--on" : "cp__star"}
        >
          ★
        </span>
      ))}
    </div>
  );
};
