import { apiClient } from "../connector/apiClient";
import type { Employee } from "../models/employee.model";

export class EmployeeService {
  async createEmployee(employeeData: Partial<Employee>): Promise<Employee> {
    const response = await apiClient.post("/", employeeData);
    return response.data as Employee;
  }
  async updateEmployee(
    id: number,
    employeeData: Partial<Employee>
  ): Promise<Employee> {
    const response = await apiClient.put(`/${id}`, employeeData);
    return response.data as Employee;
  }
  async deleteEmployee(id: number): Promise<void> {
    await apiClient.delete(`/${id}`);
  }
  async getEmployee(id: number): Promise<Employee> {
    const response = await apiClient.get(`/${id}`);
    return response.data as Employee;
  }
  async getAllEmployees(): Promise<Employee[]> {
    const response = await apiClient.get("/");
    return response.data as Employee[];
  }
}
