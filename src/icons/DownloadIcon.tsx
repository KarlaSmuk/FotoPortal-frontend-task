type DownloadIconProps = {
  width: string;
  height: string;
};

export default function DownloadIcon({ width, height }: DownloadIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8.33832L10.7914 7.17715L6.85714 10.9489V0.103027H5.14286V10.9489L1.20857 7.16891L0 8.33832L6 14.103L12 8.33832Z"
        fill="#212121"
      />
    </svg>
  );
}
