import { twMerge } from "tailwind-merge";
import Text from "../Text/Text.component";

type KeywordContainerProps = {
  keyword: string;
  className?: string;
};

export default function KeywordContainer({
  keyword,
  className,
}: KeywordContainerProps) {
  return (
    <div
      className={twMerge(
        "flex h-7 items-center rounded-[50px] border border-border-grey px-[15px] pb-[5px] pt-[4px]",
        className,
      )}
    >
      <Text>{keyword}</Text>
    </div>
  );
}
