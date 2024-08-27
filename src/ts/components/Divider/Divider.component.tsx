import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Divider({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "border border-solid border-border-divide-grey",
        className,
      )}
      {...props}
    />
  );
}
