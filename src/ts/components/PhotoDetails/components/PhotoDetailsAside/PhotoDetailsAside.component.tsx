import DownloadIcon from "../../../../../icons/DownloadIcon";
import InfoIcon from "../../../../../icons/InfoIcon";
import ShoppingCartIcon from "../../../../../icons/ShoppingCartIcon";
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
      <div className="ml-[40px]">
        <TextIconContainer
          icon={<InfoIcon />}
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
        <CheckBox labelText={"Preuzmi s potpisom autora"} />
        <div className="mt-[39.09px] flex flex-col gap-[15px]">
          <Button color={"grey"} border={false} height={"45px"}>
            <TextIconContainer
              icon={<DownloadIcon />}
              iconSide={"left"}
              text={"PREUZMI SADRŽAJ"}
              gap="16px"
              lineHeight="19px"
              fontWeight={600}
            />
          </Button>
          <div className="flex gap-[10px]">
            <Button
              color={"grey"}
              border={false}
              width={"165px"}
              height={"40px"}
            >
              <p className="text-sm leading-[19px] tracking-[-0.4px]">
                Pošalji u sustav
              </p>
            </Button>
            <Button
              color={"grey"}
              border={false}
              width={"165px"}
              height={"40px"}
            >
              <p className="text-sm leading-[19px] tracking-[-0.4px]">
                Pošalji u CMS
              </p>
            </Button>
          </div>
        </div>
        <div className="mt-[30px] flex flex-col gap-[15.1px]">
          <Button color={"black"} border={false} height={"45px"}>
            <TextIconContainer
              icon={<ShoppingCartIcon />}
              iconSide={"left"}
              text={"DODAJ U KOŠARICU"}
              gap="25px"
              lineHeight="16px"
              fontWeight={500}
              textColor="white"
            />
          </Button>
          <Button color={"grey"} border={false} height={"45px"}>
            <TextIconContainer
              icon={<DownloadIcon />}
              iconSide={"left"}
              text={"Preuzmi pregledni primjerak"}
              gap="15px"
              lineHeight="19px"
            />
          </Button>
        </div>
        {/* divider */}
        <div className="border-border-divide-grey mb-[29.55px] mt-[39.35px] border border-solid" />
      </div>
    </div>
  );
}
