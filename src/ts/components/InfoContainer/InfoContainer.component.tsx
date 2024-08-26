import { ReactNode } from "react";

type InfoContainerProps = {
  title: string;
  children: ReactNode;
};

export default function InfoContainer({ title, children }: InfoContainerProps) {
  return (
    <div className="tracking-[-0.4px] text-black">
      <div className="font-bold text-xs mb-[5px] leading-[16.34px] uppercase">
        {title}
      </div>
      {children}
    </div>
  );
}
