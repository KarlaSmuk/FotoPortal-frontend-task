import DownloadIcon from "../../../../../icons/DownloadIcon";
import InfoIcon from "../../../../../icons/InfoIcon";
import ShoppingCartIcon from "../../../../../icons/ShoppingCartIcon";
import { PhotoDetailsPageData } from "../../../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import Button from "../../../Button/Button.componen";
import CheckBox from "../../../CheckBox/CheckBox.component";
import Divider from "../../../Divider/Divider.component";
import InfoContainer from "../../../InfoContainer/InfoContainer.component";
import InfoContainerContent from "../../../InfoContainer/components/InfoContainerContent.component";
import OptionsList from "../../../OptionsList/OptionsList.component";
import TextIconContainer from "../../../TextIconContainer/TextIconContainer.component";

type PhotoDetailsAsideProps = {
  photo: PhotoDetailsPageData;
};

export default function PhotoDetailsAside({ photo }: PhotoDetailsAsideProps) {
  return (
    <div className="mb-[52px] w-[410px] pt-[42px]">
      <div className="ml-[40px]">
        <TextIconContainer
          icon={<InfoIcon width="15" height="15" />}
          text={"Kako mogu koristiti ovaj sadržaj?"}
          iconSide={"right"}
          gap="5px"
          lineHeight="18px"
          textSize="13px"
          tracking="-0.2px"
        />
      </div>
      <div className="mx-[35px]">
        <OptionsList title={photo.name} options={photo.sizes} />
        <CheckBox
          className="ml-[5px] mt-[15px]"
          label="Preuzmi s potpisom autora"
        />
        <div className="mt-[39.09px] flex flex-col gap-[15px]">
          <Button className="h-[45px] bg-border-divide-grey">
            <TextIconContainer
              icon={<DownloadIcon width="13" height="15.73" />}
              iconSide={"left"}
              text={"PREUZMI SADRŽAJ"}
              gap="16px"
              lineHeight="19px"
              fontWeight={600}
            />
          </Button>
          <div className="flex gap-[10px]">
            <Button className="h-[40px] w-[165px] bg-border-divide-grey">
              <p className="text-sm leading-[19px] tracking-[-0.4px]">
                Pošalji u sustav
              </p>
            </Button>
            <Button className="h-[40px] w-[165px] bg-border-divide-grey">
              <p className="text-sm leading-[19px] tracking-[-0.4px]">
                Pošalji u CMS
              </p>
            </Button>
          </div>
        </div>
        <div className="mt-[30px] flex flex-col gap-[15.1px]">
          <Button className="h-[45px] bg-black-lighter">
            <TextIconContainer
              icon={<ShoppingCartIcon width="14" height="14" />}
              iconSide={"left"}
              text={"DODAJ U KOŠARICU"}
              gap="25px"
              lineHeight="16px"
              fontWeight={500}
              textColor="white"
            />
          </Button>
          <Button className="h-[45px] border border-solid border-black-lighter">
            <TextIconContainer
              icon={<DownloadIcon width="12" height="14" />}
              iconSide={"left"}
              text={"Preuzmi pregledni primjerak"}
              gap="15px"
              lineHeight="19px"
            />
          </Button>
        </div>
        <Divider className="mb-[29.55px] mt-[39.35px]" />
        <div className="mb-[4px] flex flex-col gap-[30px]">
          {photo.notes.map((note, index) => {
            return (
              <InfoContainer
                key={index}
                title={"POSEBNE NAPOMENE"}
                marginBottom="2"
                className="w-[339px]"
              >
                <InfoContainerContent
                  key={index}
                  paragraph={note}
                  className="leading-[22px]"
                />
              </InfoContainer>
            );
          })}
        </div>
      </div>
    </div>
  );
}
