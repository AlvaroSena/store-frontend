import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

const steps = [
  {
    step: 1,
    title: "Entrega",
  },
  {
    step: 2,
    title: "Pagamento",
  },
  {
    step: 3,
    title: "Confirmação",
  },
];

export function CheckoutSteps() {
  return (
    <div className="space-y-8 text-center">
      <Stepper defaultValue={2}>
        {steps.map(({ step, title }) => (
          <StepperItem
            className="not-last:flex-1 max-md:items-start"
            key={step}
            step={step}
          >
            <StepperTrigger className="rounded max-md:flex-col">
              <StepperIndicator />
              <div className="text-center md:text-left">
                <StepperTitle>{title}</StepperTitle>
              </div>
            </StepperTrigger>
            {step < steps.length && (
              <StepperSeparator className="max-md:mt-3.5 md:mx-4" />
            )}
          </StepperItem>
        ))}
      </Stepper>
    </div>
  );
}
