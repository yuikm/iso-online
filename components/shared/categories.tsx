import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

const cats = [
  "ISO-45001",
  "ISO-2700",
  "ISO-9001",
  "ISO-2301",
  "ISO-1777",
  "ISO-2555",
  "ISO-4555",
  "ISO-7555",
];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === index &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={index}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
