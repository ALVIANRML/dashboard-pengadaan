import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const SmallChart = ({ title, legend1, legend2, color1, color2 }) => {
  const options = {
    chart: {
      type: "pie",
      height: 200,
      backgroundColor: "transparent",
    },
    title: { text: null },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        size: "100%",
        dataLabels: {
          enabled: true,
          format: "{point.y}",
          style: { fontSize: "12px", color: "black" },
        },
      },
    },
    series: [
      {
        name: "Jumlah",
        data: [
          { name: legend1, y: 984, color: color1 },
          { name: legend2, y: 413, color: color2 },
        ],
      },
    ],
    credits: { enabled: false },
  };

  return (
    <div className="bg-[#F2F5EC] rounded-xl shadow p-4 text-black">
      <h3 className="text-sm font-bold mb-2">{title}</h3>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className="flex justify-start gap-4 text-sm mt-2">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color1 }} />
          {legend1}
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color2 }} />
          {legend2}
        </span>
      </div>
      <button className="mt-3 px-4 py-1 border border-black rounded text-sm font-medium hover:bg-gray-100">
        Lihat Detail
      </button>
    </div>
  );
};

export default SmallChart;