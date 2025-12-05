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

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-4xl">Bem-vindo(a) de volta!</h1>
        </div>
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
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esquecei a senha
            </a>
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
            Entrar na conta
          </Button>
        </Field>
        <FieldSeparator>Ou</FieldSeparator>
        <Field>
          <Button variant="outline" type="button" className="rounded-full">
            <AtSign />
            Entre com o Google
          </Button>
          <FieldDescription className="text-center">
            Não tem uma conta?{" "}
            <a href="/sign-up" className="underline underline-offset-4">
              Criar uma conta
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
