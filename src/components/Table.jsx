import React, { useState } from "react";

const dummyData = Array.from({ length: 23 }, (_, i) => ({
  nomorPP: `AA/APLM/R2/2025/10${i + 1}`,
  namaPaket: `Pengadaan barang ${i + 1}`,
  sumberDana: i % 2 === 0 ? "APBN" : "Pribadi",
  metode: i % 3 === 0 ? "Tender Terbatas" : "Penunjukkan Langsung",
  nilai: `Rp${(100_000_000 + i * 5_000_000).toLocaleString("id-ID")}`,
  vendor: `Vendor ${i + 1}`,
  bidang: i % 2 === 0 ? "Elektronik" : "Alat Tulis",
  wilayah: `REG ${(i % 3) + 1}`,
}));

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const currentData = dummyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full bg-white rounded-lg  ">
      <div className="overflow-hidden rounded-lg border border-gray-300">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-primary text-white text-center">
              {[
                "Nomor PP",
                "Nama Paket",
                "Sumber Dana",
                "Metode",
                "Nilai",
                "Nama Vendor",
                "Bidang",
                "Wilayah",
              ].map((head, index) => (
                <th
                  key={head}
                  className={`px-3 py-2 border-r border-gray-400 last:border-r-0 ${
                    index === 0 ? "rounded-tl-lg" : ""
                  } ${index === 7 ? "rounded-tr-lg" : ""}`}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className="text-black border-b border-gray-300 last:border-b-0"
              >
                <td className="px-3 py-2 border-r border-gray-300 last:border-r-0 whitespace-pre-line">
                  {item.nomorPP}
                </td>
                <td className="px-3 py-2 border-r border-gray-300 last:border-r-0">
                  {item.namaPaket}
                </td>
                <td className="px-3 py-2 border-r border-gray-300 last:border-r-0">
                  {item.sumberDana}
                </td>
                <td className="px-3 py-2 border-r border-gray-300 last:border-r-0">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {item.metode}
                  </span>
                </td>
                <td className="px-3 py-2 border-r border-gray-300 last:border-r-0 font-semibold">
                  {item.nilai}
                </td>
                <td className="px-3 py-2 border-r border-gray-300 last:border-r-0 font-semibold text-primary">
                  {item.vendor}
                </td>
                <td className="px-3 py-2 border-r border-gray-300 last:border-r-0">
                  {item.bidang}
                </td>
                <td className="px-3 py-2 border-r border-gray-300 last:border-r-0">
                  {item.wilayah}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between ">
        <div className="space-x-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
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
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
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
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          {[5, 10, 50].map((n) => (
            <option key={n} value={n}>
              {n}/page
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Table;
