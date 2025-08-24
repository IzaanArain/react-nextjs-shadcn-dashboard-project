import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
// import { BadgeCheck } from "lucide-react";
import { userBadgesData } from "@/constants";
import { cn } from "@/lib/utils";

const UserBadges = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold">User Badges</h1>
      <div className="flex gap-4 mt-4">
        {userBadgesData?.map((badge) => (
          <HoverCard key={badge.id}>
            <HoverCardTrigger>
              <badge.icon
                size={36}
                className={cn("rounded-full border-1 p-2", badge.iconClass)}
              />
            </HoverCardTrigger>
            <HoverCardContent>
              <h1 className="font-bold mb-2">{badge.label}</h1>
              <p className="text-sm text-muted-foreground">{badge.desc}</p>
            </HoverCardContent>
          </HoverCard>
        ))}
        {/* <HoverCard>
          <HoverCardTrigger>
            <BadgeCheck
              size={36}
              className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <h1 className="font-bold mb-2">Verified User</h1>
            <p className="text-sm text-muted-foreground">
              This user has been verified by the admin.
            </p>
          </HoverCardContent>
        </HoverCard> */}
      </div>
    </div>
  );
};

export default UserBadges;
