import { ReactNode } from "react";

type TextIconContainerProps = {
  icon: ReactNode;
  iconSide: "left" | "right";
  text: string;
};
export default function TextIconContainer({
  icon,
  iconSide,
  text,
}: TextIconContainerProps) {
  return (
    <div className="flex w-fit items-center gap-[5px]">
      {iconSide === "left" && icon}
      <p className="text-[13px] leading-[17.7px] tracking-[-0.2px]">{text}</p>
      {iconSide === "right" && icon}
    </div>
  );
}
