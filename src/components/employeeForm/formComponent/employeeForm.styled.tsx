import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 50px 40px;
`;
export const Label = styled.div`
  font-size: 18px;
  color: #2c3e50;
  margin-bottom: 6px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  justify-content: flex-end;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ErrorContainer = styled.div`
  background-color: #f58789;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;
  text-align: center;
  width: 100%;
`;
