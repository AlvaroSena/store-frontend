import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function QuantityButton() {
  const [quantity, setQuantity] = useState(3);

  const decreaseVolume = () => setQuantity((prev) => Math.max(0, prev - 1));
  const increaseVolume = () => setQuantity((prev) => Math.min(6, prev + 1));

  return (
    <div
      aria-labelledby="volume-control"
      className="inline-flex items-center"
      role="group"
    >
      <span className="sr-only" id="volume-control">
        Volume Control
      </span>
      <Button
        aria-label="Decrease volume"
        className="rounded-full"
        disabled={quantity === 0}
        onClick={decreaseVolume}
        size="icon"
        variant="outline"
      >
        <MinusIcon aria-hidden="true" size={16} />
      </Button>
      <div
        aria-live="polite"
        className="flex items-center px-3 font-medium text-sm tabular-nums"
      >
        <span className="">{quantity}</span>
      </div>
      <Button
        aria-label="Increase volume"
        className="rounded-full"
        disabled={quantity === 6}
        onClick={increaseVolume}
        size="icon"
        variant="outline"
      >
        <PlusIcon aria-hidden="true" size={16} />
      </Button>
    </div>
  );
}
