type InfoContainerContentProps = {
  paragraph: string;
  lineHeight?: string;
};

export default function InfoContainerContent({
  paragraph,
  lineHeight = "19px",
}: InfoContainerContentProps) {
  const leadingVariants = {
    "19px": "leading-[19px]",
    "22px": "leading-[22px]",
  };
  const lineHeightClass =
    leadingVariants[lineHeight as keyof typeof leadingVariants];

  return <p className={`text-sm ${lineHeightClass}`}>{paragraph}</p>;
}
