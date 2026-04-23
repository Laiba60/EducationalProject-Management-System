import React from "react";
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
const values = [28, 35, 52, 40, 30, 38];
const maxValue = Math.max(...values);

export default function SubmissionsChart() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Project Submissions Growth</h3>
        <div className="flex gap-2 text-xs">
          <button className="text-[#b8860b] font-semibold border-b border-[#b8860b]">Monthly</button>
          <button className="text-gray-400 hover:text-gray-600">Weekly</button>
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-end gap-3 h-36">
        {months.map((month, i) => {
          const heightPct = (values[i] / maxValue) * 100;
          const isHighlighted = i === 2; // MAR
          return (
            <div key={month} className="flex-1 flex flex-col items-center gap-1">
              {isHighlighted && (
                <span className="text-[10px] text-gray-500 font-medium">{values[i]}</span>
              )}
              <div className="w-full flex flex-col justify-end" style={{ height: "120px" }}>
                <div
                  className={`w-full rounded-sm transition-all ${
                    isHighlighted ? "bg-[#d4a017]" : "bg-gray-200"
                  }`}
                  style={{ height: `${heightPct}%` }}
                />
              </div>
              <span className="text-[10px] text-gray-400">{month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
