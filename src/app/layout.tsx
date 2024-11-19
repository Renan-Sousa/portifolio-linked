import type { Metadata } from "next";
import Navbar from "@/components/navegation/navbar/navbar";
import { roboto } from "@/app/fonts"
import "./styles.css";

export const metadata: Metadata = {
  title: "Meu Portifólio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body> 
    </html>
  );
}
