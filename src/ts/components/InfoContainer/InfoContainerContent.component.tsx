type InfoContainerContentProps = {
  paragraph: string;
  lineHeight: string;
};

export default function InfoContainerContent({
  paragraph,
  lineHeight,
}: InfoContainerContentProps) {
  return <span className={`text-sm leading-[${lineHeight}]`}>{paragraph}</span>;
}
