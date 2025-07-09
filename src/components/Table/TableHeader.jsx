import React from "react";

const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr className="bg-primary text-white text-center whitespace-nowrap">
        {columns.map((head, index) => (
          <th
            key={head}
            className={`px-3 py-2 border-r border-gray-400 last:border-r-0 ${
              index === 0 ? "rounded-tl-lg" : ""
            } ${index === columns.length - 1 ? "rounded-tr-lg" : ""}`}
          >
            {head}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
