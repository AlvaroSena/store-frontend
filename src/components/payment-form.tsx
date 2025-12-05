import { useId, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { usePaymentInputs } from "react-payment-inputs";
import images, { type CardImages } from "react-payment-inputs/images";

import { CreditCardIcon } from "lucide-react";

export function PaymentForm() {
  const id = useId();
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
  } = usePaymentInputs();
  const couponInputRef = useRef<HTMLInputElement>(null);
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  return (
    <form className="space-y-5">
      <h1 className="text-2xl text-primary font-semibold">Finalizar Compra</h1>
      <div className="space-y-4">
        <RadioGroup className="grid-cols-2" defaultValue="yearly">
          {/* Monthly */}
          <label className="relative flex cursor-pointer flex-col gap-1 rounded-md border border-input px-4 py-3 shadow-xs outline-none transition-[color,box-shadow] has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50">
            <RadioGroupItem
              className="sr-only after:absolute after:inset-0"
              id="radio-monthly"
              value="monthly"
            />
            <p className="font-medium text-foreground text-sm">Correios</p>
            <p className="text-muted-foreground text-sm">R$ 24,00</p>
          </label>
          {/* Yearly */}
          <label className="relative flex cursor-pointer flex-col gap-1 rounded-md border border-input px-4 py-3 shadow-xs outline-none transition-[color,box-shadow] has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50">
            <RadioGroupItem
              className="sr-only after:absolute after:inset-0"
              id="radio-yearly"
              value="yearly"
            />
            <div className="inline-flex items-start justify-between gap-2">
              <p className="font-medium text-foreground text-sm">Jadlog</p>
              <Badge>Mais rápido</Badge>
            </div>
            <p className="text-muted-foreground text-sm">R$ 8,00</p>
          </label>
        </RadioGroup>
        <div className="*:not-first:mt-2">
          <Label htmlFor={`name-${id}`}>Name on card</Label>
          <Input id={`name-${id}`} required type="text" />
        </div>
        <div className="*:not-first:mt-2">
          <legend className="font-medium text-foreground text-sm">
            Card Details
          </legend>
          <div className="rounded-md shadow-xs">
            <div className="relative focus-within:z-10">
              <Input
                className="peer rounded-b-none pe-9 shadow-none [direction:inherit]"
                {...getCardNumberProps()}
              />
              <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                {meta.cardType ? (
                  <svg
                    className="overflow-hidden rounded-sm"
                    {...getCardImageProps({
                      images: images as unknown as CardImages,
                    })}
                    width={20}
                  />
                ) : (
                  <CreditCardIcon aria-hidden="true" size={16} />
                )}
              </div>
            </div>
            <div className="-mt-px flex">
              <div className="min-w-0 flex-1 focus-within:z-10">
                <Input
                  className="rounded-e-none rounded-t-none shadow-none [direction:inherit]"
                  {...getExpiryDateProps()}
                />
              </div>
              <div className="-ms-px min-w-0 flex-1 focus-within:z-10">
                <Input
                  className="rounded-s-none rounded-t-none shadow-none [direction:inherit]"
                  {...getCVCProps()}
                />
              </div>
            </div>
          </div>
        </div>
        {!showCouponInput ? (
          <button
            className="text-sm underline hover:no-underline"
            onClick={() => setShowCouponInput(true)}
            type="button"
          >
            + Add coupon
          </button>
        ) : (
          <div className="*:not-first:mt-2">
            <Label htmlFor={`coupon-${id}`}>Coupon code</Label>
            <Input
              id={`coupon-${id}`}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter your code"
              ref={couponInputRef}
              value={couponCode}
            />
          </div>
        )}
      </div>
      <Button type="button" className="w-full rounded-full">
        Pagar agora
      </Button>
    </form>
  );
}
