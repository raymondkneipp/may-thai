import type { IconType } from "react-icons";
import React from "react";

interface Props {
  children: React.ReactNode;
  icon: IconType;
  label: string;
}

export const Card: React.FC<Props> = ({ children, icon, label }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        {React.createElement(icon, { className: "text-red-600" })}
        <h2 className="text-lg font-bold">{label}</h2>
      </div>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
};
