type OptionContainerProps = {
  text: string;
};
export default function OptionText({ text }: OptionContainerProps) {
  return <p className="text-sm uppercase leading-[19px]">{text}</p>;
}
