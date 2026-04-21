import { StarRating } from "./StarRating";
import { QtySelector } from "./QtySelector";
import { PriceDisplay } from "./PriceDisplay";
import { CardActions } from "./CardActions";

  import { useState } from "react";
export const CartCard = ({ item, onUpdateQty, onRemove, onSaveForLater }) => {

const [date, setDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 5);
    return today.toISOString().split('T')[0];
  });

  return (
    <div className="cp__card" key={item.title}>
      {/* Hot Deal badge */}
      <div className="cp__hot-deal">
        <i className="fa-solid fa-bolt"></i> Hot Deal
      </div>

      {/* Item body */}
      <div className="cp__item-body">
        {/* Thumbnail */}
        <div className="cp__thumb-wrap">
          <img src={item.thumbnail} alt={item.title} className="cp__thumb" />
        </div>

        {/* Details */}
        <div className="cp__item-details">
          <h3 className="cp__item-title">{item.title}</h3>
          {item.brand && (
            <p className="cp__item-brand">Brand: {item.brand}</p>
          )}

          {/* Rating */}
          <div className="cp__rating-row">
            <StarRating rating={item.rating} />
            <span className="cp__rating-val">{item.rating}</span>
            {/* <span className="cp__assured">
              <i className="fa-solid fa-shield-halved"></i> Assured
            </span> */}
          </div>

          {/* Qty + Price */}
          <div className="cp__price-row">
            <QtySelector
              quantity={item.quantity}
              onIncrement={() => onUpdateQty(item.title, 1)}
              onDecrement={() => onUpdateQty(item.title, -1)}
            />
            <PriceDisplay
              price={item.price}
              discountPercentage={item.discountPercentage}
            />
          </div>

          {/* Delivery info */}
          <p className="cp__delivery-info">
            <i className="fa-regular fa-clock"></i> Delivery by {date}
          </p>
        </div>
      </div>

      <CardActions
        onSaveForLater={() => onSaveForLater(item.title)}
        onRemove={() => onRemove(item.title)}
      />
    </div>
  );
};
