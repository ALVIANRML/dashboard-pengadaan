import React from "react";
import StatCard from "./StatCard";

const StatSection = ({ title, stats, columns = 3, showTitle = true }) => {
  const getGridClasses = () => {
    switch (columns) {
      case 2:
        return "grid grid-cols-2 gap-4";
      case 3:
        return "grid grid-cols-3 gap-4";
      case 4:
        return "grid grid-cols-2 lg:grid-cols-4 gap-4";
      default:
        return "grid grid-cols-3 gap-4";
    }
  };

  return (
    <div className="">
      {showTitle && <h3 className="text-xl font-bold mb-4">{title}</h3>}
      <div className={getGridClasses()}>
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
