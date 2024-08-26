import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode | string;
  color: "grey" | "white" | "black";
  border: boolean;
  width?: string;
  height: string;
  marginTop?: string;
};

export default function Button({
  children,
  color,
  border,
  width,
  height,
  marginTop,
}: ButtonProps) {
  const bgColor = {
    grey: "bg-border-divide-grey",
    white: "bg-white",
    black: "bg-black-lighter",
  };

  return (
    <button
      className={`flex items-center justify-center rounded-[50px] mt-[${marginTop}] ${bgColor[color]} ${border && "border-black-lighter border border-solid"}`}
      style={{ width: width, height: height }}
    >
      {children}
    </button>
  );
}
