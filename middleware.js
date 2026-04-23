import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes:['/','/rent','/agents','/view-listing/:path*']
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
