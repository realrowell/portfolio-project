import * as React from "react";
import clsx from "clsx"; // optional helper for conditional classes
import { Link } from "react-router";

export interface ButtonProps {
  variant?: "primary" | "primarySm" | "secondary" | "outline" | "modalBtn";
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  to?: string; // 🔹 new prop for links
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  className,
  to,
  }) => {
    const baseStyles =
      "px-4 py-2 rounded font-medium transition-colors duration-200";

    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-xl px-5 py-3 cursor-pointer", 
      primarySm: "btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer",
      secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-xl px-5 py-3 cursor-pointer",
      outline: "border border-gray-400 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-xl px-5 py-3 cursor-pointer",
      modalBtn: "bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 rounded-xl px-5 py-3 cursor-pointer", 
    };

    const combined = clsx(baseStyles, variants[variant], className);

    // 🔹 If "to" prop exists, render Link instead of button
    if (to) {
      return (
        <Link to={to} className={combined}>
          {children}
        </Link>
      );
    }

    // 🔹 Otherwise, behave as a normal button
    return (
      <button onClick={onClick} className={combined}>
        {children}
      </button>
    );
  };

export default Button;
