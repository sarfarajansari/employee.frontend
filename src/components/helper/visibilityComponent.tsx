import React from "react";

const VisibilityComponent = ({
  condition,
  children,
}: {
  condition?: boolean;
  children?: React.ReactNode;
}) => {
  if (!condition) return null;
  return <React.Fragment>{children}</React.Fragment>;
};

export default VisibilityComponent;
