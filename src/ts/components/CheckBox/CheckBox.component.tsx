import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Text from "../Text/Text.component";

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
    <label className={twMerge("flex gap-1.5", className)}>
      <input
        type="checkbox"
        className="h-[19.91px] w-[20px] border border-border-checkbox"
        {...props}
      />
      <Text>{label}</Text>
    </label>
  );
}
