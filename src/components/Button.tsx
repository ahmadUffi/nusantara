import React, { ButtonHTMLAttributes } from "react";

interface ThreeDButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const ThreeDButton: React.FC<ThreeDButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`bg-blue-600 w-max text-white font-semibold py-2 px-4 rounded-md shadow-[0_6px_0_0_#1e40af] hover:brightness-110 active:translate-y-[4px] active:shadow-[0_2px_0_0_#1e40af] transition-all duration-150 ease-in-out${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </button>
  );
};

export default ThreeDButton;
