import React from "react";

type IconProps = {
  width?: number | string;
  height?: number | string;
  title?: string;
  className?: string;
};

export const CloseIcon: React.FC<IconProps> = ({ width = 16, height = 16, title, className }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className={className}>
    {title ? <title>{title}</title> : null}
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 6l12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default CloseIcon;
