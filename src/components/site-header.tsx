import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { useRouter } from "next/router";
import { MainNav } from "./main-nav";

const items = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
];

export function SiteHeader() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-40 border-b backdrop-blur-xl">
      <div className="container h-20 flex items-center justify-between">
        <h1 className="font-extrabold tracking-tighter text-2xl">ITR Mitra</h1>
        <MainNav items={items} currentHref={router.pathname} />
        <Link
          href="/contact"
          className={buttonVariants({ variant: "outlined" })}
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
