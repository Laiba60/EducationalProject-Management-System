import React from "react";
import { Monitor, X, Plus, ChevronDown } from "lucide-react";
import { useState } from "react";

const defaultTags = ["REACT", "POSTGRESQL", "DOCKER"];

export default function TechnologyStack() {
  const [tags, setTags] = useState(defaultTags);
  const [framework, setFramework] = useState("");

  const removeTag = (tag) => setTags(tags.filter((t) => t !== tag));

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">Technology Stack</h3>
        <Monitor size={16} className="text-gray-400" />
      </div>

      {/* Framework dropdown */}
      <div className="relative mb-4">
        <select
          value={framework}
          onChange={(e) => setFramework(e.target.value)}
          className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 pr-8"
        >
          <option value="">Select Primary Framework</option>
          <option value="react">React</option>
          <option value="vue">Vue.js</option>
          <option value="angular">Angular</option>
          <option value="next">Next.js</option>
          <option value="django">Django</option>
        </select>
        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1.5 bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full"
          >
            {tag}
            <button onClick={() => removeTag(tag)} className="hover:text-red-500 transition-colors">
              <X size={11} />
            </button>
          </span>
        ))}
      </div>

      {/* Add tool */}
      <button className="w-full border-2 border-dashed border-gray-200 hover:border-amber-400 text-gray-400 hover:text-amber-500 text-sm py-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors">
        <Plus size={14} />
        Add Additional Tool
      </button>
    </div>
  );
}
