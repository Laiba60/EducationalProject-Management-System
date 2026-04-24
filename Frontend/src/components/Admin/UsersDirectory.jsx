const roleBadgeStyles = {
  "LEAD FACULTY": "bg-yellow-100 text-yellow-700 border border-yellow-300",
  RESEARCHER: "bg-gray-100 text-gray-600 border border-gray-300",
  ADMINISTRATOR: "bg-blue-100 text-blue-700 border border-blue-300",
  STUDENT: "bg-green-100 text-green-700 border border-green-300",
};

const UserRow = ({ avatar, name, joined, role, email, department }) => {
  return (
    <tr className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
      <td className="py-3 px-4">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={name}
            className="w-9 h-9 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">{name}</p>
            <p className="text-xs text-gray-400">{joined}</p>
          </div>
        </div>
      </td>
      <td className="py-3 px-4">
        <span
          className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full tracking-wide ${
            roleBadgeStyles[role] || "bg-gray-100 text-gray-500"
          }`}
        >
          {role}
        </span>
      </td>
      <td className="py-3 px-4 text-sm text-gray-500">{email}</td>
      <td className="py-3 px-4 text-sm text-gray-600">{department}</td>
      <td className="py-3 px-4">
        <button className="text-gray-400 hover:text-[#C8922A] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z" />
          </svg>
        </button>
      </td>
    </tr>
  );
};

const UserTable = ({ users }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Table Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-semibold text-gray-800">Curated Directory</h2>
          <button className="flex items-center gap-1 text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-50 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
            </svg>
            Filter: All Roles
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01" />
            </svg>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-xs text-gray-400 uppercase tracking-wider bg-gray-50">
              <th className="px-4 py-3 font-medium">Name & Profile</th>
              <th className="px-4 py-3 font-medium">Role</th>
              <th className="px-4 py-3 font-medium">Email Address</th>
              <th className="px-4 py-3 font-medium">Department</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow key={index} {...user} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 text-sm text-gray-500">
        <span>Showing 4 of 1,284 entries</span>
        <div className="flex items-center gap-1">
          <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-7 h-7 rounded text-xs font-medium transition ${
                page === 1
                  ? "bg-[#C8922A] text-white"
                  : "hover:bg-gray-100 text-gray-500"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
