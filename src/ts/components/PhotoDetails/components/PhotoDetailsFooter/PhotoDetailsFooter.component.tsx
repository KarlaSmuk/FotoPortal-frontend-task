import { PhotoDetailsPageData } from "../../../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import InfoContainer from "../../../InfoContainer/InfoContainer.component";
import InfoContainerContent from "../../../InfoContainer/InfoContainerContent.component";
import KeywordContainer from "../../../KeywordContainer/KeywordContainer.component";

type PhotoDetailsFooterProps = {
  photo: PhotoDetailsPageData;
};

export default function PhotoDetailsFooter({ photo }: PhotoDetailsFooterProps) {
  return (
    <div className="mx-[65px] mb-[68px]">
      <div className="mt-[41px] flex h-[65px] max-w-[669px] justify-between">
        <InfoContainer title={"Galerija"}>
          <InfoContainerContent paragraph={photo.gallery} />
        </InfoContainer>
        <InfoContainer title={"Autor"}>
          <InfoContainerContent paragraph={photo.author} />
        </InfoContainer>
        <InfoContainer title={"Agencija"}>
          <InfoContainerContent paragraph={photo.agency} />
        </InfoContainer>
      </div>
      <div className="mt-[21px] max-w-[827px]">
        <InfoContainer title={"Opis"} marginBottom="8px">
          <InfoContainerContent
            lineHeight="22px"
            paragraph={photo.description}
          />
        </InfoContainer>
      </div>
      <div className="mt-[23px] max-w-[574px]">
        <InfoContainer title={"Ključne riječi"}>
          <div className="mt-[15px] flex flex-wrap gap-[10px]">
            {photo.keywords.map((keyword, index) => {
              //or we can set id of each keyword as index
              return <KeywordContainer key={index} keyword={keyword} />;
            })}
          </div>
        </InfoContainer>
      </div>
    </div>
  );
}
