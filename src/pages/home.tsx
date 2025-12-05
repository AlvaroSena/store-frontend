import { Header } from "@/components/header";
import { HeroBanner } from "@/components/hero-banner";
import { OfferBanner } from "@/components/offer-banner";
import { ProductCard } from "@/components/product-card";

export function Home() {
  return (
    <>
      <OfferBanner />
      <Header />
      <HeroBanner />

      <div className="px-8 py-16">
        <h1 className="text-5xl text-primary my-8">Acabaram de chegar</h1>
        <ProductCard />
      </div>
    </>
  );
}
