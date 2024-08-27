import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
};

export default function CheckBox({
  label,
  className,
  ...props
}: CheckBoxProps) {
  return (
    <label
      className={twMerge(
        "flex w-fit gap-[6px] text-sm leading-[19px] text-black-lighter",
        className,
      )}
    >
      <input
        type="checkbox"
        className="h-[19.91px] w-[20px] border border-border-checkbox"
        {...props}
      />
      {label}
    </label>
  );
}
