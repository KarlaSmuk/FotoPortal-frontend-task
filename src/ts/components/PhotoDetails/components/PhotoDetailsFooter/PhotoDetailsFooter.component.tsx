import { PhotoDetailsPageData } from "../../../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import PhotoTextContainer from "../PhotoText/PhotoTextContainer.component";
import PhotoTextParagraph from "../PhotoText/PhotoTextParagraph.component";

type PhotoDetailsFooterProps = {
  photo: PhotoDetailsPageData;
};

export default function PhotoDetailsFooter({ photo }: PhotoDetailsFooterProps) {
  return (
    <div className="bg-white mt-[675px] h-[411px] w-full">
      <div className="flex justify-between ml-[65px] mt-[41px] w-[669px] h-[65px]">
        <PhotoTextContainer title={"Galerija"}>
          {photo.gallery}
        </PhotoTextContainer>
        <PhotoTextContainer title={"Autor"}>
          <PhotoTextParagraph lineHeight="19.07px" paragraph={photo.author} />
        </PhotoTextContainer>
        <PhotoTextContainer title={"Agencija"}>
          <PhotoTextParagraph lineHeight="19.07px" paragraph={photo.agency} />
        </PhotoTextContainer>
      </div>
      <div className="ml-[65px] w-[827px] mt-[21px]">
        <PhotoTextContainer title={"Opis"}>
          <PhotoTextParagraph lineHeight="22px" paragraph={photo.description} />
        </PhotoTextContainer>
      </div>
    </div>
  );
}
