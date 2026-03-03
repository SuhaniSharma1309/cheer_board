import DailyJoyMissions from "@/app/_components/dashboard/DailyJoyMissions";
import MonthlyJoyCalendar from "@/app/_components/dashboard/MonthlyJoyCalendar";

export default function DailyJoyPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-white">
        🌟 Daily Joy Missions
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <DailyJoyMissions />
        <MonthlyJoyCalendar />
      </div>
    </div>
  );
}