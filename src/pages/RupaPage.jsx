import React from "react";
import CardChart from "../components/Cards/CardChart";
import PieChartHighcharts from "../components/Cards/PieChart";
import SmallChart from "../components/Cards/SmallChart";

const RupaPage = () => {
  return (
    <div className="p-6 mt-36">
      {/* GRID ROW 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 items-stretch">
        {/* Kartu INVESTASI */}
        <div className="bg-blue-100 rounded-xl shadow-md px-6 py-4 text-center text-black flex flex-col justify-between h-full">
        <h3 className="font-bold text-xl mb-4 mt-4 tracking-tight">INVESTASI</h3>

        <hr className="border-t border-black mb-4" />

        <div className="flex justify-center items-center gap-4 mb-4">
            <div className="leading-tight">
            <p className="text-base font-bold">0</p>
            <p className="text-xs">PAKET</p>
            </div>
            <div className="h-6 w-px bg-black" />
            <div className="leading-tight">
            <p className="text-base font-bold">0.000 %</p>
            </div>
        </div>

        <hr className="border-t border-black mb-4" />

        <div className="leading-tight">
            <p className="text-xs font-semibold mb-1">NOMINAL</p>
            <p className="text-xl font-extrabold">Rp0.0000</p>
        </div>
        </div>

        {/* Chart Tengah */}
        <CardChart title="CHART (INVESTASI VS EKSPLORASI)">
          <PieChartHighcharts />
        </CardChart>

        {/* Kartu EKSPLORASI */}
        <div className="bg-blue-100 rounded-xl shadow-md px-6 py-4 text-center text-black flex flex-col justify-between h-full">
          <h3 className="font-bold text-2xl mb-2 mt-1">EKSPLOITASI</h3>
          <hr className="border-t border-black mb-2" />

          <div className="flex justify-center items-center gap-6 mb-2">
            <div>
              <p className="text-base font-semibold">0</p>
              <p className="text-sm">PAKET</p>
            </div>
            <div className="h-6 w-px bg-black" />
            <div>
              <p className="text-base font-semibold">0.000 %</p>
            </div>
          </div>

          <hr className="border-t border-black mb-2" />
          <p className="text-sm font-semibold">NOMINAL</p>
          <p className="text-xl font-bold">Rp0.0000</p>
        </div>
      </div>

      {/* GRID ROW 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SmallChart
          title="CHART INVESTASI (REAL VS RUPA)"
          legend1="Real"
          legend2="Rupa"
          color1="#8ef5ee"
          color2="#7C3AED"
        />

        {/* Spacer kosong tengah */}
        <div></div>

        <SmallChart
          title="CHART EKSPLORASI (REAL VS RUPA)"
          legend1="Real"
          legend2="Rupa"
          color1="#ffcc00"
          color2="#00cc44"
        />
      </div>
    </div>
  );
};

export default RupaPage;