import React from "react";
import { useRef, useState } from "react";
import { Upload } from "lucide-react";

export default function UploadSection() {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    console.log("Dropped files:", files);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition-all duration-200 ${
        dragging
          ? "border-amber-500 bg-amber-50"
          : "border-gray-300 bg-white"
      }`}
    >
      {/* Upload Icon Box */}
      <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
        <Upload className="text-amber-600 w-6 h-6" />
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mb-1">
        Drag and drop files here
      </h2>
      <p className="text-sm text-gray-500 mb-5 max-w-xs">
        Support for PDF, DOCX, and ZIP files up to 50MB. Ensure files are named
        according to curator guidelines.
      </p>

      <button
        onClick={() => inputRef.current.click()}
        className="flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z"
          />
        </svg>
        Browse Files
      </button>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.docx,.zip"
        className="hidden"
        onChange={(e) => console.log("Selected:", e.target.files)}
      />
    </div>
  );
}
