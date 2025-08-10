import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ICustomAvatarProps {
  name: string;
  src: string;
}
const CustomAvatar = ({ name, src }: ICustomAvatarProps) => {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
