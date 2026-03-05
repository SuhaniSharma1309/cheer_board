// Features.tsx
import React from "react";

const Features = () => {
  const cardsData = [
    {
      title: "Happiness Meter",
      description: "See how happy you are each day and celebrate small wins!",
      hoverbg: "/dashboard-bg.jpg",
      color: "#1B4332", // Forest Green
      href: "/dashboard",
    },
    {
      title: "Wellness",
      description:
        "Boost your energy and calm your mind with quick wellness hacks!",
      hoverbg: "/flower.jpg",
      color: "#065F46", // Emerald
      href: "/dashboard/wellness",
    },
    {
      title: "Joy Missions",
      description: "Fun mini-challenges to sprinkle joy into your busy day!",
      hoverbg: "/flower.jpg",
      color: "#0B3D2E", // Pine
      href: "/dashboard/daily-joy",
    },
  ];

  return (
    <div id="features" className="px-6 md:px-10 py-8 flex items-center justify-center flex-col max-w-7xl mx-auto my-8">
      
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Boost Your <span className="text-emerald-300">Workday</span>
        </h1>
        <p className="text-white/70 text-sm md:text-base">
          Discover tools designed to uplift teachers every day 💚
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="group relative block rounded-xl p-10 min-h-55 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer"
            style={{ backgroundColor: card.color,  }}
          >
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold">
              {card.title}
            </h3>

            {/* Description (Hidden until hover) */}
            <p className="absolute bottom-6 left-6 right-6 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {card.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Features;