import { convexAdapter } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import { betterAuth } from "better-auth";
import { betterAuthComponent, type GenericCtx } from "@wrapper-interface/api";

const siteUrl = process.env.BETTER_AUTH_SITE_URL;

export const createAuth = (ctx: GenericCtx): ReturnType<typeof betterAuth> =>
  betterAuth({
    baseURL: siteUrl,
    database: convexAdapter(ctx, betterAuthComponent),
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
    },
    plugins: [convex()],
  });
