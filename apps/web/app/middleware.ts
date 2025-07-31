import { useQuery } from "convex/react";
import { authClient } from "@workspace/auth/client";
import { NextRequest } from "next/server";
import { api } from "@workspace/api";
import { betterFetch } from "@better-fetch/fetch";
import { createAuth } from "@workspace/auth/server";

type Session = ReturnType<typeof createAuth>["$Infer"]["Session"];
const getSession = async (request: NextRequest) => {
  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        cookie: request.headers.get("cookie") ?? "",
        origin: request.nextUrl.origin,
      },
    }
  );

  return session;
};

const loginRoutes = ["/auth"];

export async function middleware(request: NextRequest) {}
