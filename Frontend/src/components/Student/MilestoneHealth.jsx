 import React from "react";
 export default function MilestoneHealth() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm mt-4">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
        Milestone Health
      </p>

      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-1.5">
        <p className="text-xs font-semibold text-gray-600">Overall Progress</p>
        <p className="text-xs font-bold text-amber-600">65%</p>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 mb-5 overflow-hidden">
        <div className="bg-amber-500 h-2 rounded-full" style={{ width: "65%" }} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-gray-900">08</p>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mt-0.5">
            Updates
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-gray-900">02</p>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mt-0.5">
            Pending
          </p>
        </div>
      </div>
    </div>
  );
}
