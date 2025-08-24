import { LucideIcon } from "lucide-react";

export enum ListTypeEnum {
  POPULAR_CONTENT = "POPULAR_CONTENT",
  LATEST_TRANSACTIONS = "LATEST_TRANSACTIONS",
}

export enum USER_TYPE_ENUM {
  ADMIN = "admin",
  USER = "user",
}

export type TCardItem<T> = {
  id: number;
  title: string;
  badge: T;
  image: string;
  count: number;
};

export interface IUserBadges {
  id: string;
  icon: LucideIcon;
  iconClass: string;
  label: string;
  desc: string;
}

export interface IUser {
  username: string;
  email: string;
  phone: string;
  location: string;
  role: USER_TYPE_ENUM;
  createdAt: string;
}
