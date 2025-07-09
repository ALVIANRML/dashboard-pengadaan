import React from "react";

const TableRow = ({ item, index }) => {
  return (
    <tr className="text-black border-b border-gray-300 last:border-b-0">
      <td className="px-3 py-2 border-r border-gray-300 last:border-r-0 whitespace-pre-line">
        {item.nomorPP}
      </td>
      <td className="px-3 py-2 border-r border-gray-300 last:border-r-0 ">
        {item.namaPaket}
      </td>
      <td className="px-3 py-2 border-r border-gray-300 last:border-r-0">
        {item.sumberDana}
      </td>
      <td className="px-3 py-2 border-r border-gray-300 last:border-r-0 whitespace-nowrap">
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
  );
};

export default TableRow;
