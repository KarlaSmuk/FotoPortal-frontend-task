type DownloadIconProps = {
  width: string;
  height: string;
};

export default function DownloadIcon({ width, height }: DownloadIconProps) {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 9.25255L11.6907 7.94804L7.42857 12.1854V0.000732422H5.57143V12.1854L1.30929 7.93879L0 9.25255L6.5 15.7288L13 9.25255Z"
        fill="#212121"
      />
    </svg>
  );
}
