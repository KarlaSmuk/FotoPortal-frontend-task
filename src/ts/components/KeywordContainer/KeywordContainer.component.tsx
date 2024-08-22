import InfoContainerContent from "../InfoContainer/InfoContainerContent.component";

type KeywordContainerProps = {
  keyword: string;
};

export default function KeywordContainer({ keyword }: KeywordContainerProps) {
  return (
    <div className="border border-solid border-border-grey rounded-[50px] px-[15px] h-7">
      <InfoContainerContent lineHeight="19.07px" paragraph={keyword} />
    </div>
  );
}
