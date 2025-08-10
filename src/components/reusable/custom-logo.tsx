import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface ICustomLogoProps {
  containerClass?: string;
  imageContainerClass?: string;
  imageClass?: string;
  labelClass?: string;
  label?: string;
  width?: number;
  height?: number;
  alt?: string;
  src?: string;
  isOpen?: boolean;
}
const CustomLogo = ({
  containerClass,
  imageContainerClass,
  imageClass,
  labelClass,
  label,
  isOpen = true,
  width = 20,
  height = 20,
  alt = "logo",
  src,
}: ICustomLogoProps) => {
  return (
    <div className={cn("flex gap-2 items-center", containerClass)}>
      <div className={cn(imageContainerClass)}>
        {!!src && (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={cn(imageClass)}
          />
        )}
      </div>
      {!!label && isOpen && <span className={cn(labelClass)}>{label}</span>}
    </div>
  );
};

export default CustomLogo;
