import { useCallback, useMemo } from "react";
import EmployeeForm from "./formComponent/employeeForm";
import type { Employee } from "../../models/employee.model";
import { EmployeeService } from "../../services/employeeService";

const UpdateEmployeeForm = ({
  employee,
  setEmployee,
  refreshList,
}: {
  employee: Employee | null;
  setEmployee: (employee: Employee | null) => void;
  refreshList: () => Promise<void>;
}) => {
  const isOpen = useMemo(() => Boolean(employee), [employee]);
  const onCancel = useCallback(() => {
    setEmployee(null);
  }, [setEmployee]);

  const handleSubmit = async (employeeData: Employee) => {
    const service = new EmployeeService();

    await service.updateEmployee(employeeData.id!, employeeData);
    await refreshList();
  };

  return (
    <EmployeeForm
      open={isOpen}
      onCancel={onCancel}
      employeeData={employee}
      handleSubmit={handleSubmit}
    />
  );
};

export default UpdateEmployeeForm;
