import styled, { keyframes } from "styled-components";

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardContainer = styled.div`
  background: linear-gradient(135deg, #8095f3 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 0;
  width: 350px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  animation: ${fadeInUp} 0.6s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 16px 0;
    max-width: 400px;
  }
`;

export const CardHeader = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Avatar = styled.div<{ $bgColor: string }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  color: white;
  background-color: ${(props) => props.$bgColor};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.1);
  }
`;

export const EmployeeInfo = styled.div`
  flex: 1;
`;

export const EmployeeName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 4px 0;
  line-height: 1.2;
`;

export const EmployeePosition = styled.p`
  font-size: 14px;
  color: #7f8c8d;
  margin: 0;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CardBody = styled.div`
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.95);
`;

export const EmployeeDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  gap: 8px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

export const DetailLabel = styled.div`
  font-size: 12px;
  color: #95a5a6;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const DetailValue = styled.div`
  font-size: 14px;
  color: #2c3e50;
  font-weight: 500;
  text-align: right;
  word-break: break-word;

`;

export const CardFooter = styled.div`
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  gap: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BaseButton = styled.button`
  flex: 1;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: white;

  span {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContactButton = styled(BaseButton)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  &:hover {
    background: linear-gradient(135deg, #5a67d8 0%, #6c5b7b 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
  }
`;

export const ViewButton = styled(BaseButton)`
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

  &:hover {
    background: linear-gradient(135deg, #e681f0 0%, #f24858 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(240, 147, 251, 0.4);
  }
`;
