import { useState } from "react";
import { UserRound } from "lucide-react";
import { CartSheet } from "./cart-sheet";
import { useScroll } from "@/hooks/useScroll";
import { SearchSheet } from "./search-sheet";

interface HeaderProps {
  enableTransition?: boolean;
}

export function Header({ enableTransition }: HeaderProps) {
  const scrolled = useScroll();

  const [open, setOpen] = useState(false);

  return (
    <header
      className={`shadow-sm w-full sticky top-0 z-30 h-20 transition-colors duration-300 text-accent ${scrolled ? "bg-background text-foreground" : enableTransition ? "bg-foreground/95" : "bg-background text-foreground"}`}
    >
      <div className="px-4 mx-auto h-20 flex items-center justify-between">
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center group"
        >
          <span
            className={`absolute h-0.5 w-6 ${scrolled ? "bg-neutral-900" : "bg-white"} rounded transition-all duration-300 ${
              open ? "rotate-45 translate-y-0" : "-translate-y-1.5"
            }`}
          />

          <span
            className={`absolute h-0.5 w-6 ${scrolled ? "bg-neutral-900" : "bg-white"} rounded transition-all duration-300 ${
              open ? "-rotate-45 translate-y-0" : "translate-y-1.5"
            }`}
          />
        </button>

        <nav className="hidden md:flex flex-row items-center gap-4 text-sm w-80">
          <a
            href="/"
            className={`relative inline-block
                           before:absolute before:bottom-0 before:left-0 before:h-px before:w-full
                           before:origin-left before:scale-x-0 ${scrolled ? "before:bg-neutral-900" : enableTransition ? "before:bg-white" : "before:bg-neutral-900"} before:transition-transform before:duration-270
                           hover:before:scale-x-100`}
          >
            INÍCIO
          </a>
          <a
            href=""
            className={`relative inline-block
                           before:absolute before:bottom-0 before:left-0 before:h-px before:w-full
                           before:origin-left before:scale-x-0 ${scrolled ? "before:bg-neutral-900" : enableTransition ? "before:bg-white" : "before:bg-neutral-900"} before:transition-transform before:duration-270
                           hover:before:scale-x-100`}
          >
            SHOP
          </a>
          <a
            href=""
            className={`relative inline-block
                           before:absolute before:bottom-0 before:left-0 before:h-px before:w-full
                           before:origin-left before:scale-x-0 ${scrolled ? "before:bg-neutral-900" : enableTransition ? "before:bg-white" : "before:bg-neutral-900"} before:transition-transform before:duration-270
                           hover:before:scale-x-100`}
          >
            DESTAQUES
          </a>
          <a
            href=""
            className={`relative inline-block
                           before:absolute before:bottom-0 before:left-0 before:h-px before:w-full
                           before:origin-left before:scale-x-0 ${scrolled ? "before:bg-neutral-900" : enableTransition ? "before:bg-white" : "before:bg-neutral-900"} before:transition-transform before:duration-270
                           hover:before:scale-x-100`}
          >
            CONTATO
          </a>
        </nav>

        <a href="/" className="text-2xl transition-all hover:opacity-70">
          release
        </a>

        <div className="flex flex-row items-center justify-end gap-4 w-20 lg:w-80">
          <SearchSheet />
          <a href="/login" className="transition-all hover:opacity-70">
            <UserRound size={18} strokeWidth={1.5} />
          </a>
          <CartSheet />
          {/*<a href="/cart" className="transition-all hover:opacity-70">
            <ShoppingBag size={18} strokeWidth={1.5} />
          </a>*/}
        </div>
      </div>
    </header>
  );
}
