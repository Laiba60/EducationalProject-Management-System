import React from "react";
export const RecentSystemActions = ({ actions }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex-1">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-base">🔄</span>
        <h3 className="text-sm font-semibold text-gray-800">Recent System Actions</h3>
      </div>
      <ul className="space-y-4">
        {actions.map((action, index) => (
          <li key={index} className="flex gap-3">
            <span
              className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                action.type === "update" ? "bg-[#C8922A]" : "bg-gray-800"
              }`}
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">{action.title}</p>
              <p className="text-xs text-gray-500">{action.description}</p>
              <p className="text-xs text-gray-400 mt-0.5">{action.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const SecurityInsight = ({ percentage, message }) => {
  return (
    <div className="bg-gray-50 rounded-xl border border-gray-100 shadow-sm p-5 flex-1 flex flex-col items-center text-center justify-center gap-3">
      <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center text-xl">
        🛡️
      </div>
      <h3 className="text-sm font-bold text-gray-800">Security Insight</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{message}</p>
      <button className="text-xs text-[#C8922A] font-semibold hover:underline">
        Run Compliance Audit
      </button>
    </div>
  );
};
