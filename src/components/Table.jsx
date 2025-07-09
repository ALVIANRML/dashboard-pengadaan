import React, { useState, useEffect } from "react";
import TableHeader from "./Table/TableHeader";
import TableBody from "./Table/TableBody";
import Pagination from "./Table/Pagination";
import { procurementData } from "../data/procurementData";
import { tableColumns } from "../data/tableColumns";

const Table = ({ filters = {} }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Filter data berdasarkan filters yang diterima
  const filteredData = procurementData.filter((item) => {
    return (
      (filters.bidang === "" ||
        !filters.bidang ||
        item.bidang === filters.bidang) &&
      (filters.wilayah === "" ||
        !filters.wilayah ||
        item.wilayah === filters.wilayah) &&
      (filters.vendor === "" ||
        !filters.vendor ||
        item.vendor === filters.vendor)
    );
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

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
        totalItems={filteredData.length}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
};

export default Table;
