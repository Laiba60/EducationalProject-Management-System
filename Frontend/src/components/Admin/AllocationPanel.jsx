import React from "react";
import { Sparkles, AlertTriangle } from "lucide-react";

export default function AllocationPanel() {
  const totalFaculty = 42;
  const assigned = 120;
  const remaining = 34;
  const total = assigned + remaining;
  const progressPercent = Math.round((assigned / total) * 100);

  return (
    <div className="flex flex-col gap-4 w-full md:w-80 lg:w-96 shrink-0">
      {/* Allocation Status */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-base font-bold text-gray-800">Allocation Status</h3>
          {/* Decorative block */}
          <div className="w-10 h-10 rounded-lg bg-amber-100" />
        </div>

        <div className="flex items-center justify-between mt-4 mb-1">
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Total Faculty</span>
          <span className="text-2xl font-extrabold text-gray-900">{totalFaculty}</span>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 mb-2">
          <div className="w-full bg-gray-100 rounded-full h-2.5">
            <div
              className="bg-amber-600 h-2.5 rounded-full transition-all duration-700"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs mt-1">
          <span className="text-gray-500 font-medium">{assigned} Students Assigned</span>
          <span className="text-gray-400">{remaining} Remaining</span>
        </div>
      </div>

      {/* Smart Suggestions */}
      <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={16} className="text-amber-500" />
          <h3 className="text-sm font-bold text-gray-700">Smart Suggestions</h3>
        </div>

        {/* Suggestion 1 */}
        <div className="flex items-start gap-3 mb-4">
          <div className="mt-0.5 w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
            <Sparkles size={13} className="text-amber-600" />
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            System recommends{" "}
            <span className="font-semibold text-gray-800">Dr. Vesta</span> for Alexander based on their shared focus in{" "}
            <span className="font-medium">Neural Networks.</span>
          </p>
        </div>

        {/* Suggestion 2 */}
        <div className="flex items-start gap-3">
          <div className="mt-0.5 w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
            <AlertTriangle size={13} className="text-orange-500" />
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-800">Prof. Thorne</span> has reached maximum supervision capacity for this semester.
          </p>
        </div>
      </div>
    </div>
  );
}
