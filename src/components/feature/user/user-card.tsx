import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const UserCard = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Avatar className="size-12">
          <AvatarImage src={"https://github.com/shadcn.png"} />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-semibold">John Doe</h1>
      </div>
      <p className="text-sm text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores optio
        quod ipsa numquam reiciendis debitis ullam odio iure harum culpa, error
        voluptatem voluptas quaerat aut quam corporis, asperiores inventore
        adipisci id deleniti quis. Quidem quos ad sit debitis cumque nulla
        inventore, optio aliquid quibusdam a molestias, quas error, repellendus
        sapiente.
      </p>
    </div>
  );
};

export default UserCard;
