import { ProductMoreInfo } from "@/components/product-more-info";
import { QuantityButton } from "@/components/quantity-button";
import { SizeRadioButtons } from "@/components/size-radio-buttons";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";

export function Product() {
  return (
    <>
      <Header />
      <div className="p-4 lg:p-8 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-8">
          <div
            className="
          flex gap-2 overflow-x-auto snap-x snap-mandatory
          [&>img]:snap-center [&>img]:w-full
          lg:grid lg:grid-cols-2 lg:overflow-visible lg:snap-none
        "
          >
            <img
              src="https://release-main.myshopify.com/cdn/shop/files/Greenlongwoolcoat-4.jpg?v=1709375742&width=1280"
              alt="Product"
              className="object-cover shrink-0 w-full"
            />
            <img
              src="https://release-main.myshopify.com/cdn/shop/files/Greenlongwoolcoat-1.jpg?v=1709375742&width=1320"
              alt="Product"
              className="object-cover shrink-0 w-full"
            />
          </div>

          <div className="flex flex-col gap-8">
            <h1 className="text-xl font-semibold text-primary">
              Sobretudo verde longo
            </h1>
            <span className="text-primary">R$ 80,00</span>
            <p className="text-sm">
              This black blazer dress is a versatile addition to any wardrobe.
              With its sleek design and classic color, this dress is perfect for
              both formal and casual occasions. Made with high-quality
              materials, it offers comfort and style. Elevate your fashion game
              with this must-have piece.
            </p>

            <div className="w-full">
              <SizeRadioButtons />
              <div className="flex flex-row gap-4 my-8">
                <QuantityButton />
                <Button className="rounded-full text-xs w-full">
                  Adicionar ao carrinho
                </Button>
              </div>
              <Button className="rounded-full text-xs w-full" variant="outline">
                COMPRAR AGORA
              </Button>
            </div>
          </div>
        </div>

        <div className="py-8">
          <ProductMoreInfo />
        </div>
      </div>
    </>
  );
}
