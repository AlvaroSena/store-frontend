import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import { SearchInput } from "./search-input";

export function SearchSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" className="text-text p-0 m-0 hover:opacity-70">
          <Search size={18} strokeWidth={1.5} />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle className="text-2xl text-primary">Pesquisa</SheetTitle>
          <Separator className="my-4" />
        </SheetHeader>
        <div
          className={`grid flex-1 auto-rows-min gap-6 px-4 overflow-y-scroll`}
        >
          <SearchInput />
        </div>
      </SheetContent>
    </Sheet>
  );
}
