import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="space-x-2">
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
        >
          &lt;
        </button>
        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => onPageChange(num)}
            className={`px-3 py-1 rounded ${
              currentPage === num
                ? "bg-[#9AA580] text-white"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
        >
          &gt;
        </button>
      </div>

      {/* Select Jumlah Baris */}
      <select
        className="border px-3 py-1 text-sm rounded hover:bg-gray-100"
        value={itemsPerPage}
        onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
      >
        {[5, 10, 50].map((n) => (
          <option key={n} value={n}>
            {n}/page
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;
