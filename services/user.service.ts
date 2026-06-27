import axios from "@/config/axios";

interface GetUsersParams {
  page?: number;
  limit?: number;
  keyword?: string;
}

export const getUsers = (params?: GetUsersParams) =>
  axios.get("/users", { params });