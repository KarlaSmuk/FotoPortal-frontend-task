import InfoIcon from "../../../../../icons/InfoIcon";
import { PhotoDetailsPageData } from "../../../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import TextIconContainer from "../../../TextIconContainer/TextIconContainer.component";

type PhotoDetailsAsideProps = {
  photo: PhotoDetailsPageData;
};
export default function PhotoDetailsAside({ photo }: PhotoDetailsAsideProps) {
  return (
    <div className="mb-[52px] w-[410px] pl-[40px] pt-[42px]">
      <TextIconContainer
        icon={<InfoIcon />}
        text={"Kako mogu koristiti ovaj sadržaj?"}
        iconSide={"right"}
      />
    </div>
  );
}
