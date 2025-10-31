import * as React from "react";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface SkillProps {
  name: string;
  color?: string; // bisa "bg-blue-500" ATAU "#f4f4f4"
  icon: IconType;
}

export const Skill: React.FC<SkillProps> = ({ name, icon: Icon, color }) => {
  const isCustomColor = color?.startsWith("#") || color?.startsWith("rgb");

  return (
    <div
      className={cn(
        "flex flex-row items-center p-1 md:px-2 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
        !isCustomColor && (color || "bg-white") // tailwind class kalau bukan hex/rgb
      )}
      style={isCustomColor ? { backgroundColor: color } : undefined}
    >
      <Icon className="md:h-5 md:w-5 h-3 w-3 mr-2 text-[#8c6350]" />
      <span className="text-xs md:text-lg  text-gray-800">{name}</span>
    </div>
  );
};
