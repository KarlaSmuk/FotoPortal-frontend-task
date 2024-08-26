import { ReactNode } from "react";

type InfoContainerProps = {
  title: string;
  children: ReactNode;
};

export default function InfoContainer({ title, children }: InfoContainerProps) {
  return (
    <div className="tracking-[-0.4px] text-black">
      <div className="mb-[5px] text-xs font-bold uppercase leading-[16px]">
        {title}
      </div>
      {children}
    </div>
  );
}
