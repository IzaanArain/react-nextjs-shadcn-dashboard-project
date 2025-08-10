"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "../../ui/button";

export function CustomSidebarTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button variant={"outline"} onClick={toggleSidebar}>
      Custom Button
    </Button>
  );
}
