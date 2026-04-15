export const Pagination = ({ page, onPrev, onNext, isPrevDisabled, isNextDisabled }) => {
  return (
    <div className="flex justify-center gap-4 my-5">
      <button
        disabled={isPrevDisabled}
        onClick={onPrev}
        className={`px-4 py-2 rounded font-medium ${
          isPrevDisabled ? "bg-gray-300 text-gray-500" : "bg-blue-500 text-white"
        }`}
      >
        Previous
      </button>

      <span className="px-3 py-2">Page {page + 1}</span>

      <button
        disabled={isNextDisabled}
        onClick={onNext}
        className={`px-4 py-2 rounded font-medium ${
          isNextDisabled ? "bg-gray-300 text-gray-500" : "bg-blue-500 text-white"
        }`}
      >
        Next
      </button>
    </div>
  );
};