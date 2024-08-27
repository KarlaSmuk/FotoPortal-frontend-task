import { ReactNode } from "react";
import Text from "../Text/Text.component";
import { twMerge } from "tailwind-merge";

type InfoContainerProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function InfoContainer({
  title,
  children,
  className,
}: InfoContainerProps) {
  return (
    <div className={twMerge("flex flex-col gap-1.5", className)}>
      <Text type={"title"}>{title}</Text>
      {children}
    </div>
  );
}
