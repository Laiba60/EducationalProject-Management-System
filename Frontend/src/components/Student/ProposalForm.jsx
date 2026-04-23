import React from "react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ProposalForm() {
  const [title, setTitle] = useState("");
  const [objectives, setObjectives] = useState("");

  const handleSaveDraft = () => alert("Draft saved!");
  const handleSubmit = () => alert("Proposal submitted!");

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      {/* Thesis Title */}
      <div className="mb-5">
        <label className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">
          Thesis Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Distributed Neural Architecture for Edge Devices"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition"
        />
      </div>

      {/* Objectives */}
      <div className="mb-6">
        <label className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">
          Detailed Research Objectives
        </label>
        <textarea
          rows={6}
          value={objectives}
          onChange={(e) => setObjectives(e.target.value)}
          placeholder="Describe the core problem, methodology, and expected outcomes..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400/50 resize-none transition"
        />
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={handleSaveDraft}
          className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Save Draft
        </button>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white text-sm font-semibold transition-colors"
        >
          Submit Proposal
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
