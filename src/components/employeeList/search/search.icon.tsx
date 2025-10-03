import React from "react";

type IconProps = {
  width?: number | string;
  height?: number | string;
  title?: string;
  className?: string;
};

export const SearchIcon: React.FC<IconProps> = ({ width = 18, height = 18, title, className }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className={className}>
    {title ? <title>{title}</title> : null}
    <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SearchIcon;
