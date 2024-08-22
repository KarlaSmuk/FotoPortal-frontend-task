type PhotoTextParagraphProps = {
  paragraph: string;
  lineHeight: string;
};

export default function PhotoTextParagraph({
  paragraph,
  lineHeight,
}: PhotoTextParagraphProps) {
  return <span className={`leading-[${lineHeight}]`}>{paragraph}</span>;
}
