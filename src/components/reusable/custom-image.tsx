import { cn } from "@/lib/utils";
import Image from "next/image";

interface ICustomImageProps {
  containerClass?: string;
  imageClass?: string;
  width?: number;
  height?: number;
  alt: string;
  src?: string;
}

const CustomImage = ({
  containerClass,
  imageClass,
  width,
  height,
  alt,
  src,
}: ICustomImageProps) => {
  return (
    <div
      className={cn(
        "w-12 h-12 rounded-sm relative overflow-hidden",
        containerClass
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill
          className={cn("object-cover", imageClass)}
        />
      ) : (
        <div className={cn("w-12 h-12 rounded-sm")}>{alt}</div>
      )}
    </div>
  );
};

export default CustomImage;
