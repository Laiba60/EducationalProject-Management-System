import React from "react";
import { useState } from "react";
import { ChevronDown, User, GraduationCap, Circle } from "lucide-react";

const students = [
  { id: "S001", name: "James Madison" },
  { id: "S002", name: "Maria Reynolds" },
  { id: "S003", name: "Thomas Jefferson" },
  { id: "S004", name: "Alexander Hamilton" },
];

const teachers = [
  { id: "T001", name: "Dr. Sarah Jenkins", quota: "3/5" },
  { id: "T002", name: "Dr. Vesta", quota: "4/5" },
  { id: "T003", name: "Prof. Robert Thorne", quota: "5/5" },
  { id: "T004", name: "Dr. Kevin Page", quota: "2/5" },
];

export default function AssignForm() {
  const [studentOpen, setStudentOpen] = useState(false);
  const [teacherOpen, setTeacherOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [assigned, setAssigned] = useState(false);

  const handleAssign = () => {
    if (selectedStudent && selectedTeacher) {
      setAssigned(true);
      setTimeout(() => setAssigned(false), 2500);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex-1 min-w-0">
      {/* SELECT STUDENT */}
      <div className="mb-6">
        <label className="block text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
          Select Student
        </label>
        <div className="relative">
          <button
            onClick={() => { setStudentOpen(!studentOpen); setTeacherOpen(false); }}
            className="w-full flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 hover:border-amber-400 transition-colors focus:outline-none"
          >
            <span className="flex items-center gap-2 text-gray-500">
              <User size={16} className="text-gray-400" />
              <span className={selectedStudent ? "text-gray-800 font-medium" : "text-gray-400"}>
                {selectedStudent ? `${selectedStudent.name} (${selectedStudent.id})` : "Search by ID or Name"}
              </span>
            </span>
            <ChevronDown size={16} className={`text-gray-400 transition-transform ${studentOpen ? "rotate-180" : ""}`} />
          </button>
          {studentOpen && (
            <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
              {students.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setSelectedStudent(s); setStudentOpen(false); }}
                  className="w-full text-left px-4 py-3 hover:bg-amber-50 text-sm text-gray-700 flex items-center gap-2 transition-colors"
                >
                  <User size={14} className="text-amber-500" />
                  {s.name} <span className="text-gray-400 text-xs">({s.id})</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* SELECT TEACHER */}
      <div className="mb-6">
        <label className="block text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
          Select Teacher
        </label>
        <div className="relative">
          <button
            onClick={() => { setTeacherOpen(!teacherOpen); setStudentOpen(false); }}
            className="w-full flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 hover:border-amber-400 transition-colors focus:outline-none"
          >
            <span className="flex items-center gap-2">
              <GraduationCap size={16} className="text-gray-400" />
              <span className={selectedTeacher ? "text-gray-800 font-medium" : "text-gray-400"}>
                {selectedTeacher ? selectedTeacher.name : "Search Faculty Specialist"}
              </span>
            </span>
            <ChevronDown size={16} className={`text-gray-400 transition-transform ${teacherOpen ? "rotate-180" : ""}`} />
          </button>
          {teacherOpen && (
            <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
              {teachers.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setSelectedTeacher(t); setTeacherOpen(false); }}
                  className="w-full text-left px-4 py-3 hover:bg-amber-50 text-sm text-gray-700 flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap size={14} className="text-amber-500" />
                    {t.name}
                  </span>
                  <span className="text-xs text-gray-400">Quota: {t.quota}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* QUOTA INFO */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Circle size={10} className="text-amber-400 fill-amber-400" />
          <span>
            {selectedTeacher
              ? `QUOTA: ${selectedTeacher.name.toUpperCase()} (${selectedTeacher.quota})`
              : "QUOTA: DR. VESTA (4/5)"}
          </span>
        </div>
      </div>

      {/* ASSIGN BUTTON */}
      <button
        onClick={handleAssign}
        disabled={!selectedStudent || !selectedTeacher}
        className={`w-full py-3.5 rounded-xl font-semibold text-white text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200
          ${selectedStudent && selectedTeacher
            ? "bg-amber-700 hover:bg-amber-800 shadow-md hover:shadow-lg active:scale-95"
            : "bg-amber-300 cursor-not-allowed"
          }`}
      >
        {assigned ? (
          <span className="flex items-center gap-2">✓ Supervisor Assigned!</span>
        ) : (
          <span className="flex items-center gap-2">
            Assign Supervisor <span>→</span>
          </span>
        )}
      </button>

      {assigned && (
        <p className="text-center text-xs text-green-600 mt-3 font-medium animate-pulse">
          Successfully paired {selectedStudent?.name} with {selectedTeacher?.name}
        </p>
      )}
    </div>
  );
}
