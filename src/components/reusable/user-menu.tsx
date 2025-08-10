import { LogOut, Moon, Settings, SquareMenu, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CustomAvatar from "./custom-avatar";

const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CustomAvatar name={"CN"} src={"https://github.com/shadcn.png"} />
        {/* sr-only elements for screen readers */}
        <span className="sr-only">Open Menu</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={10}>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="!h-[1.2rem] !w-[1.2rem] mr-2" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="!h-[1.2rem] !w-[1.2rem] mr-2" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <LogOut className="!h-[1.2rem] !w-[1.2rem] mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
