import { IUserBadges } from "@/types";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  BadgeCheck,
  Candy,
  Citrus,
  Shield,
} from "lucide-react";

// Sidebar Items
export const sidebarItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

// Badge Items
export const userBadgesData: IUserBadges[] = [
  {
    id: "verified-user",
    icon: BadgeCheck,
    iconClass: "bg-blue-500/30 border-blue-500/50",
    label: "Verified User",
    desc: "This user has been verified by the admin.",
  },
  {
    id: "admin",
    icon: Shield,
    iconClass: "bg-green-800/30 border-green-800/50",
    label: "Admin",
    desc: "Admin users have access to all features and can manage users",
  },
  {
    id: "awarded",
    icon: Candy,
    iconClass: "bg-yellow-500/30 border-yellow-500/50",
    label: "Awarded",
    desc: "This user has been awarded in their contributions.",
  },
  {
    id: "popular",
    icon: Citrus,
    iconClass: "bg-orange-500/30 border-orange-500/50",
    label: "Popular",
    desc: "This user has been popular in the community.",
  },
];
