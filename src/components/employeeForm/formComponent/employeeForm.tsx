import ReactDOM from "react-dom";
import { Modal, ModalHeader } from "../../helper/Modal";
import { Button, Input, Select } from "antd";

import {
  employeeDepartments,
  employeePositions,
  employeeStatuses,
} from "../../../models/employeeOptions";
import {
  ActionContainer,
  Container,
  ErrorContainer,
  Label,
} from "./employeeForm.styled";
import type { Employee } from "../../../models/employee.model";
import { useEffect, useState } from "react";

const EmployeeForm = ({
  open,
  onCancel,
  employeeData = null,
  handleSubmit,
}: {
  open: boolean;
  onCancel: () => void;
  employeeData?: Employee | null;
  handleSubmit: (employeeData: Employee) => Promise<void>;
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldStatuses, setFieldStatuses] = useState<{
    [key: string]: "" | "error" | "warning";
  }>({
    name: "",
    email_address: "",
    position: "",
    department: "",
    status: "",
  });

  const [form, setForm] = useState<Employee>({
    name: "",
    email_address: "",
    position: "",
    department: "",
    status: "",
  } as Employee);

  useEffect(() => {
    if (employeeData) {
      setForm({ ...employeeData });
      setFieldStatuses({
        name: "",
        email_address: "",
        position: "",
        department: "",
        status: "",
      });
    }
  }, [employeeData]);

  const handleValueChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (value.trim() === "") {
      setFieldStatuses((prev) => ({ ...prev, [field]: "error" }));
    } else {
      setFieldStatuses((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleValueChange(name, value);
  };

  const validate = () => {
    Object.entries(form).forEach(([key, value]) => {
      if (key === "id") return;
      if (value.trim() === "") {
        setFieldStatuses((prev) => ({ ...prev, [key]: "error" }));
        throw new Error(`${key} is required`);
      }
    });
  };

  const clearForm = () => {
    setForm({
      name: "",
      email_address: "",
      position: "",
      department: "",
      status: "",
    } as Employee);
    setFieldStatuses({
      name: "",
      email_address: "",
      position: "",
      department: "",
      status: "",
    });
    setErrorMessage(null);
  };

  const onSubmit = async () => {
    // Handle form submission logic here
    try {
      validate();
      console.log("Form submitted:", form);
      await handleSubmit(form);
      setErrorMessage(null);
      clearForm();
      onCancel();
    } catch (error: any) {
      setErrorMessage(`Error: ${error.message}. Please fill all fields.`);
      console.error("Validation error:", error);
      console.log("form data:", form);
    }
  };
  const title = employeeData ? "Update Employee" : "Add New Employee";

  return ReactDOM.createPortal(
    <Modal className={open ? "open" : ""}>
      <ModalHeader>{title}</ModalHeader>
      <Container>
        <div>
          <Label>Enter employee name</Label>
          <Input
            name="name"
            placeholder="Name"
            size="large"
            status={fieldStatuses.name}
            value={form.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Label>Enter employee email</Label>
          <Input
            placeholder="Email"
            size="large"
            type="email"
            suffix="@verto.com"
            status={fieldStatuses.email_address}
            value={form.email_address}
            name="email_address"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label>Select employee position</Label>
          <Select
            style={{ width: "100%" }}
            size="large"
            placeholder="Position"
            value={form.position}
            status={fieldStatuses.position}
            onChange={(value) => handleValueChange("position", value)}
          >
            {employeePositions.map((position) => (
              <Select.Option key={position} value={position}>
                {position}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div>
          <Label>Select employee department</Label>
          <Select
            style={{ width: "100%" }}
            size="large"
            placeholder="Department"
            value={form.department}
            status={fieldStatuses.department}
            onChange={(value) => handleValueChange("department", value)}
          >
            {employeeDepartments.map((department) => (
              <Select.Option key={department} value={department}>
                {department}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div>
          <Label>Employee status</Label>
          <Select
            style={{ width: "100%" }}
            size="large"
            placeholder="Status"
            value={form.status}
            status={fieldStatuses.status}
            onChange={(value) => handleValueChange("status", value)}
          >
            {employeeStatuses.map((status) => (
              <Select.Option key={status} value={status}>
                {status}
              </Select.Option>
            ))}
          </Select>
        </div>

        {errorMessage && <ErrorContainer>{errorMessage}</ErrorContainer>}

        <ActionContainer>
          <Button type="default" size="large" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="primary" size="large" onClick={onSubmit}>
            Save Employee
          </Button>
        </ActionContainer>
      </Container>
    </Modal>,
    document.body
  );
};

export default EmployeeForm;
