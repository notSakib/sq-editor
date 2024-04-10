import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Providers from "@/components/common/providers";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "Atlan",
  description: "SQL editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} min-h-screen bg-background antialiased`}
      >
        <Providers>
          <TooltipProvider> {children}</TooltipProvider>
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
