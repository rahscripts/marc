import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Marc Louvin",
  description: "Learning Frontend by building landing page of marc louvin apps",
};

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gabarito.className} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full scroll-smooth flex flex-col">{children}</body>
    </html>
  );
}
