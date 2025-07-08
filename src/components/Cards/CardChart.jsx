import React from "react";

const CardChart = ({ title, bgColor = "bg-yellow-100", children }) => {
  return (
    <div className={`rounded-xl shadow-md p-4 ${bgColor} w-full min-h-[580px]`}>
      <h2 className="text-center font-bold mb-8 mt-8  text-black text-xl">{title}</h2>
      
      {/* Chart */}
      <div className="flex justify-center items-center my-4">
        {children}
      </div>

      {/* Legend */}
      <div className="flex justify-center items-center gap-4 text-sm mt-16 text-black">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-purple-600 rounded-full inline-block" />
          <span>Investasi</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-[#ff9d00] rounded-full inline-block" />
          <span>Eksploitasi</span>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12 mb-12 text-black">
        <button className="px-5 py-2 border border-black rounded-md hover:bg-amber-200 font-semibold text-base transition duration-300 ease-in-out hover:scale-105">
        Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default CardChart;