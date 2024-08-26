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
      <div className="flex justify-between mt-[41px] max-w-[669px] h-[65px]">
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
      <div className="max-w-[827px] mt-[21px]">
        <InfoContainer title={"Opis"}>
          <InfoContainerContent
            lineHeight="22px"
            paragraph={photo.description}
          />
        </InfoContainer>
      </div>
      <div className="max-w-[574px] mt-[23px]">
        <InfoContainer title={"Ključne riječi"}>
          <div className="flex flex-wrap gap-[10px] mt-[15px]">
            {photo.keywords.map((keyword) => {
              return <KeywordContainer keyword={keyword} />;
            })}
          </div>
        </InfoContainer>
      </div>
    </div>
  );
}
