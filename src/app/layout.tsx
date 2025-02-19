import type { Metadata } from "next";
import { Inknut_Antiqua } from "next/font/google";
import "./globals.css";

const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Luteamo - A Love Letter",
  description: "A special message for my girlfriend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inknutAntiqua.className}>{children}</body>
    </html>
  );
}
