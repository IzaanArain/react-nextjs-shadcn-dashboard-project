import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { SidebarTrigger } from "../ui/sidebar";
import { CustomSidebarTrigger } from "./sidebar/custom-sidebar-trigger";
import UserMenu from "./user-menu";

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* LEFT */}
      <CustomSidebarTrigger />
      {/* RIGHT */}
      <div className="flex items-center gap-4">
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
