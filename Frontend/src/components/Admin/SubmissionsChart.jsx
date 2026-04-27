import React, { useState } from "react";

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
const values = [28, 35, 52, 40, 30, 38];
const maxValue = Math.max(...values);

export default function SubmissionsChart() {
  const [view, setView] = useState("Monthly");

  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">
          Project Submissions Growth
        </h3>
        <div className="flex gap-2 text-xs">
          {["Monthly", "Weekly"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`font-semibold transition-colors ${
                view === v
                  ? "text-[#b8860b] border-b border-[#b8860b]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-end gap-2 sm:gap-3 h-32 sm:h-36">
        {months.map((month, i) => {
          const heightPct = (values[i] / maxValue) * 100;
          const isHighlighted = i === 2;
          return (
            <div key={month} className="flex-1 flex flex-col items-center gap-1">
              <span
                className={`text-[10px] font-medium ${
                  isHighlighted ? "text-gray-500" : "text-transparent"
                }`}
              >
                {values[i]}
              </span>
              <div className="w-full flex flex-col justify-end" style={{ height: "110px" }}>
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