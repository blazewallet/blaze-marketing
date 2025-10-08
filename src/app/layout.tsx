import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLAZE - Lightning Fast Crypto Wallet",
  description: "The fastest, most feature-rich crypto wallet on earth. Lightning-fast transactions, built-in swapping, and cashback rewards in one beautiful app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

