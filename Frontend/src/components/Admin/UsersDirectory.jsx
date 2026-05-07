import React, { useState, useEffect } from "react";
import { deleteUser } from "../../services/userService";
import EditUserModal from "./EditUserModal";

const roleBadgeStyles = {
  "Admin":    "bg-blue-100 text-blue-700 border border-blue-300",
  "Teacher":  "bg-yellow-100 text-yellow-700 border border-yellow-300",
  "Student":  "bg-green-100 text-green-700 border border-green-300",
};

// ── Desktop Row ──────────────────────────────────
const UserRow = ({ user, onEdit, onDelete }) => (
  <tr className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
    <td className="py-3 px-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#C8922A] flex items-center justify-center
                        text-white font-bold text-sm flex-shrink-0">
          {user.name?.charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-800 truncate">{user.name}</p>
          <p className="text-xs text-gray-400">
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </td>
    <td className="py-3 px-4">
      <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full
                        tracking-wide whitespace-nowrap
                        ${roleBadgeStyles[user.role] || "bg-gray-100 text-gray-500"}`}>
        {user.role}
      </span>
    </td>
    <td className="py-3 px-4 text-sm text-gray-500 truncate max-w-[160px]">
      {user.email}
    </td>
    <td className="py-3 px-4">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onEdit(user)}
          className="text-gray-400 hover:text-[#C8922A] transition-colors"
          title="Edit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0
                 112.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2
                 2 0 01.586-1.414z" />
          </svg>
        </button>
        <button
          onClick={() => onDelete(user._id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
          title="Delete"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0
                 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0a1 1 0
                 00-1-1h-4a1 1 0 00-1 1H5" />
          </svg>
        </button>
      </div>
    </td>
  </tr>
);

// ── Mobile Card ──────────────────────────────────
const UserCard = ({ user, onEdit, onDelete }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 space-y-3">
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 rounded-full bg-[#C8922A] flex items-center
                        justify-center text-white font-bold flex-shrink-0">
          {user.name?.charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-800 truncate">{user.name}</p>
          <p className="text-xs text-gray-400">
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full
                        tracking-wide flex-shrink-0
                        ${roleBadgeStyles[user.role] || "bg-gray-100 text-gray-500"}`}>
        {user.role}
      </span>
    </div>

    <p className="text-xs text-gray-500 truncate">{user.email}</p>

    <div className="flex justify-end gap-2">
      <button
        onClick={() => onEdit(user)}
        className="text-gray-400 hover:text-[#C8922A] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0
               112.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2
               2 0 01.586-1.414z" />
        </svg>
      </button>
      <button
        onClick={() => onDelete(user._id)}
        className="text-gray-400 hover:text-red-500 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0
               01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0a1 1 0
               00-1-1h-4a1 1 0 00-1 1H5" />
        </svg>
      </button>
    </div>
  </div>
);

// ── Main Component ───────────────────────────────
const UsersDirectory = ({ users, onRefresh }) => {
  const [filterRole, setFilterRole]   = useState("All Roles");
  const [editingUser, setEditingUser] = useState(null);

  // ✅ FIX 1: Safe initial value
  const [localUsers, setLocalUsers]   = useState(users || []);

  // ✅ FIX 2: Prop change hone par localUsers sync karo
  useEffect(() => {
    if (users && Array.isArray(users)) {
      setLocalUsers(users);
    }
  }, [users]);

  const roles = ["All Roles", "Admin", "Teacher", "Student"];

  // ✅ FIX 3: undefined items ko filter karo
  const filtered = filterRole === "All Roles"
    ? localUsers.filter(Boolean)
    : localUsers.filter((u) => u && u.role === filterRole);

  const handleDelete = async (id) => {
    if (!window.confirm("Is user ko delete karna chahte hain?")) return;
    try {
      await deleteUser(id);
      setLocalUsers((prev) => prev.filter((u) => u._id !== id));
    } catch (err) {
      alert("Delete failed: " + (err.response?.data?.message || err.message));
    }
  };

  const handleUpdated = (updatedUser) => {
    setLocalUsers((prev) =>
      prev.map((u) => (u._id === updatedUser._id ? updatedUser : u))
    );
  };

  return (
    <>
      {editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onUpdated={handleUpdated}
        />
      )}

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between
                        px-4 sm:px-5 py-4 border-b border-gray-100 gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-sm font-semibold text-gray-800">
              Curated Directory
            </h2>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="text-xs text-gray-500 border border-gray-200 rounded-full
                         px-3 py-1 hover:bg-gray-50 outline-none bg-white"
            >
              {roles.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <span className="text-xs text-gray-400">
            Total: {localUsers.length} users
          </span>
        </div>

        {/* Desktop Table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-left min-w-[500px]">
            <thead>
              <tr className="text-xs text-gray-400 uppercase tracking-wider bg-gray-50">
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Role</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={4}
                    className="text-center text-gray-400 text-sm py-8">
                    No users found.
                  </td>
                </tr>
              ) : (
                filtered.map((user) => (
                  <UserRow
                    key={user._id}
                    user={user}
                    onEdit={setEditingUser}
                    onDelete={handleDelete}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden p-3 space-y-3">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 text-sm py-6">
              No users found.
            </p>
          ) : (
            filtered.map((user) => (
              <UserCard
                key={user._id}
                user={user}
                onEdit={setEditingUser}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-5 py-3 border-t border-gray-100">
          <span className="text-xs text-gray-500">
            Showing {filtered.length} of {localUsers.length} users
          </span>
        </div>

      </div>
    </>
  );
};

export default UsersDirectory;