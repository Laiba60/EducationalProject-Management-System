import React from "react";
import { Mail } from "lucide-react";

export default function SuggestedSupervisor() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-3">
        Suggested Supervisor
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm overflow-hidden border border-blue-200">
            KV
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">Dr. Katherine Vance</p>
            <p className="text-xs text-gray-400">Expert in Distributed Systems</p>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-amber-50 text-gray-400 hover:text-amber-500 transition-colors border border-gray-200 hover:border-amber-300">
          <Mail size={15} />
        </button>
      </div>
    </div>
  );
}
