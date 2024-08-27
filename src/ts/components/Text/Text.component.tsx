import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TextProps {
  type?: "title" | "header" | "sm" | "s" | "secondary";
  variant?: "grey" | "white" | "black" | "blackLighter";
  className?: string;
  children?: ReactNode;
}

export default function Text({
  type = "sm",
  variant = "blackLighter",
  className,
  children,
}: TextProps) {
  const types = {
    title: "text-xs leading-4 font-bold tracking-[-0.4px] uppercase",
    header: "text-base font-semibold leading-[22px] tracking-[-0.4px]",
    sm: "text-sm leading-[19px] tracking-[-0.4px]",
    s: "text-[13px] leading-[18px] tracking-[-0.2px]",
    secondary: "text-xs leading-[14px]",
  };

  const variants = {
    grey: "text-text-grey",
    white: "text-white",
    black: "text-black",
    blackLighter: "text-black-lighter",
  };

  return (
    <p className={twMerge(`${variants[variant]} ${types[type]}`, className)}>
      {children}
    </p>
  );
}
