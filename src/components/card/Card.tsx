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
        <div className="bg-stone-200 inline-flex p-2.5 rounded-2xl">
          {React.createElement(icon, { className: "w-5 h-5 text-red-600" })}
        </div>
        <h2 className="text-lg font-bold">{label}</h2>
      </div>
      {children}
    </div>
  );
};
