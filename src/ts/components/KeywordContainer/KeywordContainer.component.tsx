import InfoContainerContent from "../InfoContainer/InfoContainerContent.component";

type KeywordContainerProps = {
  keyword: string;
};

export default function KeywordContainer({ keyword }: KeywordContainerProps) {
  return (
    <div className="flex h-7 w-[500px] items-center rounded-[50px] border border-border-grey px-[15px] pb-[5px] pt-[4px]">
      <InfoContainerContent paragraph={keyword} />
    </div>
  );
}
