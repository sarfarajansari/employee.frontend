import styled from "styled-components";

export const SearchWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 520px;
  background: var(--search-bg, #fff);
  border-radius: 14px;
  padding: 8px 10px;
  box-shadow: 0 1px 3px rgba(16,24,40,0.04);
  border: 1px solid rgba(15,23,42,0.06);

  &:focus-within {
    box-shadow: 0 8px 24px rgba(2,6,23,0.08);
  }

  &:focus-within input {
    transform: scaleX(1.03) scaleY(1.01);
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: 0;
  outline: none;
  font-size: 14px;
  background: transparent;
  padding: 8px 6px;
  color: var(--text, #0f172a);
  transform-origin: left center;
  transition: transform 160ms ease;

  &::placeholder { color: #94a3b8; }
`;

