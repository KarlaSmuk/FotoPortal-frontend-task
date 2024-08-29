import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center rounded-[50px]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
