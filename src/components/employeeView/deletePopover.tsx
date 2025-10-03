import { useState } from "react";

import { Button, Popover } from "antd";

import { EmployeeService } from "../../services/employeeService";

const DeletePopOver = ({
  children,
  id,
  onClose,
}: {
  children: React.ReactNode;
  id: number;
  onClose: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const handleDelete = () => {
    const service = new EmployeeService();
    setLoading(true);
    service.deleteEmployee(id).finally(() => {
      setLoading(false);
      onClose();
    });
  };

  return (
    <Popover
      content={
        <>
          <div>Are you sure you want to delete this employee?</div>
          <br />
          <Button
            type="primary"
            danger
            onClick={handleDelete}
            loading={loading}
          >
            Delete
          </Button>
        </>
      }
      trigger={"click"}
    >
      {children}
    </Popover>
  );
};

export default DeletePopOver;
