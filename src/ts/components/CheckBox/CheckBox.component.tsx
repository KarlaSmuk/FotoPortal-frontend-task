type CheckBoxProps = {
  labelText: string;
};

export default function CheckBox({ labelText }: CheckBoxProps) {
  return (
    <div className="ml-[5px] mt-[15px] flex w-fit gap-[6px]">
      <input
        type="checkbox"
        className="h-[19.91px] w-[20px] border border-border-checkbox"
      />
      <label>
        <p className="text-sm leading-[19px] text-black-lighter">{labelText}</p>
      </label>
    </div>
  );
}
