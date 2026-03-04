"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
const today = new Date().toISOString().split("T")[0];

type DailyJoyData = {
  [date: string]: {
    completed: string[];
    score: number;
  };
};

const missions = [
  "Appreciate a student",
  "Write one positive classroom moment",
  "Take a 2-minute breathing break",
  "Do a 30-minute digital detox",
  "Call a friend or colleague",
];

export default function DailyJoyMissions() {
  const { user } = useUser();
  const [completed, setCompleted] = useState<string[]>([]);


    // ✅ Load saved data on page load
useEffect(() => {
  if (!user?.publicMetadata) return;

  const metadata = user.publicMetadata as {
    dailyJoy?: DailyJoyData;
  };

  const saved = metadata.dailyJoy?.[today]?.completed??[];

  if (saved && saved.length !== completed.length) {
      setCompleted(saved);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // ✅ Save to Clerk when toggled
  const toggleMission = async (mission: string) => {
    let updated: string[];

    if (completed.includes(mission)) {
      updated = completed.filter((m) => m !== mission);
    } else {
      updated = [...completed, mission];
    }

    setCompleted(updated);

    const score = updated.length * 10;

    await fetch("/api/update-daily-joy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: today,
        completed: updated,
        score,
      }),
    });
    await user?.reload();
  };

  const score = completed.length * 10;
  const progress = (completed.length / missions.length) * 100;

  return (
    // <div className="space-y-8">
    <div className="grid md:grid-cols-2 gap-8">

      {/* Score Card */}
      <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-xl overflow-hidden" style={{ backgroundImage: "url('/dashboard-bg.jpg')" }}>

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" /> */}
  
        {/* Background Glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl" />

        <div className="relative z-10"></div>
        <h2 className="text-xl font-semibold text-white mb-3">
          Today&apos;s Joy Score
        </h2>

        <div className="flex items-center justify-between mb-2">
          <span className="text-4xl font-bold text-emerald-400">
            {score}
          </span>
          <span className="text-white/60 text-sm">
            {completed.length} / {missions.length} completed
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Missions List */}
      <div className="grid gap-4">
        {missions.map((mission) => {
          const isDone = completed.includes(mission);

          return (
            <div
              key={mission}
              onClick={() => toggleMission(mission)}
              className={`cursor-pointer rounded-xl p-5 border transition-all duration-300
              ${
                isDone
                  ? "bg-emerald-500/10 border-emerald-400/40"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <p
                  className={`text-sm md:text-base ${
                    isDone ? "text-emerald-300" : "text-white/80"
                  }`}
                >
                  {mission}
                </p>

                {isDone && (
                  <CheckCircle2
                    className="text-emerald-400"
                    size={20}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion Message */}
      {completed.length === missions.length && (
        <div className="bg-emerald-500/10 border border-emerald-400/30 p-4 rounded-xl text-emerald-300 text-center animate-pulse">
          🎉 Amazing! You completed all your joy missions today!
        </div>
      )}
    </div>
  );
}