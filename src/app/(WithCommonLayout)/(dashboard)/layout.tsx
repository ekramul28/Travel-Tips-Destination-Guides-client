/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
"use client";
import { ReactNode, useState } from "react";
import { HiDotsVertical } from "react-icons/hi"; // 3-dot menu icon
import Sidebar from "@/src/components/Ui/Sidebar";
import { DashboardNavbar } from "@/src/components/Ui/DashboardNav/DashboardNav";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen ">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 bg-gray-200">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 z-50 w-50  h-full bg-slate-200 shadow-lg lg:hidden">
          <Sidebar />
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4  text-black"
            aria-label="Close Sidebar"
          >
            ✕
          </button>
        </div>
      )}

      {/* Toggle Button for Mobile */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
          className="p-2 text-gray-700 bg-gray-800 hover:bg-gray-700 rounded-md"
        >
          <HiDotsVertical className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Fixed Navbar */}
        <div className="fixed top-0 blog lg:hidden left-0 w-full bg-gray-50 shadow-md z-40">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-semibold">
              <Link href="/">Dashboard</Link>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div>
          <DashboardNavbar />
          <div className="mt-20 lg:mt-0 p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
