import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request:NextRequest){
    const header = request.headers.get("accept-language") ?? "";
    const locale = header.startsWith("pt") ? "pt" : "en";
    return NextResponse.redirect(new URL(`/${locale}`,request.url));
}
 

export const config = {
  matcher: "/",
};