import { useEffect, useState } from "react";
import { Separator } from "./ui/separator";

interface NavMenuProps {
  open: boolean;
}

export function NavMenu({ open }: NavMenuProps) {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTransition(true);
    }, 150);
  }, [open]);

  return (
    <div
      className={`absolute bg-white w-full transition-opacity ${transition ? "opacity-100" : "opacity-0"} h-screen top-20 z-50 left-0 overflow-hidden md:hidden`}
    >
      <nav className="text-foreground font-medium p-4 flex flex-col gap-6">
        <a href="/" className="transition-opacity hover:opacity-70">
          INÍCIO
        </a>
        <Separator />
        <a href="/" className="transition-opacity hover:opacity-70">
          SHOP
        </a>
        <Separator />
        <a href="/" className="transition-opacity hover:opacity-70">
          DESTAQUES
        </a>
        <Separator />
        <a href="/" className="transition-opacity hover:opacity-70">
          CONTATO
        </a>
      </nav>
    </div>
  );
}
