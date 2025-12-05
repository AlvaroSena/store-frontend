import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function CartDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Seu carrinho</DrawerTitle>
          </DrawerHeader>
          <div className="">
            <div className="mt-3">
              <p className="text-5xl text-center text-primary">
                Está um pouco{" "}
                <span className="font-secondary italic">vazio</span> aqui
              </p>
            </div>
          </div>
          <DrawerFooter>
            {/*<Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>*/}
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
