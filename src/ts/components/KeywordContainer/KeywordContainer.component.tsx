import InfoContainerContent from "../InfoContainer/InfoContainerContent.component";

type KeywordContainerProps = {
  keyword: string;
};

export default function KeywordContainer({ keyword }: KeywordContainerProps) {
  return (
    <div className="flex h-7 items-center rounded-[50px] border border-border-grey px-[13px] pb-[5px] pt-[4px]">
      <InfoContainerContent paragraph={keyword} />
    </div>
  );
}
