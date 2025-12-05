import { useEffect, useState } from "react";
import { Search, ShoppingBag, UserRound } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-30 h-20 transition-colors duration-300 ${scrolled ? "bg-white text-foreground" : "bg-neutral-900 text-white"}`}
    >
      <div className="max-w-[1120px] px-4 mx-auto h-20 flex items-center justify-between">
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
            href=""
            className={`relative inline-block
                           before:absolute before:bottom-0 before:left-0 before:h-px before:w-full
                           before:origin-left before:scale-x-0 ${scrolled ? "before:bg-neutral-900" : "before:bg-white"} before:transition-transform before:duration-270
                           hover:before:scale-x-100`}
          >
            INÍCIO
          </a>
          <a
            href=""
            className={`relative inline-block
                         before:absolute before:bottom-0 before:left-0 before:h-px before:w-full
                         before:origin-left before:scale-x-0 ${scrolled ? "before:bg-neutral-900" : "before:bg-white"} before:transition-transform before:duration-270
                         hover:before:scale-x-100`}
          >
            SHOP
          </a>
          <a
            href=""
            className={`relative inline-block
                         before:absolute before:bottom-0 before:left-0 before:h-px before:w-full
                         before:origin-left before:scale-x-0 ${scrolled ? "before:bg-neutral-900" : "before:bg-white"} before:transition-transform before:duration-270
                         hover:before:scale-x-100`}
          >
            DESTAQUES
          </a>
          <a
            href=""
            className={`relative inline-block
                         before:absolute before:bottom-0 before:left-0 before:h-px before:w-full
                         before:origin-left before:scale-x-0 ${scrolled ? "before:bg-neutral-900" : "before:bg-white"} before:transition-transform before:duration-270
                         hover:before:scale-x-100`}
          >
            CONTATO
          </a>
        </nav>

        <a href="/" className="text-2xl">
          release
        </a>

        <div className="flex flex-row items-center justify-center gap-4 w-20 lg:w-80">
          <a
            href="/cart"
            className={`relative inline-block
                         before:absolute before:bottom-0 before:left-0 before:h-px before:w-full
                         before:origin-left before:scale-x-0 ${scrolled ? "before:bg-neutral-900" : "before:bg-white"} before:transition-transform before:duration-270
                         hover:before:scale-x-100`}
          >
            <Search size={18} strokeWidth={1.5} />
          </a>
          <a
            href="/cart"
            className={`relative inline-block
                         before:absolute before:bottom-0 before:left-0 before:h-px before:w-full
                         before:origin-left before:scale-x-0 ${scrolled ? "before:bg-neutral-900" : "before:bg-white"} before:transition-transform before:duration-270
                         hover:before:scale-x-100`}
          >
            <UserRound size={18} strokeWidth={1.5} />
          </a>
          <a
            href="/cart"
            className={`relative inline-block
                         before:absolute before:bottom-0 before:left-0 before:h-px before:w-full
                         before:origin-left before:scale-x-0 ${scrolled ? "before:bg-neutral-900" : "before:bg-white"} before:transition-transform before:duration-270
                         hover:before:scale-x-100`}
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </header>
  );
}
