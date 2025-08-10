import React from "react";
import { ThemeProvider } from "./theme-providers";
import CustomSidebarProvider from "./custom-sidebar-provider";

interface IProvidersProps {
  children: React.ReactNode;
}
const Providers = ({ children }: IProvidersProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <CustomSidebarProvider>{children}</CustomSidebarProvider>
    </ThemeProvider>
  );
};

export default Providers;
