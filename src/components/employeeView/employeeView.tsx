import { useEffect, useMemo } from "react";
import type { Employee } from "../../models/employee.model";
import {
  Header,
  Title,
  Content,
  Avatar,
  Main,
  Name,
  Row,
  Label,
  Value,
  StatusBadge,
  Footer,
} from "./employeeView.styled";
import { Modal } from "../helper/Modal";
import { getInitials } from "../header/helper";
import { Button } from "antd";
import CloseIcon from "../helper/closeIcon";
import { CloseButton } from "../helper/iconButton";
import DeletePopOver from "./deletePopover";

// const DeletePopOver = ({
//   children,
//   id,
//   onClose,
// }: {
//   children: React.ReactNode;
//   id: number;
//   onClose: () => void;
// }) => {
//   const [loading, setLoading] = useState(false);
//   const handleDelete = () => {
//     const service = new EmployeeService();
//     setLoading(true);
//     service.deleteEmployee(id).finally(() => {
//       setLoading(false);
//       onClose();
//     });
//   };

//   return (
//     <Popover
//       content={
//         <>
//           <div>Are you sure you want to delete this employee?</div>
//           <br />
//           <Button
//             type="primary"
//             danger
//             onClick={handleDelete}
//             loading={loading}
//           >
//             Delete
//           </Button>
//         </>
//       }
//       trigger={"click"}
//     >
//       {children}
//     </Popover>
//   );
// };
export const EmployeeView = ({
  employee,
  onClose,
  onEdit,
  refreshList,
}: {
  employee: Employee | null;
  onClose: () => void;
  onEdit: (e: Employee) => void;
  refreshList: () => Promise<void>;
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const initials = useMemo(
    () => (employee ? getInitials(employee.name) : ""),
    [employee]
  );

  return (
    <Modal className={employee ? "open" : ""}>
      <Header>
        <Title>Employee details</Title>
        <CloseButton onClick={() => onClose?.()} aria-label="Close modal">
          <CloseIcon />
        </CloseButton>
      </Header>

      <Content>
        <Avatar aria-hidden id={`${employee?.id}`}>
          {initials || "E"}
        </Avatar>

        <Main>
          {employee ? (
            <>
              <Name>{employee.name}</Name>

              <Row>
                <Label>ID</Label>
                <Value>#{employee.id}</Value>
              </Row>
              <Row>
                <Label>Position</Label>
                <Value>{employee.position}</Value>
              </Row>

              <Row>
                <Label>Email</Label>
                <Value>
                  <a href={`mailto:${employee.email_address}`}>
                    {employee.email_address + "@verto.com"}
                  </a>
                </Value>
              </Row>

              <Row>
                <Label>Department</Label>
                <Value>{employee.department || "—"}</Value>
              </Row>

              <Row>
                <Label>Status</Label>
                <Value>
                  <StatusBadge status={employee.status}>
                    {employee.status}
                  </StatusBadge>
                </Value>
              </Row>
            </>
          ) : (
            <></>
          )}
        </Main>
      </Content>

      <Footer>
        {employee && (
          <DeletePopOver
            id={employee.id}
            onClose={() => {
              onClose();
              refreshList();
            }}
          >
            <Button size="large" danger>
              Delete
            </Button>
          </DeletePopOver>
        )}
        <Button size="large" onClick={() => onClose?.()}>
          Close
        </Button>

        {employee && (
          <Button size="large" onClick={() => onEdit(employee)}>
            Edit
          </Button>
        )}
      </Footer>
    </Modal>
  );
};

export default EmployeeView;
