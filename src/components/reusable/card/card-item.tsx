import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TCardItem } from "@/types";
import Image from "next/image";
import React from "react";
import CustomImage from "../custom-image";
import { Badge } from "@/components/ui/badge";

interface ICardItemProps {
  data: TCardItem<string>;
}

const CardItem = ({ data }: ICardItemProps) => {
  const image = data?.image;
  const title = data?.title || "";
  const count = data?.count ? data.count / 1000 : 0;
  const badgeContent = data?.badge || "";
  return (
    <Card className="flex-row items-center justify-between gap-4 p-4">
      {/* CARD IMAGE */}
      {/* <CustomImage src={image} alt={image} /> */}
      <div className={cn("w-12 h-12 rounded-sm relative overflow-hidden")}>
        <Image src={image} alt={title} fill className={cn("object-cover")} />
      </div>
      <CardContent className="flex-1 p-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Badge variant="secondary">{badgeContent}</Badge>
      </CardContent>
      <CardFooter className="p-0">{count}K</CardFooter>
    </Card>
  );
};

export default CardItem;
