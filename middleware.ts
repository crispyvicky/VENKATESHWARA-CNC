export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    // Admin UI is handled in-page; protect only APIs
    "/api/media/upload",
    "/api/customers/:path*",
    "/api/jobs/:path*",
    "/api/payments/:path*",
    "/api/invoices/:path*",
    "/api/export/:path*",
    "/api/admin/:path*",
  ],
};


