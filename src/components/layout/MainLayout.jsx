import { Outlet } from "react-router-dom";
import { TopNavBar } from "./TopNavBar";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col w-full">
      {/* Horizontal Top Navigation Bar */}
      <TopNavBar />
      <div className="flex-1 flex flex-col w-full">
        <main className="flex-1 p-4 md:p-8 overflow-x-hidden w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
