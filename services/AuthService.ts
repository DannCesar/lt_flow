import { toast } from "sonner";

export class AuthService {
  async login(email: string, password: string) {
    await new Promise((r) => setTimeout(r, 500));

    if (email === "lt@app.com" && password === "@LTFlow") {
      return {
        token: "mock-token-lt",
        user: {
          id: 1,
          name: "Daniel Cesar",
          email: "lt@app.com",
        },
      };
    }

    toast.error(
      "Erro ao realizar login, verifique se seu e-mail ou senha estão corretos."
    );
    throw new Error("Credenciais inválidas");
  }

  async logout() {
    document.cookie = "token; path/; max-age=0"
    return true;
  }
}
