import { latestTransactionsList, popularContentList } from "@/constants/cards";
import { ListTypeEnum } from "@/types";
import CardItem from "./card-item";

interface ICardListProps {
  title: string;
  type: ListTypeEnum;
}

const CardList = ({ title, type }: ICardListProps) => {
  const list =
    type === ListTypeEnum.POPULAR_CONTENT
      ? popularContentList
      : latestTransactionsList;

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <CardItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
