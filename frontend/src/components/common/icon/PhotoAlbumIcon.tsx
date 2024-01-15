import React from "react";

export default function PhotoAlbumIcon({
  className,
  color = "black",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.024 11.536L10 10L8 13H17L13.5 8L11.024 11.536Z" fill={color} />
      <path
        d="M9.503 9C10.3331 9 11.006 8.32709 11.006 7.497C11.006 6.66692 10.3331 5.994 9.503 5.994C8.67292 5.994 8 6.66692 8 7.497C8 8.32709 8.67292 9 9.503 9Z"
        fill={color}
      />
      <path
        d="M19 2H6C4.794 2 3 2.799 3 5V19C3 21.201 4.794 22 6 22H21V20H6.012C5.55 19.988 5 19.806 5 19C5 18.194 5.55 18.012 6.012 18H21V4C21 2.897 20.103 2 19 2ZM19 16H5V5C5 4.194 5.55 4.012 6 4H19V16Z"
        fill={color}
      />
    </svg>
  );
}
