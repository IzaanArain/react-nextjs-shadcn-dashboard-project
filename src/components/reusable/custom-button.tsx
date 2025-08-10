import { FC } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface ICustomButtonProps {
  disabled?: boolean;
  isRounded?: boolean;
  children: React.ReactNode;
  className?: string;
}

const CustomButton: FC<ICustomButtonProps> = ({
  children,
  isRounded,
  disabled,
  className,
}) => {
  return (
    <Button
      className={cn(
        `text-sm p-4`,
        className,
        disabled ? "bg-gray-500" : "bg-blue-500",
        isRounded && "rounded-full"
      )}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
