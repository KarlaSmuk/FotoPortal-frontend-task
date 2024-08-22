type PhotoPreviewContainerProps = {
  url: string;
};

export default function PhotoPreviewContainer({
  url,
}: PhotoPreviewContainerProps) {
  return (
    <img
      src={url}
      className="absolute mt-[42px] ml-[254px] w-[448px] h-[527px] object-cover"
    />
  );
}
