import React from "react";

const StatsSummary = ({
  title,
  value,
  subtitle,
  subtitleColor = "text-gray-500",
  icon,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-5 shadow-sm">
      <p className="text-xs sm:text-sm text-gray-500 font-medium mb-1 truncate">
        {title}
      </p>
      <p className="text-2xl sm:text-3xl font-bold text-[#C8922A] mb-1">
        {value}
      </p>
      <p className={`text-xs font-medium flex items-center gap-1 ${subtitleColor}`}>
        {icon && <span>{icon}</span>}
        <span className="truncate">{subtitle}</span>
      </p>
    </div>
  );
};

export default StatsSummary;