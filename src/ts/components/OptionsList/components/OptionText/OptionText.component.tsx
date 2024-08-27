type OptionContainerProps = {
  text: string;
};
export default function OptionText({ text }: OptionContainerProps) {
  return <p className="h-fit w-fit text-sm uppercase leading-[19px]">{text}</p>;
}
