import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const { pathname } = req.nextUrl;

  const isLoginPage = pathname === "/login";

  const isProtectedRoute =
    pathname === "/" || pathname.startsWith("/transactions");

  //  Tentando acessar rota protegida sem token → redireciona para login
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  //  Usuário já logado tentando ir para login → manda para "/"
  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// Só roda middleware nessas rotas
export const config = {
  matcher: ["/", "/transactions/:path*", "/login"],
};
