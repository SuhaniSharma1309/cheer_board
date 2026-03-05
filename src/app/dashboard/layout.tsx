import Navbar from "@/components/hero/Navbar";
import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex justify-center px-4 h-full relative flex-col md:flex-row md:overflow-hidden">
      <Navbar
        variant="dashboard"
        links={[
          { name: "Check-In", href: "/dashboard" },
          { name: "Wellness", href: "/dashboard/wellness" },
          { name: "Joy Missions", href: "/dashboard/daily-joy" },
        ]}
      />

      <div className="flex grow sm:mt-28 flex-1 w-full md:overflow-y-auto sm:px-6 md:px-4 max-w-7xl justify-center">
        {children}
      </div>
    </div>
  );
}
