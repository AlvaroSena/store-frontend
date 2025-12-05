import { PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const items = [
  {
    content:
      "This black blazer dress is a versatile addition to any wardrobe. With its sleek design and classic color, this dress is perfect for both formal and casual occasions. Made with high-quality materials, it offers comfort and style. Elevate your fashion game with this must-have piece.",
    id: "1",
    title: "Descrição",
  },
  {
    content:
      "Entrega: Envio rápido e seguro para todo o Brasil. Reembolso: Se não estiver satisfeito, devolva o produto em até 30 dias para obter um reembolso completo.",
    id: "2",
    title: "Entrega & Reembolso",
  },
];

export function ProductMoreInfo() {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-2xl text-primary">Mais informações</h2>
      <Accordion className="w-full" collapsible defaultValue="3" type="single">
        {items.map((item) => (
          <AccordionItem className="py-2" key={item.id} value={item.id}>
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left font-semibold text-[15px] text-sm leading-6 outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                {item.title}
                <PlusIcon
                  aria-hidden="true"
                  className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                  size={16}
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="pb-2 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
