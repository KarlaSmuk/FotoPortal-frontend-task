import DownloadIcon from "../../../../../icons/DownloadIcon";
import InfoIcon from "../../../../../icons/InfoIcon";
import ShoppingCartIcon from "../../../../../icons/ShoppingCartIcon";
import { PhotoDetailsPageData } from "../../../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import Button from "../../../Button/Button.componen";
import CheckBox from "../../../CheckBox/CheckBox.component";
import Divider from "../../../Divider/Divider.component";
import InfoContainer from "../../../InfoContainer/InfoContainer.component";
import OptionsList from "../../../OptionsList/OptionsList.component";
import Text from "../../../Text/Text.component";

type PhotoDetailsSidebarProps = {
  photo: PhotoDetailsPageData;
};

export default function PhotoDetailsSidebar({
  photo,
}: PhotoDetailsSidebarProps) {
  return (
    <div className="mb-[52px] w-[410px] px-[35px] pt-[42px]">
      <div className="ml-[5px] flex flex-row items-center gap-[5px]">
        <Text type="s" variant="black">
          Kako mogu koristiti ovaj sadržaj?
        </Text>
        <InfoIcon width="15" height="15" />
      </div>
      <OptionsList title={photo.name} options={photo.sizes} />
      <CheckBox
        className="ml-[5px] mt-[15px]"
        label="Preuzmi s potpisom autora"
      />
      <div className="mt-[39.09px] flex flex-col gap-[15px]">
        <Button className="h-[45px] gap-4 bg-border-divide-grey">
          <DownloadIcon width="13" height="15.73" />
          <Text className="font-semibold uppercase leading-4">
            Preuzmi sadržaj
          </Text>
        </Button>
        <div className="flex gap-[10px]">
          <Button className="h-[40px] w-[165px] bg-border-divide-grey">
            <Text>Pošalji u sustav</Text>
          </Button>
          <Button className="h-[40px] w-[165px] bg-border-divide-grey">
            <Text>Pošalji u CMS</Text>
          </Button>
        </div>
      </div>
      <div className="mt-[30px] flex flex-col gap-[15.1px]">
        <Button className="h-[45px] gap-[25px] bg-black-lighter">
          <ShoppingCartIcon width="14" height="14" />
          <Text variant="white" className="uppercase leading-4">
            Dodaj u košaricu
          </Text>
        </Button>
        <Button className="border-black-default h-[45px] gap-[15px] border border-solid">
          <DownloadIcon width="12" height="14" />
          <Text>Preuzmi pregledni primjerak</Text>
        </Button>
      </div>
      <Divider className="mb-[29.55px] mt-[39.35px]" />
      <div className="flex flex-col gap-[30px]">
        {photo.notes.map((note, index) => {
          return (
            <InfoContainer
              key={index}
              title={"POSEBNE NAPOMENE"}
              className="w-[339px] gap-2"
            >
              <Text className="leading-[22px]">{note}</Text>
            </InfoContainer>
          );
        })}
      </div>
    </div>
  );
}
