import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 600px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transform: translateX(100%);
  transition: transform 250ms ease-in-out;
  &.open {
    transform: translateX(0);
  }
`;

export const ModalHeader = styled.div`
  padding: 16px;
  background-color: #3ef2ff;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
