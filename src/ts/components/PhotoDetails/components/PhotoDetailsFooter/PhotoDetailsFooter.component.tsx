import { PhotoDetailsPageData } from "../../../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import InfoContainer from "../../../InfoContainer/InfoContainer.component";
import KeywordContainer from "../../../KeywordContainer/KeywordContainer.component";
import Text from "../../../Text/Text.component";

type PhotoDetailsFooterProps = {
  photo: PhotoDetailsPageData;
};

export default function PhotoDetailsFooter({ photo }: PhotoDetailsFooterProps) {
  return (
    <div className="mb-[68px] ml-[65px]">
      <div className="mr-[222px] mt-[41px] flex h-[65px] justify-between">
        <InfoContainer title={"Galerija"}>
          <Text>{photo.gallery}</Text>
        </InfoContainer>
        <InfoContainer title={"Autor"}>
          <Text>{photo.author}</Text>
        </InfoContainer>
        <InfoContainer title={"Agencija"}>
          <Text>{photo.agency}</Text>
        </InfoContainer>
      </div>
      <InfoContainer title={"Opis"} className="mr-[64px] mt-[21px] gap-2">
        <Text className="leading-[22px]">{photo.description}</Text>
      </InfoContainer>
      <InfoContainer
        title={"Ključne riječi"}
        className="mr-[317px] mt-[23px] gap-[15px]"
      >
        <div className="flex flex-wrap gap-[10px]">
          {photo.keywords.map((keyword, index) => {
            //or we can set id of each keyword as key
            return <KeywordContainer key={index} keyword={keyword} />;
          })}
        </div>
      </InfoContainer>
    </div>
  );
}
