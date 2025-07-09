import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const getDisplayedPages = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push("...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push("...", currentPage - 1, currentPage, currentPage + 1, "...");
      }
    }

    return pages;
  };

  const displayedPages = getDisplayedPages();

  return (
    <div className="mt-4 flex items-center justify-end gap-3">
      <div className="space-x-2 flex items-center">
        {/* Chevron Kiri */}
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
        >
          &lt;
        </button>

        {/* Nomor Halaman dan Ellipsis */}
        {displayedPages.map((page, idx) =>
          page === "..." ? (
            <span
              key={`ellipsis-${idx}`}
              className="px-3 py-1 text-gray-400 select-none"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? "bg-[#9AA580] text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          )
        )}

        {/* Chevron Kanan */}
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
        >
          &gt;
        </button>
      </div>

      {/* Select jumlah baris */}
      <select
        className="border px-3 py-2 text-sm rounded hover:bg-gray-100"
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
