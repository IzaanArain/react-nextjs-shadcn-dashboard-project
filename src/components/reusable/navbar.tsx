import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { SidebarTrigger } from "../ui/sidebar";
import { CustomSidebarTrigger } from "./sidebar/custom-sidebar-trigger";
import UserMenu from "./user-menu";

const Navbar = () => {
  return (
    <nav className="p-4 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
      {/* LEFT */}
      <CustomSidebarTrigger className="self-end order-2 sm:self-auto sm:order-1" />
      {/* RIGHT */}
      <div className="flex items-center gap-4 self-end order-1 sm:self-auto sm:order-2">
        {/* LINKS */}
        <Link href={"/"}>Dashboard</Link>
        {/* THEME MENU */}
        <ThemeToggle />
        {/* USER MENU */}
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
