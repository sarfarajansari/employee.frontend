import styled from "styled-components";

export const IconButton = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  color: #334155;
  transition: background 120ms ease;

  &:hover {
    background: rgba(15, 23, 42, 0.04);
  }
  &:active {
    transform: translateY(1px);
  }
`;

export const CloseButton = styled(IconButton)`
  color: #e11d48;

  &:hover {
    background: rgba(225, 29, 72, 0.06);
  }
`;
