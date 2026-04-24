import React from "react";
const StatsCard = ({ title, value, subtitle, subtitleColor = "text-gray-500", icon }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm flex-1 min-w-0">
      <p className="text-sm text-gray-500 font-medium mb-1">{title}</p>
      <p className="text-3xl font-bold text-[#C8922A] mb-1">{value}</p>
      <p className={`text-xs font-medium flex items-center gap-1 ${subtitleColor}`}>
        {icon && <span>{icon}</span>}
        {subtitle}
      </p>
    </div>
  );
};

export default StatsCard;
