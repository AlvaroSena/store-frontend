import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { AtSign } from "lucide-react";

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-4xl">Bem-vindo(a)!</h1>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Nome</FieldLabel>
          <Input id="name" type="text" placeholder="Digite seu nome" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="Digite seu email"
            required
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Senha</FieldLabel>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            required
          />
        </Field>
        <Field>
          <Button type="submit" className="rounded-full">
            Criar conta
          </Button>
        </Field>
        <FieldSeparator>Ou</FieldSeparator>
        <Field>
          <Button variant="outline" type="button" className="rounded-full">
            <AtSign />
            Entre com o Google
          </Button>
          <FieldDescription className="text-center">
            Já uma conta?{" "}
            <a href="/login" className="underline underline-offset-4">
              Entrar
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
