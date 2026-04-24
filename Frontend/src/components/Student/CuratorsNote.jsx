import React from "react";
export default function CuratorsNote() {
  return (
    <div className="bg-amber-700 rounded-2xl p-6 flex flex-col justify-between h-full">
      {/* Title */}
      <h3 className="text-white font-bold text-lg mb-3">Curator's Note</h3>

      {/* Quote */}
      <p className="text-amber-100 text-sm leading-relaxed italic mb-6">
        "Excellent progress on the Neural Architecture proposal. Consider
        expanding the 'Impact' section for a higher grade."
      </p>

      {/* Footer */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          OR
        </div>
        <div>
          <p className="text-white text-sm font-semibold">Office of Research</p>
          <p className="text-amber-300 text-[10px] uppercase tracking-widest">
            Administration
          </p>
        </div>
      </div>
    </div>
  );
}
