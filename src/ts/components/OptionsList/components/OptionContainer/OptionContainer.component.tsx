import { SizesData } from "../../../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import OptionText from "../OptionText/OptionText.component";

type OptionContainerProps = {
  option: SizesData;
};

export default function OptionContainer({ option }: OptionContainerProps) {
  return (
    <div className="flex justify-between px-5 py-[15px]">
      <div className="flex flex-col gap-[3px]">
        <OptionText text={option.size} />
        <p className="h-[16px] text-xs font-medium leading-[16px] text-text-grey">{`${option.type} (${option.width}x${option.height})`}</p>
      </div>
      <OptionText text={`${option.price}KN`} />
    </div>
  );
}
