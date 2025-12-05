import { AddressForm } from "@/components/address-form";
import { CheckoutSteps } from "@/components/checkout-steps";

export function Checkout() {
  return (
    <div className="flex flex-col lg:grid grid-cols-2">
      <div className="bg-white flex flex-col p-8 h-screen">
        <CheckoutSteps />

        <div className="my-8">
          <AddressForm />
        </div>
      </div>
    </div>
  );
}
