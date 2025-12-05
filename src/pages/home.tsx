import { Header } from "@/components/header";
import { HeroBanner } from "@/components/hero-banner";
import { OfferBanner } from "@/components/offer-banner";

export function Home() {
  return (
    <>
      <OfferBanner />
      <Header />
      <HeroBanner />

      <div className="h-[500px]">asdasd</div>
    </>
  );
}
