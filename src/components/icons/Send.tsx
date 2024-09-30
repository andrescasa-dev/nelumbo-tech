import React from "react";

function Send({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path d="M20.235 5.686c.432-1.195-.726-2.353-1.921-1.92L3.709 9.048c-1.199.434-1.344 2.07-.241 2.71l4.662 2.698 4.163-4.163a1 1 0 011.414 1.414L9.544 15.87l2.7 4.662c.638 1.103 2.274.957 2.708-.24l5.283-14.606z"></path>
    </svg>
  );
}

export default Send;
