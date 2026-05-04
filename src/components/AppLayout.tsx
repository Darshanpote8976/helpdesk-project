import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import TopBar from "./TopBar";
import { useState } from "react";
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
export default function AppLayout() {
  return (
    <div className="flex min-h-screen">
      <AppSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex-1 ml-60 flex flex-col">
        <TopBar setIsSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1 p-6 overflow-auto animate-fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
