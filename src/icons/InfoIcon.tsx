type InfoIconProps = {
  width: string;
  height: string;
};

export default function InfoIcon({ width, height }: InfoIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.51172 4.8053C7.96875 4.8053 8.32031 4.44202 8.32031 4.00842C8.32031 3.56311 7.96875 3.20569 7.51172 3.20569C7.05469 3.20569 6.69727 3.56311 6.69727 4.00842C6.69727 4.44202 7.05469 4.8053 7.51172 4.8053ZM6.7793 11.9069H8.23828V5.69592H6.7793V11.9069Z"
        fill="#212121"
      />
      <circle
        cx="7.5"
        cy="7.50061"
        r="6.9"
        stroke="#212121"
        strokeWidth="1.2"
      />
    </svg>
  );
}
