import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "./convex-client-provider";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><ClerkProvider dynamic><ConvexClientProvider>{children}<Toaster /></ConvexClientProvider></ClerkProvider></body>
    </html>
  );
}
