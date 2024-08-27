import { SizesData } from "../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import OptionContainer from "./components/OptionContainer/OptionContainer.component";

type OptionsListProps = {
  title: string;
  options: SizesData[];
};

export default function OptionsList({ title, options }: OptionsListProps) {
  return (
    <div className="border-border-divide-grey-grey mt-4 divide-y divide-solid divide-border-divide-grey rounded-[10px] border">
      <p className="pb-[16px] pl-[20px] pt-[15px] font-semibold leading-[21.79px] tracking-[-0.4px]">
        {title}
      </p>
      {options.map((option, index) => {
        //for later will be better if the key is id
        return <OptionContainer key={index} option={option} />;
      })}
    </div>
  );
}
