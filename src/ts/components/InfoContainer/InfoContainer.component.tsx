import { ReactNode } from "react";

type InfoContainerProps = {
  title: string;
  children: ReactNode;
};

export default function InfoContainer({ title, children }: InfoContainerProps) {
  return (
    <div className="tracking-[-0.4px] text-black">
      <h2 className="font-bold text-xs leading-[16.34px] mb-[5px] uppercase">
        {title}
      </h2>
      {children}
    </div>
  );
}
