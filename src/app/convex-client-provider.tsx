"use client";

import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useAuth } from "@clerk/nextjs";

// const client = new ConvexClient(process.env.NEXT_PUBLIC_CONVEX_URL);
const client = new ConvexReactClient(
  "https://abundant-bulldog-239.convex.cloud"
);

export function ConvexClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ConvexProviderWithClerk client={client} useAuth={useAuth}>{children}</ConvexProviderWithClerk>;
}
