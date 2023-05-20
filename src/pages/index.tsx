import { Metadata } from "next";
import LandingSection from "../components/info-sections/landing-section";
import AboutUsSection from "../components/info-sections/aboutus-section";

export const metadata: Metadata = {
  title: "ITR Mitra",
  description:
    "ITR Mitra helps in filing taxation and with the whole ITR filing process.",
};

export default function Home() {
  return (
    <>
      <title>ITR Mitra | Home</title>
      <LandingSection />
      <AboutUsSection />
    </>
  );
}
