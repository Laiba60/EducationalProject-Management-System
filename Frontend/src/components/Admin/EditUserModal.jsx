import React, { useState } from "react";
import { updateUser } from "../../services/userService";

const EditUserModal = ({ user, onClose, onUpdated }) => {
  const [form, setForm] = useState({
    name:  user.name  || "",
    email: user.email || "",
    role:  user.role  || "Student",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 const handleSubmit = async () => {
  setLoading(true);
  setError("");
  try {
    // ✅ updateUser ka response capture karo
    const updatedUser = await updateUser(user._id, form);
    
    // ✅ updated user object pass karo
    onUpdated(updatedUser);
    onClose();
  } catch (err) {
    setError(err.response?.data?.message || "Update failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 space-y-4">

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-800">Edit User</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {error && (
          <p className="text-sm text-red-500 bg-red-50 px-3 py-2 rounded-lg">
            {error}
          </p>
        )}

        <div>
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full mt-1 px-4 py-2 border rounded-lg
                       focus:ring-2 focus:ring-[#C8922A] outline-none text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full mt-1 px-4 py-2 border rounded-lg
                       focus:ring-2 focus:ring-[#C8922A] outline-none text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Role</label>
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="w-full mt-1 px-4 py-2 border rounded-lg
                       focus:ring-2 focus:ring-[#C8922A] outline-none text-sm bg-white"
          >
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-200
                       text-gray-600 hover:bg-gray-50 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-[#C8922A] hover:bg-[#b07d22]
                       text-white text-sm font-semibold disabled:opacity-60"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default EditUserModal;