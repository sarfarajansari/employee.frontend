import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import EmployeeForm from "./formComponent/employeeForm";
import { EmployeeService } from "../../services/employeeService";
import type { Employee } from "../../models/employee.model";
import { Button } from "antd";

const AddEmployees = ({
  isOpen,
  setIsOpen,
  refreshList,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  refreshList: () => Promise<void>;
}) => {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTarget(document.getElementById("action-area"));
  }, []);
  const onCancel = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (employeeData: Employee) => {
    const service = new EmployeeService();
    await service.createEmployee(employeeData);
    await refreshList();
  };
  if (!target) return null;
  return ReactDOM.createPortal(
    <div>
      <Button type="primary" onClick={() => setIsOpen(true)}>
        Add Employee
      </Button>
      <EmployeeForm
        open={isOpen}
        onCancel={onCancel}
        handleSubmit={handleSubmit}
      />
    </div>,
    target as HTMLElement
  );
};

export default AddEmployees;
