type InfoContainerContentProps = {
  paragraph: string;
  lineHeight: string;
};

export default function InfoContainerContent({
  paragraph,
  lineHeight,
}: InfoContainerContentProps) {
  return <span className={`leading-[${lineHeight}] text-sm`}>{paragraph}</span>;
}
