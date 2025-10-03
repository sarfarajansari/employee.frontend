import EmployeeCard from "./employeeCard/employeeCard";
import AddEmployees from "../employeeForm/addEmployee";
import UpdateEmployeeForm from "../employeeForm/updateEmployee";
import { useEffect, useMemo, useState } from "react";
import type { Employee } from "../../models/employee.model";
import EmployeeView from "../employeeView/employeeView";
import Search from "./search/search";
import { EmployeeService } from "../../services/employeeService";
import VisibilityComponent from "../helper/visibilityComponent";
import { Button, Spin } from "antd";
import { Container } from "./employees.styled";

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [viewEmployeeId, setViewEmployeeId] = useState<number | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const [loadingEmployees, setLoadingEmployees] = useState(false);

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = async () => {
    setLoadingEmployees(true);
    const service = new EmployeeService();
    const emps = await service.getAllEmployees().catch(() => {
      alert("Failed to fetch employees");
      return [];
    });
    setEmployees([...emps]);
    setFilteredEmployees(emps);
    setLoadingEmployees(false);
  };

  const viewEmployee = useMemo(() => {
    return employees.find((emp) => emp.id === viewEmployeeId) || null;
  }, [viewEmployeeId, employees]);

  const onView = (employee: Employee) => {
    setAddOpen(false);
    setSelectedEmployee(null);
    setViewEmployeeId(employee.id);
  };

  const onEdit = (employee: Employee) => {
    setAddOpen(false);
    setSelectedEmployee(employee);
  };

  const onSearch = (value: string) => {
    const filtered = employees.filter((emp) =>
      emp.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredEmployees([...filtered]);
  };
  return (
    <Container>
      <Search handleSearch={onSearch} />
      <VisibilityComponent condition={loadingEmployees}>
        <div className="loading">
          <Spin />
        </div>
      </VisibilityComponent>

      <VisibilityComponent
        condition={
          !loadingEmployees &&
          !Boolean(filteredEmployees.length) &&
          !Boolean(employees.length)
        }
      >
        <div className="infoDiv" role="status" aria-live="polite">
          <div className="infoText">
            <h3>No employees yet</h3>
            <p>
              There are no employees in the system. Start by adding a new
              employee to populate the list.
            </p>
            <Button
              onClick={() => setAddOpen(true)}
              variant="outlined"
              type="primary"
            >
              Add Employee
            </Button>
          </div>
        </div>
      </VisibilityComponent>
      <VisibilityComponent
        condition={
          !loadingEmployees &&
          !Boolean(filteredEmployees.length) &&
          Boolean(employees.length)
        }
      >
        <div className="infoDiv" role="status" aria-live="polite">
          <div className="infoText">
            <h3>No result found</h3>
            <p>
              There are no employees matching your search criteria. Try
              adjusting your search.
            </p>
          </div>
        </div>
      </VisibilityComponent>

      <VisibilityComponent
        condition={!loadingEmployees && Boolean(filteredEmployees.length)}
      >
        <div className="list-container">
          {filteredEmployees.map((employee, index) => (
            <EmployeeCard
              key={index}
              employee={employee}
              onEdit={onEdit}
              onView={onView}
            />
          ))}
        </div>
      </VisibilityComponent>

      <AddEmployees
        isOpen={addOpen}
        setIsOpen={setAddOpen}
        refreshList={refreshList}
      />
      <UpdateEmployeeForm
        employee={selectedEmployee}
        setEmployee={setSelectedEmployee}
        refreshList={refreshList}
      />
      <EmployeeView
        employee={viewEmployee}
        onClose={() => setViewEmployeeId(null)}
        onEdit={setSelectedEmployee}
        refreshList={refreshList}
      />
    </Container>
  );
};

export default Employees;
