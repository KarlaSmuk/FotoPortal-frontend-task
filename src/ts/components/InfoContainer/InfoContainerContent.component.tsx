type InfoContainerContentProps = {
  paragraph: string;
  lineHeight?: string;
};

export default function InfoContainerContent({
  paragraph,
  lineHeight = "19px",
}: InfoContainerContentProps) {
  return <p className={`text-sm leading-[${lineHeight}]`}>{paragraph}</p>;
}
