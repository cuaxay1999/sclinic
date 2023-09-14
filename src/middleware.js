import { SSPA_LOCALE } from "@/utils/constants/config";
import { NextResponse, NextRequest } from "next/server";

export function middleware(request) {
  let locale = request.cookies.get("sspa-locale")?.value || "en";
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: "/",
};
