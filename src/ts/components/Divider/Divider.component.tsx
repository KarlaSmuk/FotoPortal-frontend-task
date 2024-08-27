import { twMerge } from "tailwind-merge";

type DividerProps = {
  className?: string;
};

export default function Divider({ className }: DividerProps) {
  return (
    <div
      className={twMerge(
        "border border-solid border-border-divide-grey",
        className,
      )}
    />
  );
}
