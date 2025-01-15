"use client";
import { ReactNode, useState } from "react";
import { HiDotsVertical } from "react-icons/hi"; // Importing a 3-dot icon
import Container from "@/src/components/Ui/Container";
import Sidebar from "@/src/components/Ui/Sidebar";
import { DashboardNavbar } from "@/src/components/Ui/DashboardNav/DashboardNav";

export default function Layout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Container>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-8 gap-4">
        {/* 3-Dot Menu for Small Screens */}
        <div className="flex lg:hidden items-center fixed top-0 w-full mx-auto z-50 mb-8 left-0 justify-between p-4 bg-gray-50 shadow-md">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <button
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
            className="p-2 rounded-md text-gray-700 hover:bg-gray-200"
          >
            <HiDotsVertical className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="absolute z-50 rounded top-0 left-0 w-3/4 max-w-xs h-full bg-gray-200 text-black shadow-lg lg:relative lg:col-span-2 lg:block">
            <Sidebar />
            {/* Close Button */}
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 text-black lg:hidden"
            >
              ✕
            </button>
          </div>
        )}
        <div className="lg:col-span-2 hidden lg:block">
          <Sidebar />
        </div>
        {/* Main content area */}
        <div className="col-span-1 lg:col-span-6 bg-gray-50 p-4 lg:p-6 rounded-lg shadow-lg">
          <DashboardNavbar />
          <div className="mt-16">{children}</div>
        </div>
      </div>
    </Container>
  );
}
