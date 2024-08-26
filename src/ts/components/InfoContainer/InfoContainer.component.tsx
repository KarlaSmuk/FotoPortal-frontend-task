import { ReactNode } from "react";

type InfoContainerProps = {
  title: string;
  children: ReactNode;
};

export default function InfoContainer({ title, children }: InfoContainerProps) {
  return (
    <div className="text-black-lighter tracking-[-0.4px]">
      <div className="mb-[8px] text-xs font-bold uppercase leading-[16px]">
        {title}
      </div>
      {children}
    </div>
  );
}
