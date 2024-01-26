import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

function ListUserHome() {
  return (
    <div className="flex items-center ">
      <Button
        variant={"secondary"}
        className="hidden rounded-full bg-foreground-muted hover:bg-stone-500/10 font-semibold py-6 md:flex items-center justify-center"
      >
        List your home
      </Button>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="hover:bg-transparent">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex  flex-col  gap-1 p-1 w-40 md:w-52 z-20">
          <Button className="md:hidden w-full rounded-full bg-foreground-muted text-black hover:bg-stone-500/10">
            List your home
          </Button>
          <Link href={"?modal=login"}>
            <Button className="w-full rounded-full bg-foreground-muted text-black hover:bg-stone-500/10">
              Login
            </Button>
          </Link>
          <Link href={"?modal=signup"}>
            <Button variant={"destructive"} className="w-full rounded-full">
              Sign up
            </Button>
          </Link>
        </PopoverContent>
      </Popover>
    </div>
  );
}
export default ListUserHome;
