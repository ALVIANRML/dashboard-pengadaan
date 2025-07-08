import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PieChartHighcharts = () => {
  const options = {
    chart: {
      type: "pie",
      height: 250,
      backgroundColor: "transparent",
    },
    title: {
      text: null,
    },
    series: [
      {
        name: "Jumlah",
        data: [
          { name: "Investasi", y: 984, color: "#7C3AED" },
          { name: "Eksploitasi", y: 413, color: "#ff9d00" },
        ],
      },
    ],
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
      },
    },
    credits: { enabled: false },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChartHighcharts;
