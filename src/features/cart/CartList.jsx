import { DeliveryRow } from "./DeliveryRow";
import { CartCard } from "./CartCard";

export const CartList = ({ cartItems, onUpdateQty, onRemove, onSaveForLater }) => {
  return (
    <div className="cp__left">
      <DeliveryRow />
      {cartItems.map((item) => (
        <CartCard
          key={item.title}
          item={item}
          onUpdateQty={onUpdateQty}
          onRemove={onRemove}
          onSaveForLater={onSaveForLater}
        />
      ))}
    </div>
  );
};
