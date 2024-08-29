import { PhotoDetailsPageData } from "../../../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import InfoContainer from "../../../InfoContainer/InfoContainer.component";
import KeywordContainer from "../../../KeywordContainer/KeywordContainer.component";
import Text from "../../../Text/Text.component";

type PhotoDetailsInfoProps = {
  photo: PhotoDetailsPageData;
};

export default function PhotoDetailsInfo({ photo }: PhotoDetailsInfoProps) {
  return (
    <div className="pl-[35px] md:pb-[68px] md:pl-[65px]">
      <div className="mt-[41px] flex h-[65px] w-[75.1%] justify-between gap-3">
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
      <InfoContainer title={"Opis"} className="mr-16 mt-[21px] gap-2">
        <Text className="leading-[22px]">{photo.description}</Text>
      </InfoContainer>
      <InfoContainer
        title={"Ključne riječi"}
        className="mt-[23px] w-[64.4%] gap-[15px]"
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
