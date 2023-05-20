import { Inter } from "next/font/google";
import { cn } from "../lib/utils";
import { buttonVariants } from "../components/ui/button";
import LandingSection from "../components/info-sections/landing-section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={cn("", inter.className)}>
      <LandingSection />
    </main>
  );
}
