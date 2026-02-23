import React from "react";
import { Map } from "lucide-react";

import { cn } from "@/lib/utils";

interface ItemProps {
  emoji: string;
  position: string;
}

interface HeroCardProps {
  destinations?: ItemProps[];
  treasures?: ItemProps[];
  className?: string;
}

const HeroSectionTextHover: React.FC<HeroCardProps> = ({ className }) => {
  const destinations = [
    { emoji: "🪂", position: "-left-10 -top-4 group-hover:-translate-y-6" },
    { emoji: "🏖️", position: "-left-16 top-4 group-hover:-translate-x-6" },
    { emoji: "🚁", position: "right-0 -top-6 group-hover:-translate-y-6" },
    { emoji: "🏯", position: "right-[-20px] top-6 group-hover:translate-x-6" },
  ];
  const treasures = [
  { emoji: "📚", position: "-left-12 -top-6 group-hover:-translate-y-6" },
  { emoji: "☕", position: "-left-16 top-2 group-hover:-translate-x-6" },
  { emoji: "😌", position: "right-0 -top-6 group-hover:-translate-y-6" },
  { emoji: "✨", position: "right-10 top-2 group-hover:translate-x-6" },
];

  return (
    <div
      className={cn(
        "storybook-fix py-12å relative min-h-[100px] w-full rounded-2xl  md:min-h-[200px]",
        className,
      )}
    >
      <div className="mb-2 flex flex-col items-center justify-center gap-3">
        <div className="flex flex-col items-center justify-center font-bold leading-tight">

          <div className="flex items-center gap-2 text-4xl sm:text-6xl md:text-7xl">
            <span className="text-gray-400">FEEL</span>

            <div className="group relative">
              <span className="text-zinc-500 transition-colors group-hover:text-sky-400">
                ALIVE
              </span>

              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {destinations.map((dest, index) => (
                  <span
                    key={index}
                    className={cn(
                      "pointer-events-none absolute text-2xl transition-transform duration-500 group-hover:scale-110 md:text-5xl",
                      dest.position,
                    )}
                  >
                    {dest.emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2 text-4xl sm:text-6xl md:text-7xl whitespace-nowrap">
            <span className="text-gray-400">WITH</span>

            <div className="group relative">
              <span className="text-zinc-500 transition-colors group-hover:text-orange-500 whitespace-nowrap">
                CHEER&nbsp;BOARD
              </span>

              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {treasures.map((gem, index) => (
                  <span
                    key={index}
                    className={cn(
                      "pointer-events-none absolute text-2xl transition-transform duration-500 group-hover:scale-110 md:text-5xl",
                      gem.position,
                    )}
                  >
                    {gem.emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer rounded-3xl bg-zinc-700 px-4 py-2 font-mono tracking-tighter hover:bg-orange-500 mt-4">
          Begin your journey
        </button>
      </div>
    </div>
  );
};

export default HeroSectionTextHover;
