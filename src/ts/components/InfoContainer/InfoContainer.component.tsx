import { ReactNode } from "react";

type InfoContainerProps = {
  title: string;
  children: ReactNode;
  marginBottom?: string;
};

export default function InfoContainer({
  title,
  children,
  marginBottom = "6px",
}: InfoContainerProps) {
  const marginBottomVariants = {
    "6px": "mb-[6px]",
    "8px": "mb-[8px]",
  };
  const marginBottomClass =
    marginBottomVariants[marginBottom as keyof typeof marginBottomVariants];

  return (
    <div className="text-black-lighter tracking-[-0.4px]">
      <div
        className={`${marginBottomClass} text-xs font-bold uppercase leading-[16px]`}
      >
        {title}
      </div>
      {children}
    </div>
  );
}
