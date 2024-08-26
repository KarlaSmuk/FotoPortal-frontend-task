import { SizesData } from "../../../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import OptionText from "../OptionText/OptionText.component";

type OptionContainerProps = {
  option: SizesData;
};

export default function OptionContainer({ option }: OptionContainerProps) {
  return (
    <div className="flex justify-between px-[20px] py-[15px]">
      <div className="flex gap-[6px]">
        <input
          type="radio"
          className="border-black-lighter mt-0.5 h-[14px] w-[14px] appearance-none rounded-full border text-center"
        />
        <label>
          <OptionText text={option.size} />
          <p className="mt-[3px] text-xs font-medium leading-[16px] text-text-grey">{`${option.type} (${option.width}x${option.height})`}</p>
        </label>
      </div>
      <OptionText text={`${option.price}KN`} />
    </div>
  );
}
