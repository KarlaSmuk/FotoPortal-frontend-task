import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode | string;
  color: "grey" | "white" | "black";
  border: boolean;
};

export default function Button({ children }: ButtonProps) {
  return <button className="color">{children}</button>;
}
