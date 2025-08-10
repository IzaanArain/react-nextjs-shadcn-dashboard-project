import DashboardLayout from "@/components/layouts/dashboard-layout";
import React, { FC, PropsWithChildren } from "react";

const layout: FC<PropsWithChildren> = ({ children }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default layout;
