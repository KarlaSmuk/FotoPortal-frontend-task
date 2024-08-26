type PhotoPreviewContainerProps = {
  url: string;
};

export default function PhotoPreviewContainer({
  url,
}: PhotoPreviewContainerProps) {
  return (
    <div className="flex max-w-[956px] justify-center bg-bg-color">
      <img
        src={url}
        className="mb-[65px] mt-[42px] h-[527px] w-[300px] object-cover sm:w-[448px]"
      />
    </div>
  );
}
