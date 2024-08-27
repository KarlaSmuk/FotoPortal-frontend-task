import { SizesData } from "../../../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import Text from "../../../Text/Text.component";
import OptionText from "../OptionText/OptionText.component";

type OptionContainerProps = {
  option: SizesData;
};

export default function OptionContainer({ option }: OptionContainerProps) {
  return (
    <div className="flex justify-between px-5 py-[15px]">
      <div className="flex flex-col gap-[3px]">
        <OptionText text={option.size} />
        <Text
          type="secondary"
          variant="grey"
        >{`${option.type} (${option.width}x${option.height})`}</Text>
      </div>
      <Text>{`${option.price}KN`}</Text>
    </div>
  );
}
