import React from "react";

type ButtonProps = {
  title: string;
  onCLick?: () => void;
  className?: string;
};

export const Button = ({ title, onCLick, className }: ButtonProps) => {
  return (
    <button
      className={`w-fit hover:cursor-pointer ${className}`}
      onClick={onCLick}
    >
      {title}
    </button>
  );
};
