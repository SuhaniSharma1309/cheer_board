"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";

type DailyJoyData = {
  [date: string]: {
    completed: string[];
    score: number;
  };
};

const BADGES = [
  { days: 3, name: "🌱 Starter" },
  { days: 10, name: "🔥 Consistent" },
  { days: 30, name: "🏆 Dedicated" },
  { days: 90, name: "💎 Joy Champion" },
];

export default function MonthlyJoyCalendar() {
  const { user, isLoaded } = useUser();
  const [selectedDate, setSelectedDate] = useState(new Date());

  if (!isLoaded || !user) return null;

  const metadata = user.publicMetadata as {
    dailyJoy?: DailyJoyData;
  };

  const dailyJoy = metadata?.dailyJoy ?? {};

  const activeDays = Object.values(dailyJoy).filter(
    (entry) => entry.score > 0
  ).length;

  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const changeMonth = (direction: number) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(currentMonth + direction);
    setSelectedDate(newDate);
  };

  const monthName = selectedDate.toLocaleString("default", {
    month: "long",
  });

  return (
    <div className="relative rounded-2xl p-6 shadow-xl overflow-hidden border border-white/10 bg-cover bg-center" style={{ backgroundImage: "url('/dashboard-bg.jpg')" }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />
      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => changeMonth(-1)}
            className="text-white/60 hover:text-white transition"
          >
            ←
          </button>

          <h2 className="text-lg font-semibold text-white">
            {monthName} {currentYear}
          </h2>

          <button
            onClick={() => changeMonth(1)}
            className="text-white/60 hover:text-white transition"
          >
            →
          </button>
        </div>

        {/* 🏅 Badge Section */}
        <div className="mb-6">
          <h3 className="text-white font-semibold mb-2">
            ⭐ Achievements
          </h3>

          <div className="flex gap-3 flex-wrap">
            {BADGES.map((badge) => {
              const unlocked = activeDays >= badge.days;

              return (
                <div
                  key={badge.days}
                  className={`px-4 py-2 rounded-xl text-sm backdrop-blur-md border transition
                    ${
                      unlocked
                        ? "bg-emerald-500/20 border-emerald-400/40 text-white"
                        : "bg-white/5 border-white/10 text-white/40"
                    }
                  `}
                >
                  {badge.name}
                </div>
              );
            })}
          </div>

          {activeDays < 3 && (
            <p className="text-white/50 text-sm mt-2">
              Complete 3 joyful days to unlock your first badge 🌱
            </p>
          )}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;

            const dateKey = `${currentYear}-${String(
              currentMonth + 1
            ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

            const score = dailyJoy[dateKey]?.score || 0;

            let bgColor = "bg-white/5";

            if (score > 0 && score < 50)
              bgColor = "bg-emerald-500/30";

            if (score >= 50)
              bgColor = "bg-emerald-400";

            return (
              <div
                key={day}
                className={`h-8 w-8 rounded-md ${bgColor}
                flex items-center justify-center
                text-xs text-white/60 hover:scale-110 transition`}
                title={`Day ${day}: ${score} joy score`}
              >
                {day}
              </div>
            );
          })}
        </div>

        <div className="mt-4 text-sm text-white/60">
          🟢 Brighter = Higher joy score
        </div>
      </div>
    </div>
  );
}