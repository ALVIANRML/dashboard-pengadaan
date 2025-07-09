import React from "react";
import StatSection from "./StatSection";
import { tenderStats, langsungStats, summaryStats } from "../../data/statsData";

const Penyelesaian = () => {
  return (
    <div className="flex flex-col gap-y-8 p-8">
      {/* Section 1: Summary dengan 2 card */}
      <div className="flex flex-col gap-y-4">
        <h2 className="text-2xl font-bold text-center mb-4 uppercase">
          PERINCIAN PAKET PER BIDANG/WILAYAH/VENDOR
        </h2>
        <StatSection stats={summaryStats} columns={2} showTitle={false} />
      </div>

      {/* Section 2: Tender dan Penunjukkan Langsung */}
      <div className="flex flex-col gap-y-4">
        <h2 className="text-2xl font-bold text-center mb-4 uppercase">
          DETAIL PENGADAAN PER METODE
        </h2>
        <StatSection title="Tender Terbatas" stats={tenderStats} />
        <StatSection title="Penunjukkan Langsung" stats={langsungStats} />
      </div>
    </div>
  );
};

export default Penyelesaian;
