import { ReactNode } from "react";

type TextIconContainerProps = {
  icon?: ReactNode;
  iconSide?: "left" | "right";
  text: string;
  gap: string;
  lineHeight: string;
  fontWeight?: number;
  textSize?: string;
  tracking?: string;
  textColor?: string;
};
export default function TextIconContainer({
  icon,
  iconSide,
  text,
  gap,
  lineHeight,
  fontWeight = 400,
  textSize = "14px",
  tracking = "-0.4px",
  textColor = "black-lighter",
}: TextIconContainerProps) {
  return (
    <div className={`flex w-fit items-center`} style={{ gap: gap }}>
      {iconSide === "left" && icon}
      <p
        className={`tracking-[${tracking}]`}
        style={{
          lineHeight: lineHeight,
          fontWeight: fontWeight,
          color: textColor,
          fontSize: textSize,
        }}
      >
        {text}
      </p>
      {iconSide === "right" && icon}
    </div>
  );
}
