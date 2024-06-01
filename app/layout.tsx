import type { Metadata } from "next";
import "./ui/globals.css";
import { PrimaryFont } from "./ui/font";

export const metadata: Metadata = {
  title: "Learnerborn",
  description: "Disney Lorcana inspired online Card game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={PrimaryFont.className}>{children}</body>
    </html>
  );
}
