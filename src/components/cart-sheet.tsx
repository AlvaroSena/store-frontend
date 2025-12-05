import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag } from "lucide-react";
import { CartItem } from "./cart-item";

export function CartSheet() {
  const isEmpty = true;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" className="text-text p-0 m-0 hover:opacity-70">
          <ShoppingBag size={18} strokeWidth={1.5} />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle className="text-2xl text-primary">Carrinho</SheetTitle>
          <Separator className="my-4" />
        </SheetHeader>
        <div
          className={`grid flex-1 auto-rows-min gap-6 px-4 ${isEmpty ? "overflow-hidden" : "overflow-y-scroll"}`}
        >
          {isEmpty ? (
            <div className="flex items-center justify-center h-screen">
              <p className="text-3xl text-primary">
                Carrinho está{" "}
                <span className="font-secondary italic">vazio</span>
              </p>
            </div>
          ) : (
            <div className="grid gap-3">
              <CartItem />
            </div>
          )}
        </div>
        {!isEmpty && (
          <>
            <Separator />
            <SheetFooter className="flex flex-col">
              <div className="flex flex-row items-center justify-between my-4">
                <span className="text-primary">Subtotal</span>
                <span className="text-primary text-2xl font-semibold">
                  R$ 80,00
                </span>
              </div>

              <div className="flex flex-row gap-4">
                <SheetClose asChild className="w-full">
                  <Button variant="outline" className="text-xs rounded-full">
                    VER CARRINHO
                  </Button>
                </SheetClose>
                <Button type="submit" className="w-full text-xs rounded-full">
                  FINALIZAR
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
