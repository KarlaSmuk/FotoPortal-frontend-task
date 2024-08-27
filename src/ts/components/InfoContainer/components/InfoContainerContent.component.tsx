import { twMerge } from "tailwind-merge";

type InfoContainerContentProps = {
  paragraph: string;
  className?: string;
};

export default function InfoContainerContent({
  paragraph,
  className,
}: InfoContainerContentProps) {
  return (
    <p className={twMerge("text-sm leading-[19px]", className)}>{paragraph}</p>
  );
}
