import DownloadIcon from "../../../../../icons/DownloadIcon";
import InfoIcon from "../../../../../icons/InfoIcon";
import { PhotoDetailsPageData } from "../../../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import Button from "../../../Button/Button.componen";
import CheckBox from "../../../CheckBox/CheckBox.component";
import OptionsList from "../../../OptionsList/OptionsList.component";
import TextIconContainer from "../../../TextIconContainer/TextIconContainer.component";

type PhotoDetailsAsideProps = {
  photo: PhotoDetailsPageData;
};

export default function PhotoDetailsAside({ photo }: PhotoDetailsAsideProps) {
  return (
    <div className="mb-[52px] w-[410px] pt-[42px]">
      <TextIconContainer
        icon={<InfoIcon />}
        text={"Kako mogu koristiti ovaj sadržaj?"}
        iconSide={"right"}
      />
      <div className="mx-[35px]">
        <OptionsList title={photo.name} options={photo.sizes} />
        <CheckBox labelText={"Preuzmi s potpisom autora"} />
        <Button color={"grey"} border={false}>
          <TextIconContainer
            icon={<DownloadIcon />}
            iconSide={"left"}
            text={"PREUZMI SADRŽAJ"}
          />
        </Button>
      </div>
    </div>
  );
}
