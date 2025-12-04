"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/AuthService";

import ButtonComponent from "../components/Shadcn/Button";
import { useForm } from "react-hook-form";
import { Form } from "../components/Shadcn/ui/form";
import { FormInput } from "../components/Shadcn/FormInput";
import { ChartNoAxesCombinedIcon, Eye, Mail } from "lucide-react";

export default function LoginPage() {
  const [tokenToSave, setTokenToSave] = useState<string | null>(null);
  const router = useRouter();
  const authService = new AuthService();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (tokenToSave) {
      document.cookie = `token=${tokenToSave}; path=/; max-age=86400`;
      router.push("/");
    }
  }, [tokenToSave, router]);

  async function handleLogin(values: any) {
    try {
      const { token } = await authService.login(values.email, values.password);
      setTokenToSave(token); 
    } catch {}
  }

    return (
    <div className="min-h-screen bg-[#1B192B] flex flex-col items-center justify-center px-6 text-white">
      <div className="flex items-center gap-3 mb-5">
        <ChartNoAxesCombinedIcon width={38} height={34} />
        <span className="goudy text-3xl">LTFlow</span>
      </div>
      <p className="text-sm text-gray-300 mb-8 max-w-xs text-center">
        Bem vindo, informe seu email e senha para acessar sua conta.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="flex flex-col gap-5 w-[300px]"
        >
          <FormInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Digite seu email"
            type="email"
            icon={Mail}
          />

          <FormInput
            control={form.control}
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            type={"password"}
            icon={Eye}
          />

          <ButtonComponent
            type="submit"
            className="w-full bg-[#6563FF] hover:bg-[#5453e6] transition-colors text-white py-2 rounded-md"
          >
            Login
          </ButtonComponent>
        </form>
      </Form>
    </div>
  );
}
