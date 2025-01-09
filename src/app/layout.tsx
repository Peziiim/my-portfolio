import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const Inter = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600']
});


export const metadata: Metadata = {
  title: "Meu portfolio",
  description: "",
};

export default function RootLayout({
  children,run
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Inter.variable} ${Inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
