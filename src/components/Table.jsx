import React, { useState } from "react";
import TableHeader from "./Table/TableHeader";
import TableBody from "./Table/TableBody";
import Pagination from "./Table/Pagination";
import { procurementData } from "../data/procurementData";
import { tableColumns } from "../data/tableColumns";

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const totalPages = Math.ceil(procurementData.length / itemsPerPage);
  const currentData = procurementData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  return (
    <div className="w-full bg-white rounded-lg">
      <div className="overflow-hidden rounded-lg border border-gray-300">
        <table className="min-w-full text-sm text-left">
          <TableHeader columns={tableColumns} />
          <TableBody data={currentData} />
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
};

export default Table;
