export const CardActions = ({ onSaveForLater, onRemove }) => {
  return (
    <div className="cp__actions">
      <button className="cp__action-btn" onClick={onSaveForLater}>
        <i className="fa-regular fa-bookmark"></i> Save for later
      </button>
      <button className="cp__action-btn" onClick={onRemove}>
        <i className="fa-regular fa-trash-can"></i> Remove
      </button>
    </div>
  );
};
