import { AppSidebar } from "@/components/reusable/sidebar/app-sidebar";
import Navbar from "@/components/reusable/navbar";
import React from "react";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: IDashboardLayoutProps) => {
  return (
    <div className="w-full flex">
      <AppSidebar />
      <main className="w-full">
        <Navbar />
        <div className="px-4">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
