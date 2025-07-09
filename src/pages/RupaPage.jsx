import React from "react";
import CardChart from "../components/Cards/CardChart";
import PieChartHighcharts from "../components/Cards/PieChart";
import SmallChart from "../components/Cards/SmallChart";

const RupaPage = () => {
  const efficiencyCards = [
    { title: "TERHADAP RKP", nominal: 0, presentase: "0%" },
    { title: "TERHADAP HPS", nominal: 0, presentase: "0%" },
    { title: "PROCUREMANT EXCELLENCE", nominal: 0, presentase: "0%" },
  ];

  return (
    <div className="p-6 space-y-10">
      {/* BAGIAN 1: INVESTASI & EKSPLOITASI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Kartu INVESTASI */}
        <div className="col-start-1 row-start-1 bg-blue-100 rounded-xl shadow-md px-6 py-4 text-center text-black flex flex-col gap-4 justify-center h-fit outline-1 transition duration-600 ease-in-out hover:scale-102">
          <h3 className="font-bold text-3xl tracking-tight mt-4">INVESTASI</h3>
          <hr className="border-t border-black" />
          <div className="flex justify-center items-center gap-4">
            <div>
              <p className="text-2xl font-semibold">0</p>
              <p className="text-xs">PAKET</p>
            </div>
            <div className="h-6 w-px bg-black" />
            <div>
              <p className="text-2xl font-semibold">0.000 %</p>
            </div>
          </div>
          <hr className="border-t border-black" />
          <div>
            <p className="text-xs font-md">NOMINAL</p>
            <p className="text-2xl font-bold">Rp0.0000</p>
          </div>
        </div>

        {/* PIE CHART (Investasi vs Eksploitasi) */}
        <div className="col-start-2 row-start-1 row-span-2">
          <CardChart title="CHART (INVESTASI VS EKSPLOITASI)">
            <PieChartHighcharts />
          </CardChart>
        </div>

        {/* Kartu EKSPLOITASI */}
        <div className="col-start-3 row-start-1 bg-blue-100 rounded-xl shadow-md px-6 py-4 text-center text-black flex flex-col gap-4 justify-center h-fit outline-1 transition duration-600 ease-in-out hover:scale-102">
          <h3 className="font-bold text-3xl tracking-tight mt-4">
            EKSPLOITASI
          </h3>
          <hr className="border-t border-black" />
          <div className="flex justify-center items-center gap-4">
            <div>
              <p className="text-2xl font-semibold">0</p>
              <p className="text-xs">PAKET</p>
            </div>
            <div className="h-6 w-px bg-black" />
            <div>
              <p className="text-2xl font-semibold">0.000 %</p>
            </div>
          </div>
          <hr className="border-t border-black" />
          <div>
            <p className="text-xs font-md">NOMINAL</p>
            <p className="text-2xl font-bold">Rp0.0000</p>
          </div>
        </div>

        {/* CHART INVESTASI */}
        <div className="col-start-1 row-start-2">
          <SmallChart
            title="CHART INVESTASI (REAL VS RUPA)"
            legend1="Real"
            legend2="Rupa"
            color1="#8ef5ee"
            color2="#7C3AED"
          />
        </div>

        {/* CHART EKSPLOITASI */}
        <div className="col-start-3 row-start-2">
          <SmallChart
            title="CHART EKSPLOITASI (REAL VS RUPA)"
            legend1="Real"
            legend2="Rupa"
            color1="#ffcc00"
            color2="#00cc44"
          />
        </div>
      </div>

      {/* BAGIAN 2: TENDER TERBATAS & PENUNJUKAN LANGSUNG */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Kartu TENDER TERBATAS */}
        <div className="col-start-1 row-start-1 bg-blue-100 rounded-xl shadow-md px-6 py-4 text-center text-black flex flex-col gap-4 justify-center h-fit outline-1 transition duration-600 ease-in-out hover:scale-102">
          <h3 className="font-bold text-3xl tracking-tight mt-4">
            TENDER TERBATAS
          </h3>
          <hr className="border-t border-black" />
          <div className="flex justify-center items-center gap-4">
            <div>
              <p className="text-2xl font-semibold">0</p>
              <p className="text-xs">PAKET</p>
            </div>
            <div className="h-6 w-px bg-black" />
            <div>
              <p className="text-2xl font-semibold">0.000 %</p>
            </div>
          </div>
          <hr className="border-t border-black" />
          <div>
            <p className="text-xs font-md">NOMINAL</p>
            <p className="text-2xl font-bold">Rp0.0000</p>
          </div>
        </div>

        {/* PIE CHART (Tender vs PL) */}
        <div className="col-start-2 row-start-1 row-span-2">
          <CardChart title="CHART (TENDER VS P. LANGSUNG)">
            <PieChartHighcharts />
          </CardChart>
        </div>

        {/* Kartu PENUNJUKAN LANGSUNG */}
        <div className="col-start-3 row-start-1 bg-blue-100 rounded-xl shadow-md px-6 py-4 text-center text-black flex flex-col gap-4 justify-center h-fit outline-1 transition duration-600 ease-in-out hover:scale-102">
          <h3 className="font-bold text-3xl tracking-tight mt-4">
            PENUNJUKAN LANGSUNG
          </h3>
          <hr className="border-t border-black" />
          <div className="flex justify-center items-center gap-4">
            <div>
              <p className="text-2xl font-semibold">0</p>
              <p className="text-xs">PAKET</p>
            </div>
            <div className="h-6 w-px bg-black" />
            <div>
              <p className="text-2xl font-semibold">0.000 %</p>
            </div>
          </div>
          <hr className="border-t border-black" />
          <div>
            <p className="text-xs font-md">NOMINAL</p>
            <p className="text-2xl font-bold">Rp0.0000</p>
          </div>
        </div>

        {/* CHART TENDER TERBATAS */}
        <div className="col-start-1 row-start-2">
          <SmallChart
            title="CHART TENDER TERBATAS (REAL VS RUPA)"
            legend1="Real"
            legend2="Rupa"
            color1="#000DFF"
            color2="#D000FF"
          />
        </div>

        {/* CHART PENUNJUKAN LANGSUNG */}
        <div className="col-start-3 row-start-2">
          <SmallChart
            title="CHART P. LANGSUNG (REAL VS RUPA)"
            legend1="Real"
            legend2="Rupa"
            color1="#B2C600"
            color2="#E900AF"
          />
        </div>
      </div>

      {/* BAGIAN EFISIENSI PENGADAAN & PROCUREMENT EXCELLENCE */}
      <div className="bg-white rounded-md shadow outline-0.5 max-w-8xl mx-auto p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6">
          EFISIENSI PENGADAAN DAN PROCUREMENT EXCELLENCE
        </h2>

        <div className="flex flex-col items-center gap-4">
          {efficiencyCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#F8F2D9] rounded-md border text-center p-4 w-full max-w-[1000px] transition duration-600 ease-in-out hover:scale-102"
            >
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <hr className="border-t border-black my-2" />
              <div className="flex justify-center items-center gap-12 mt-2 text-sm md:text-base font-bold">
                <div className="flex flex-col items-center">
                  <span>NOMINAL</span>
                  <span className="font-normal text-base">{card.nominal}</span>
                </div>
                <div className="w-px h-6 bg-black" />
                <div className="flex flex-col items-center">
                  <span>PRESENTASE</span>
                  <span className="font-normal text-base">
                    {card.presentase}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RupaPage;
