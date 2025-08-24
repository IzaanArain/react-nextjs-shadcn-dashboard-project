import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import EditUserInfoForm from "./forms/edit-user-info-form";
import { IUser } from "@/types";

interface IUserInfoProps {
  user: IUser | undefined;
}
const UserInfo = ({ user }: IUserInfoProps) => {
  const username = user?.username || "";
  const email = user?.email || "";
  const phone = user?.phone || "";
  const location = user?.location || "";
  const role = user?.role || "";
  const joinedAt = user?.createdAt || "";
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">User Information</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Edit User</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="mb-4">Edit User</SheetTitle>
              <SheetDescription asChild>
                <EditUserInfoForm user={user} />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      {/* DISPLAY USER INFO */}
      <div className="space-y-4 mt-4">
        <div className="flex flex-col gap-2 mb-8">
          <p className="text-sm text-muted-foreground">Profile Completion</p>
          <Progress value={66} />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Username:</span>
          <span>{username}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Email:</span>
          <span>{email}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Phone:</span>
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Location:</span>
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Role:</span>
          <Badge>{role}</Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Joined on {joinedAt}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
