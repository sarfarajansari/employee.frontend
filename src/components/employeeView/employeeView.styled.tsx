import styled from "styled-components";
import { getAvatarColor } from "../header/helper";

export const Modal = styled.div`
  background: ${(p: any) => p.theme?.colors?.surface || "#fff"};
  color: ${(p: any) => p.theme?.colors?.text || "#111"};
  width: 100%;
  max-width: 560px;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  background: linear-gradient(
    90deg,
    rgba(250, 250, 250, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  );
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const Content = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 16px 20px;
  align-items: start;
  background-color: #ffffff;
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  background: ${(p: any) => getAvatarColor(p.id)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  box-shadow: 0 6px 18px rgba(41, 128, 185, 0.18);
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 4px;
  padding: 20px 0;
`;

export const Row = styled.div`
  display: flex;
  gap: 12px;
  padding: 20px 0;
  border-top: 2px dashed rgba(0, 0, 0, 0.08);
  align-items: center;
`;

export const Label = styled.div`
  width: 110px;
  color: rgba(0, 0, 0, 0.55);
  font-size: 1.2rem;
`;

export const Value = styled.div`
  flex: 1;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.9);
  word-break: break-word;
`;

export const StatusBadge = styled.span<{ status?: string }>`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  background: ${(p) => {
    const s = (p.status || "").toLowerCase();
    if (s.includes("inactive") || s.includes("terminated")) return "#6c757d";
    if (s.includes("active")) return "#28a745";
    if (s.includes("leave") || s.includes("on leave")) return "#ff9f1a";

    return "#007bff";
  }};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 30px 20px 12px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  background: #fff;
`;
