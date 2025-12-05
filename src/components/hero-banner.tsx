export function HeroBanner() {
  const imageUrl =
    "https://release-main.myshopify.com/cdn/shop/files/pexels-james-superschoolnews-349383308-21338240_1.jpg?v=1736779194&width=1800";

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <img
        src={imageUrl}
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center gap-4 justify-center h-full px-6 md:px-16 text-white">
        <span className="text-sm">
          Premium quality products selected for you
        </span>
        <h1 className="text-4xl md:text-6xl">Bold a desing</h1>
        <a
          href="/products"
          className="border border-white rounded-full px-6 py-3 text-xs max-w-40 transition-colors hover:bg-white hover:text-foreground"
        >
          DESCUBRA MAIS
        </a>
      </div>
    </section>
  );
}
