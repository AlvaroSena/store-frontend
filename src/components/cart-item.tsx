import { QuantityButton } from "./quantity-button";
import { Button } from "./ui/button";

export function CartItem() {
  return (
    <div className="flex flex-row items-start justify-between">
      <div className="flex flex-row gap-4">
        <img
          src="https://release-main.myshopify.com/cdn/shop/files/Greenlongwoolcoat-4.jpg?v=1709375742&width=1280"
          className="w-24 h-28 object-cover"
        />
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold">SOBRETUDO VERDE LONGO</h3>
          <span className="text-xs text-muted-foreground">R$ 80,00</span>
          <span className="text-xs text-muted-foreground">M</span>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full items-end">
        <QuantityButton />
        <Button
          variant="link"
          className="p-0 m-0 text-muted-foreground font-normal text-xs"
        >
          Excluir
        </Button>
        <span className="text-xs text-muted-foreground">R$ 80,00</span>
      </div>
    </div>
  );
}
