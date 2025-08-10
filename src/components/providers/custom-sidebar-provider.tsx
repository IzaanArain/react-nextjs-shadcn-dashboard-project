import React from "react";
import { cookies } from "next/headers";
import { SidebarProvider } from "../ui/sidebar";

const CustomSidebarProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>{children}</SidebarProvider>
  );
};

export default CustomSidebarProvider;
