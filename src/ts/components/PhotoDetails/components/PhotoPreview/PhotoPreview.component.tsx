type PhotoPreviewProps = {
  url: string;
};

export default function PhotoPreview({ url }: PhotoPreviewProps) {
  return (
    <div className="flex justify-center bg-bg-color pb-[65px] pt-[42px]">
      <img
        src={url}
        className="h-[527px] w-[300px] object-cover lg:w-[448px]"
      />
    </div>
  );
}
