"use client";

import { useEffect, useState, useCallback } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ROUTES } from "@/utils/constants";
import { getUsers } from "@/services/user.service";
import UserTable from "@/components/table/UserTable";
import type { User } from "@/types/user";

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });

  const fetchUsers = useCallback(async (searchTerm: string, pageNum: number) => {
    setLoading(true);
    try {
      const res = await getUsers({ page: pageNum, limit: 10, keyword: searchTerm || undefined });
      const data = res.data as { data: { users: User[]; pagination: Pagination } };
      setUsers(data.data?.users ?? []);
      setPagination(data.data?.pagination ?? { page: 1, limit: 10, total: 0, totalPages: 0 });
    } catch {
      toast.error("Failed to load users");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers(search, page);
  }, [fetchUsers, search, page]);

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };


  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully");
    router.push(ROUTES.LOGIN);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="flex items-center justify-between border-b border-gray-800 px-8 py-4">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          {user && (
            <p className="text-sm text-gray-400">
              Welcome, {user.firstName} {user.lastName}
            </p>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="rounded bg-red-600 px-4 py-2 text-sm text-white transition hover:bg-red-700 cursor-pointer"
        >
          Logout
        </button>
      </header>

      <main className="mx-auto max-w-7xl px-8 py-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Users</h2>
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-72 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-indigo-500"
          />
        </div>
        <UserTable
          users={users}
          loading={loading}
          pagination={pagination}
          onPageChange={setPage}
        />
      </main>
    </div>
  );
}
