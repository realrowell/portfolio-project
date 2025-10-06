import * as React from "react";

export interface ButtonProps {
  variant: "primary" | "secondary" | "outline";
  children?: React.ReactNode;
  // Add other props as needed
}

declare const Button: React.FC<ButtonProps>;
export default Button;