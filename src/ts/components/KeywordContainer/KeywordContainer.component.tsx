import InfoContainerContent from "../InfoContainer/InfoContainerContent.component";

type KeywordContainerProps = {
  keyword: string;
};

export default function KeywordContainer({ keyword }: KeywordContainerProps) {
  return (
    <div className="flex border border-solid border-border-grey rounded-[50px] h-7 pt-1 pb-[5px] px-3">
      <InfoContainerContent lineHeight="19px" paragraph={keyword} />
    </div>
  );
}
