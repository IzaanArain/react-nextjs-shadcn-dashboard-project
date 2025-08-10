"use client";

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import CustomLogo from "../custom-logo";

const CustomSidebarHeader = () => {
  // const { open } = useSidebar();
  return (
    <SidebarHeader className="py-4">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            {/* LOGO LINK */}
            <Link href={"/dashboard"}>
              <Image
                src={"/lama-logo.svg"}
                alt="lama-logo"
                width={20}
                height={20}
              />
              <span className="font-bold font-mono">!ZAAN/DEV</span>
              {/* <CustomLogo
                label={"ZAAN DEV"}
                src={"/lama-logo.svg"}
                alt={"lama-logo"}
                isOpen={open}
              /> */}
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};

export default CustomSidebarHeader;
