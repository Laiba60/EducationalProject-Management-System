// components/Teacher/ReviewerActionPanel.jsx
import React from "react";
import { useState } from "react";

const documents = [
  { id: 1, name: "Research_Plan.pdf", icon: "📄" },
  { id: 2, name: "Lit_Review_Draft.pdf", icon: "📄" },
];

export default function ReviewerActionPanel() {
  const [feedback, setFeedback] = useState("");

  return (
    <div className="flex flex-col gap-5">
      {/* ── Reviewer Action Card ── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h3 className="text-base font-bold text-gray-900 mb-4">
          Reviewer Action
        </h3>

        {/* Feedback Label */}
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
          Feedback & Notes
        </p>

        {/* Textarea */}
        <textarea
          rows={5}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Provide constructive criticism or required clarifications for the student..."
          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none mb-4"
        />

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5">
          {/* Approve */}
          <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Approve Project
          </button>

          {/* Request Changes */}
          <button className="w-full flex items-center justify-center gap-2 border border-amber-400 text-amber-600 hover:bg-amber-50 font-semibold text-sm py-2.5 rounded-xl transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Request Changes
          </button>

          {/* Reject */}
          <button className="w-full flex items-center justify-center gap-2 border border-red-200 text-red-500 hover:bg-red-50 font-semibold text-sm py-2.5 rounded-xl transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Reject Proposal
          </button>
        </div>
      </div>

      {/* ── Supportive Documents ── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
          Supportive Documents
        </p>
        <div className="flex flex-col gap-2.5">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                  📄
                </div>
                <span className="text-xs font-semibold text-gray-700">
                  {doc.name}
                </span>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
