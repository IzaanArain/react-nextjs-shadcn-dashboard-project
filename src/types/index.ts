export enum ListTypeEnum {
  POPULAR_CONTENT = "POPULAR_CONTENT",
  LATEST_TRANSACTIONS = "LATEST_TRANSACTIONS",
}

export type TCardItem<T> = {
  id: number;
  title: string;
  badge: T;
  image: string;
  count: number;
};
