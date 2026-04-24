 import React, { useState } from "react";
 const weekOptions = [
  "Week 1", "Week 2", "Week 3", "Week 4",
  "Week 5", "Week 6", "Week 7", "Week 8",
];
 export default function PostWeeklyUpdate() {
  const [selectedWeek, setSelectedWeek] = useState("Week 8");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h2 className="text-base font-bold text-gray-900">Post Weekly Update</h2>
      </div>

      {/* Week Number */}
      <div className="mb-4">
        <label className="text-xs font-semibold text-gray-500 block mb-1.5">
          Week Number
        </label>
        <div className="relative">
          <select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent cursor-pointer"
          >
            {weekOptions.map((w) => (
              <option key={w} value={w}>{w}</option>
            ))}
          </select>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Progress Summary */}
      <div className="mb-4">
        <label className="text-xs font-semibold text-gray-500 block mb-1.5">
          Progress Summary
        </label>
        <input
          type="text"
          placeholder="e.g. Methodology & Framework"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
        />
      </div>

      {/* Detailed Description */}
      <div className="mb-5">
        <label className="text-xs font-semibold text-gray-500 block mb-1.5">
          Detailed Description
        </label>
        <textarea
          placeholder="Describe the tasks completed and challenges faced..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none"
        />
      </div>

      {/* Submit Button */}
      <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors duration-200">
        Submit Update
      </button>
    </div>
  );
}