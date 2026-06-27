"use client";

import type { User } from "@/types/user";

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface UserTableProps {
  users: User[];
  loading: boolean;
  pagination: Pagination;
  onPageChange: (page: number) => void;
}

export default function UserTable({ users, loading, pagination, onPageChange }: UserTableProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
      </div>
    );
  }

  const { page, totalPages, total } = pagination;

  return (
    <div className="rounded-lg border border-gray-700">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700 text-sm">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-300">Sr. No.</th>
              <th className="px-4 py-3 text-left font-medium text-gray-300">Picture</th>
              <th className="px-4 py-3 text-left font-medium text-gray-300">Name</th>
                <th className="px-4 py-3 text-left font-medium text-gray-300">Gender</th>
              <th className="px-4 py-3 text-left font-medium text-gray-300">Email</th>
              <th className="px-4 py-3 text-left font-medium text-gray-300">Phone</th>
              <th className="px-4 py-3 text-left font-medium text-gray-300">City</th>
              {/* <th className="px-4 py-3 text-left font-medium text-gray-300">State</th> */}
              <th className="px-4 py-3 text-left font-medium text-gray-300">Country</th>
            
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 bg-gray-900">
            {users.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-4 py-8 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={user._id} className="transition hover:bg-gray-800">
                  <td className="whitespace-nowrap px-4 py-3 text-gray-400">{(page - 1) * pagination.limit + index + 1}</td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {user.picture ? (
                      <img
                        src={user.picture}
                        alt={`${user.firstName} ${user.lastName}`}
                        className="h-10 w-10 rounded-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=6366f1&color=fff`;
                        }}
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">
                        {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                      </div>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-white">{user.firstName} {user.lastName}</td>
                   <td className="whitespace-nowrap px-4 py-3 text-gray-300">{user.gender}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-300">{user.email}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-300">{user.phone}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-300">{user.city}</td>
                  {/* <td className="whitespace-nowrap px-4 py-3 text-gray-300">{user.state}</td> */}
                  <td className="whitespace-nowrap px-4 py-3 text-gray-300">{user.country}</td>
                 
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-gray-700 px-4 py-3">
          <p className="text-sm text-gray-400">
            Showing page {page} of {totalPages} ({total} total users)
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onPageChange(page - 1)}
              disabled={page <= 1}
              className="cursor-pointer rounded bg-gray-800 px-3 py-1.5 text-sm text-gray-300 transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => onPageChange(p)}
                className={`cursor-pointer rounded px-3 py-1.5 text-sm transition ${
                  p === page
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => onPageChange(page + 1)}
              disabled={page >= totalPages}
              className="cursor-pointer rounded bg-gray-800 px-3 py-1.5 text-sm text-gray-300 transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
