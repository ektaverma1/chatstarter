"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";

// const client = new ConvexClient(process.env.NEXT_PUBLIC_CONVEX_URL);
const client = new ConvexReactClient(
  "https://abundant-bulldog-239.convex.cloud"
);

export function ConvexClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ConvexProvider client={client}>{children}</ConvexProvider>;
}
