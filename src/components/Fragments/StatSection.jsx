import React from "react";
import StatCard from "./StatCard";

const StatSection = ({ title, stats }) => {
  return (
    <div className="">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((item, index) => (
          <StatCard
            key={index}
            title={item.title}
            value={item.value}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default StatSection;
