import React from "react";

export default function SubmissionTimeline() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-5">
        Submission Timeline
      </h3>

      <div className="flex items-center gap-0">
        {/* Days Left */}
        <div className="flex-1 pr-6">
          <p className="text-4xl font-bold text-amber-500 leading-none mb-1">
            12
          </p>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
            Days Left
          </p>
          <p className="text-sm font-medium text-gray-700 mt-1">
            Interim Report
          </p>
        </div>

        {/* Divider */}
        <div className="w-px h-14 bg-gray-200 mx-4" />

        {/* Upcoming */}
        <div className="flex-1 pl-4">
          <p className="text-4xl font-bold text-gray-800 leading-none mb-1">
            04
          </p>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
            Upcoming
          </p>
          <p className="text-sm font-medium text-gray-700 mt-1">
            Viva Voce Prep
          </p>
        </div>
      </div>
    </div>
  );
}
