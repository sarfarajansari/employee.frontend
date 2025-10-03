import type { Employee } from "../../../models/employee.model";
import { getAvatarColor, getInitials } from "../../header/helper";
import {
  CardContainer,
  CardBody,
  CardFooter,
  CardHeader,
  ContactButton,
  ViewButton,
  Avatar,
  EmployeeInfo,
  EmployeeName,
  EmployeePosition,
  EmployeeDetail,
  DetailLabel,
  DetailValue,
} from "./employeeCard.styled";

const EmployeeCard = ({
  employee,
  onEdit,
  onView,
}: {
  employee: Employee;
  onEdit: (employee: Employee) => void;
  onView: (employee: Employee) => void;
}) => {
  return (
    <div>
      <CardContainer>
        <CardHeader>
          <Avatar $bgColor={getAvatarColor(employee.id)}>
            {getInitials(employee.name)}
          </Avatar>
          <EmployeeInfo>
            <EmployeeName>{employee.name}</EmployeeName>
            <EmployeePosition>{employee.position}</EmployeePosition>
          </EmployeeInfo>
        </CardHeader>

        <CardBody>
          <EmployeeDetail>
            <DetailLabel>Employee ID</DetailLabel>
            <DetailValue>
              #{employee.id.toString().padStart(4, "0")}
            </DetailValue>
          </EmployeeDetail>

          <EmployeeDetail>
            <DetailLabel>Email</DetailLabel>
            <DetailValue>{employee.email_address + "@verto.com"}</DetailValue>
          </EmployeeDetail>
        </CardBody>

        <CardFooter>
          <ViewButton onClick={() => onView(employee)}>View Profile</ViewButton>
          <ContactButton onClick={() => onEdit(employee)}>Edit</ContactButton>
        </CardFooter>
      </CardContainer>
    </div>
  );
};

export default EmployeeCard;
