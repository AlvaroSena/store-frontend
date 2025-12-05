import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app-routes";
import { OfferBanner } from "@/components/offer-banner";

export function App() {
  return (
    <BrowserRouter>
      <OfferBanner />
      <AppRoutes />
    </BrowserRouter>
  );
}
