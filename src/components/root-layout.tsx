import React from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Inter } from "next/font/google";
import { cn } from "../lib/utils";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <main className={cn("flex flex-col", inter.className)}>
      <SiteHeader />
      <section className="flex-1">{children}</section>
      <SiteFooter />
    </main>
  );
}
