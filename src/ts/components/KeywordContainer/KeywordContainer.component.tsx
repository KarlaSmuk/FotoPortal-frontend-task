import InfoContainerContent from "../InfoContainer/InfoContainerContent.component";

type KeywordContainerProps = {
  keyword: string;
};

export default function KeywordContainer({ keyword }: KeywordContainerProps) {
  return (
    <div className="flex border border-border-grey rounded-[50px] h-7 items-center px-[15px]">
      <InfoContainerContent paragraph={keyword} />
    </div>
  );
}
