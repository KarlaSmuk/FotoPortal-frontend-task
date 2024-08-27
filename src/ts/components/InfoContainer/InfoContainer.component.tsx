import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type InfoContainerProps = {
  title: string;
  children: ReactNode;
  className?: string;
  marginBottom?: "1.5" | "2";
};

export default function InfoContainer({
  title,
  children,
  marginBottom = "1.5",
  className,
}: InfoContainerProps) {
  const marginBottomVariants = {
    "1.5": "mb-1.5",
    "2": "mb-2",
  };
  const marginBottomClass =
    marginBottomVariants[marginBottom as keyof typeof marginBottomVariants];

  return (
    <div className={twMerge("tracking-[-0.4px] text-black-lighter", className)}>
      <p
        className={`${marginBottomClass} text-xs font-bold uppercase leading-[16px]`}
      >
        {title}
      </p>
      {children}
    </div>
  );
}
