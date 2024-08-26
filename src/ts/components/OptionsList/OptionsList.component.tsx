import { SizesData } from "../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import OptionContainer from "./components/OptionContainer/OptionContainer.component";

type OptionsListProps = {
  title: string;
  options: SizesData[];
};

export default function OptionsList({ title, options }: OptionsListProps) {
  return (
    <div className="divide-border-divide-grey border-border-divide-grey-grey mx-[35px] mt-4 divide-y divide-solid rounded-[10px] border">
      <h5 className="pb-[16px] pl-[20px] pt-[15px] font-semibold leading-[21.79px] tracking-[-0.4px]">
        {title}
      </h5>
      {options.map((option, index) => {
        //for later will be better if the key is id
        return <OptionContainer key={index} option={option} />;
      })}
    </div>
  );
}
