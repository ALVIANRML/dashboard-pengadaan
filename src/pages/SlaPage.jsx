import React, { useState } from "react";
import SelectForm from "../components/Input/SelectForm";
import Penyelesaian from "../components/Fragments/Penyelesaian";
import Table from "../components/Table";
import {
  bidangOptions,
  wilayahOptions,
  vendorOptions,
} from "../data/selectData";

const SlaPage = () => {
  const [filters, setFilters] = useState({
    bidang: "",
    wilayah: "",
    vendor: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col w-full ">
      {/* Filter Section */}

      <div className="flex gap-4 w-full px-6">
        <SelectForm
          label="Bidang"
          name="bidang"
          value={filters.bidang}
          onChange={handleChange}
          options={bidangOptions}
        />
        <SelectForm
          label="Wilayah"
          name="wilayah"
          value={filters.wilayah}
          onChange={handleChange}
          options={wilayahOptions}
        />
        <SelectForm
          label="Vendor"
          name="vendor"
          value={filters.vendor}
          onChange={handleChange}
          options={vendorOptions}
        />
      </div>

      {/* Penyelesaian Section */}
      <div>
        <Penyelesaian />
      </div>

      {/* Table Section */}
      <div className="flex justify-center items-center mt-8 w-full">
        <Table filters={filters} />
      </div>
    </div>
  );
};

export default SlaPage;
