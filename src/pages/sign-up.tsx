import { Header } from "@/components/header";
import { SignUpForm } from "@/components/sign-up-form";

export function SignUp() {
  return (
    <>
      <Header />
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="bg-muted relative hidden lg:block">
          <img
            src="https://release-main.myshopify.com/cdn/shop/files/nikola-sEoDT-h1zCI-unsplash_1.jpg?v=1737377882&width=1440"
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-sm">
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
