"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";

interface ICustomSidebarTriggerProps {
  className?: string;
}

export function CustomSidebarTrigger({
  className,
}: ICustomSidebarTriggerProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant={"outline"}
      onClick={toggleSidebar}
      className={cn(className)}
    >
      Custom Button
    </Button>
  );
}
