import React from "react";

const SvgNube = ({ color = "#f6f2e6", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 239.82 119.91"
    {...props}
  >
    <path
      d="M119.91,0H0c0,66.22,53.69,119.91,119.91,119.91h119.91C239.82,53.69,186.13,0,119.91,0Z"
      fill={color}
    />
  </svg>
);

export default SvgNube;
