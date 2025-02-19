import type { Metadata } from "next";
import { Inknut_Antiqua } from "next/font/google";
import "./globals.css";
import BackgroundMusic from "./components/BackgroundMusic";

const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Luteamo - sos la mas linda",
  description: "pa la mas linda de toda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inknutAntiqua.className}>
        {children}
        <BackgroundMusic />
      </body>
    </html>
  );
}
