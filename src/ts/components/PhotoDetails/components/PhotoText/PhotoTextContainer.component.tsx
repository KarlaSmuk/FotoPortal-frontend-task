import { ReactNode } from "react";

type PhotoTextProps = {
  title: string;
  children: ReactNode;
};

export default function PhotoTextContainer({
  title,
  children,
}: PhotoTextProps) {
  return (
    <div className="tracking-[-0.4px] text-black">
      <h2 className="font-bold text-xs leading-[16.34px] mb-[5px] uppercase">
        {title}
      </h2>
      {children}
    </div>
  );
}
