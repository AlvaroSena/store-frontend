export function ProductCard() {
  return (
    <a href="/products" className="block group w-80 cursor-pointer">
      <div className="relative h-[400px] w-full overflow-hidden">
        <img
          src="https://release-main.myshopify.com/cdn/shop/files/Greenlongwoolcoat-4.jpg?v=1709375742&width=1280"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
        />
        <img
          src="https://release-main.myshopify.com/cdn/shop/files/Greenlongwoolcoat-1.jpg?v=1709375742&width=1320"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
      </div>
      <div className="flex flex-col gap-2 my-4">
        <span className="block text-sm font-semibold text-primary">
          SOBRETUDO VERDE LONGO
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-red-800 line-through">R$ 100,00</span>
          <span className="text-xs text-primary">R$ 80,00</span>
        </div>
      </div>
    </a>
  );
}
