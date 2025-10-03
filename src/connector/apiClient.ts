import axios from "axios";

export const apiClient = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || "http://localhost:8000/api/employees",
  headers: {
    "Content-Type": "application/json",
  },
});
