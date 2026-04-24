import React from "react";

export default function ProjectHero() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 relative overflow-hidden">
      {/* Graduation Cap Icon — top right */}
      <div className="absolute top-6 right-8 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
        </svg>
      </div>

      {/* Badge */}
      <div className="inline-block mb-4">
        <span className="text-[10px] font-bold text-amber-600 border border-amber-300 px-3 py-1 rounded-full tracking-widest uppercase">
          Undergraduate Thesis 2024
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-4 max-w-lg">
        Neural Architectures for Semantic Document Analysis in Legal Tech
      </h1>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed max-w-lg mb-8">
        A comprehensive study on utilizing transformer models for extracting
        entity relationships within multi-page contractual documents.
      </p>

      {/* Student + Date Info */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Student */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-5 py-3 flex-1">
          <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
              Student Applicant
            </p>
            <p className="text-sm font-bold text-gray-900">Julianne Sterling</p>
          </div>
        </div>

        {/* Submission Date */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-5 py-3 flex-1">
          <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
              Submission Date
            </p>
            <p className="text-sm font-bold text-gray-900">October 12, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
