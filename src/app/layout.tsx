import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Providers from "@/components/common/providers";

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
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
