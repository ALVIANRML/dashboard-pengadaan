import React, { useState } from "react";
import SelectForm from "../components/Input/SelectForm";
import Penyelesaian from "../components/Fragments/Penyelesaian";
import Table from "../components/Table";

const SlaPage = () => {
  const [filters, setFilters] = useState({
    bidang: "",
    wilayah: "",
    vendor: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const bidangOptions = [
    { value: "", label: "Semua Bidang" },
    { value: "keuangan", label: "Keuangan" },
    { value: "operasional", label: "Operasional" },
  ];

  const wilayahOptions = [
    { value: "", label: "Semua Wilayah" },
    { value: "wilayah1", label: "Wilayah 1" },
    { value: "wilayah2", label: "Wilayah 2" },
  ];

  const vendorOptions = [
    { value: "", label: "Semua Vendor" },
    { value: "vendor1", label: "Vendor A" },
    { value: "vendor2", label: "Vendor B" },
  ];

  const tenderStats = [
    {
      title: "JUMLAH PAKET",
      value: "0 PAKET",
      bgColor: "bg-[#C1CFA1]",
    },
    {
      title: "NILAI PAKET",
      value: "Rp0.00",
      bgColor: "bg-[#F5F0D7]",
    },
    {
      title: "PRESENTASE",
      value: "0.00 %",
      bgColor: "bg-[#DDE6F4]",
    },
  ];

  const langsungStats = [
    {
      title: "JUMLAH PAKET",
      value: "0 PAKET",
      bgColor: "bg-[#C1CFA1]",
    },
    {
      title: "NILAI PAKET",
      value: "Rp0.00",
      bgColor: "bg-[#F5F0D7]",
    },
    {
      title: "PRESENTASE",
      value: "0.00 %",
      bgColor: "bg-[#DDE6F4]",
    },
  ];

  return (
    <div>
      <div className="flex gap-4 w-full p-6">
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

      <Penyelesaian>
        <Penyelesaian.StatSection title="Tender Terbatas" stats={tenderStats} />
        <Penyelesaian.StatSection title="Langsung" stats={langsungStats} />
      </Penyelesaian>

      <div className="flex justify-center items-center mt-8 w-full">
        <Table />
      </div>
    </div>
  );
};

export default SlaPage;
