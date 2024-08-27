import { ReactNode } from "react";

type InfoContainerProps = {
  title: string;
  children: ReactNode;
  marginBottom?: string;
  width?: string;
  height?: string;
};

export default function InfoContainer({
  title,
  children,
  marginBottom = "6px",
  width,
  height,
}: InfoContainerProps) {
  const marginBottomVariants = {
    "6px": "mb-[6px]",
    "8px": "mb-[8px]",
  };
  const marginBottomClass =
    marginBottomVariants[marginBottom as keyof typeof marginBottomVariants];

  return (
    <div
      className="tracking-[-0.4px] text-black-lighter"
      style={{ width, height }}
    >
      <p
        className={`${marginBottomClass} text-xs font-bold uppercase leading-[16px]`}
      >
        {title}
      </p>
      {children}
    </div>
  );
}
