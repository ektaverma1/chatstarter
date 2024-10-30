import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "./convex-client-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><ClerkProvider dynamic><ConvexClientProvider>{children}</ConvexClientProvider></ClerkProvider></body>
    </html>
  );
}
