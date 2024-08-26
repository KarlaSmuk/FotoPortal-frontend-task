type CheckBoxProps = {
  labelText: string;
};

export default function CheckBox({ labelText }: CheckBoxProps) {
  return (
    <div className="ml-[35px] mt-[16px] flex gap-[6px]">
      <input
        type="checkbox"
        className="border-border-checkbox h-[19.91px] w-[20px] border"
      />
      <label>
        <p className="text-black-lighter text-sm leading-[19px]">{labelText}</p>
      </label>
    </div>
  );
}
