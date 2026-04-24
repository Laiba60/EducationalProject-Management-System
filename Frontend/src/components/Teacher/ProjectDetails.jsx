import React from "react";

const resources = [
  {
    id: 1,
    name: "NVIDIA A100 (Cloud)",
    dot: "bg-green-400",
  },
  {
    id: 2,
    name: "LexisNexis API",
    dot: "bg-amber-400",
  },
  {
    id: 3,
    name: "Secure Sandbox",
    dot: "bg-gray-400",
    icon: true,
  },
];

export default function ProjectDetails() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 mt-5">
      {/* ── Left: Abstract & Methodology ── */}
      <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 bg-amber-500 rounded-sm flex-shrink-0" />
          <h3 className="text-base font-bold text-gray-900">
            Abstract & Methodology
          </h3>
        </div>

        {/* Body */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          The proposed research focuses on the limitations of current BERT-based
          models when handling cross-document coreference resolution. By
          implementing a Longformer architecture, the student intends to process
          document clusters of up to 4096 tokens without truncation.
        </p>

        <p className="text-sm font-semibold text-gray-700 mb-2">
          Methodology includes:
        </p>

        <ul className="flex flex-col gap-1.5">
          {[
            "Dataset curation from OpenLegal Benchmarks",
            "Fine-tuning RoBERTa-large as a baseline",
            "Comparative analysis of attention mechanisms",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Right: Resources + Supervisor ── */}
      <div className="w-full lg:w-56 flex flex-col gap-4">
        {/* Required Resources */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
            Required Resources
          </p>
          <div className="flex flex-col gap-2.5">
            {resources.map((r) => (
              <div key={r.id} className="flex items-center gap-2.5">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${r.dot}`} />
                <span className="text-sm text-gray-700 font-medium">
                  {r.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Supervisor Capacity */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-3">
            Supervisor Capacity
          </p>
          <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
            <div
              className="bg-amber-500 h-2 rounded-full"
              style={{ width: "80%" }}
            />
          </div>
          <p className="text-xs text-gray-400 font-medium">8/10 Slots Filled</p>
        </div>
      </div>
    </div>
  );
}
