type PhotoPreviewContainerProps = {
  url: string;
};

export default function PhotoPreviewContainer({
  url,
}: PhotoPreviewContainerProps) {
  return (
    <div className="bg-bg-color max-w-[956px] flex justify-center">
      <img
        src={url}
        className="mt-[42px] mb-[65px] h-[527px] w-[300px] sm:w-[448px] object-cover"
      />
    </div>
  );
}
