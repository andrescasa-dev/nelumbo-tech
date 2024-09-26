import React from "react";

function Button({ label }: { label: string }) {
  return (
    <div className="bg-primary-400 text-white rounded-sm p-6">{label}</div>
  );
}

export default Button;
