import React from "react";

export function TopDepartment() {
  return (
    <div className="bg-[#1e1e1e] text-white rounded-xl p-5 flex flex-col justify-between min-h-[160px]">
      <div>
        <h3 className="text-sm font-bold text-[#d4a017]">Top Department</h3>
        <p className="text-xs text-gray-400 mt-1 leading-snug">
          Engineering Faculty leads with the highest proposal acceptance rate.
        </p>
      </div>
      <div className="mt-4">
        <p className="text-4xl sm:text-5xl font-extrabold text-white">92%</p>
        <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-0.5">
          Efficiency Index
        </p>
      </div>
    </div>
  );
}

export function RefineCurator() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[160px]">
      <div>
        <h3 className="text-sm font-bold text-gray-800">Refine the Curator</h3>
        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
          The current curation cycle is 80% complete. Adjust the allocation
          algorithms or review pending exceptions before the final deadline on Friday.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
        <button className="text-xs font-semibold text-gray-700 border border-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">
          Review Exceptions
        </button>
        <button className="text-xs font-semibold text-[#b8860b] hover:underline">
          Algorithm Settings →
        </button>
      </div>
    </div>
  );
}

export function TerminalWidget() {
  return (
    <div className="bg-[#111] rounded-xl overflow-hidden border border-gray-700 min-h-[160px]">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#2a2a2a] border-b border-gray-700">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="text-[10px] text-gray-400 ml-2">System Terminal</span>
      </div>
      <div className="p-3 font-mono text-[10px] text-green-400 leading-relaxed">
        <p>$ curator --run audit</p>
        <p className="text-gray-500">Scanning departments...</p>
        <p>✓ CS Dept: 34 projects</p>
        <p>✓ EE Dept: 28 projects</p>
        <p className="text-yellow-400">⚠ Quota alert: 2 teachers</p>
        <p className="animate-pulse">$ _</p>
      </div>
    </div>
  );
}