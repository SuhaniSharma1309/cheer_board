import CardDemo from "@/components/ui/cards-demo-1";
import React from "react";

const Wellness = () => {
  const cardsData = [
    {
      title: "Breathing Exercise",
      description: "Take deep breaths to calm your mind.",
      image: "/wellness/breathing.jpg",
      hoverImage: "/wellness/breathing.gif",
      href: "https://youtu.be/blbv5UTBCGg?si=Pwd-J0cT8lk179UP",
    },
    {
      title: "Meditation",
      description: "Find inner peace through meditation.",
      image: "/wellness/meditation.jpg",
      hoverImage: "/wellness/meditation.gif",
      href: "https://youtu.be/j88aViUeHew?si=Jd0z6-mrPyrXVm50",
    },
    {
      title: "Desk Yoga",
      description:
        "Strengthen your busy life with yoga.",
      image: "/wellness/yoga.jpg",
      hoverImage: "/wellness/yoga.gif",
      href: "https://youtu.be/ihcBeW0eMWc?si=_zNtyBhiqkBo_t3y",
    },
    {
      title: "Music Therapy",
      description: "Listen to soothing music to relax.",
      image: "/wellness/music.jpg",
      hoverImage: "/wellness/music.gif",
      href: "https://youtu.be/d_U-69HwpRY?si=NF7x9REmtprr8nz9",
    },
  ];

  return (
    <div className="px-6 md:px-10 py-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Wellness <span className="text-emerald-300">Hub</span>
        </h1>
        <p className="text-white/70 text-sm md:text-base leading-relaxed">
          Take a moment to pause, breathe, and recharge. Explore simple
          practices designed to reduce stress, refresh your mind, and restore
          your energy during a busy day. Small breaks can make a big difference
          to your overall well-being.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {cardsData.map((card) => (
          <CardDemo key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Wellness;
