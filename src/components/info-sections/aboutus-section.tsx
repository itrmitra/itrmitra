import { CheckCircle, ArrowRight } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { cn } from "../../lib/utils";

export default function AboutUsSection() {
  return (
    <div className=" grid grid-cols-8 min-h-screen bg-[#ECF5CC]">
      <div className="col-span-4 my-auto">
        <img src="/team-working.svg" />
      </div>
      <div className="col-span-3 my-auto">
        <h2 className="font-semibold  text-lg text-secondary">ABOUT US</h2>
        <h1 className="font-extrabold text-6xl tracking-tighter leading-tight mb-8">
          We are here to make your tax filing process more easier!
        </h1>
        <ul className="text-lg mb-8 space-y-4">
          <li className="flex items-center gap-2">
            <CheckCircle />
            Convenient Processing
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle />
            Convenient Processing
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle />
            Convenient Processing
          </li>
        </ul>
        <div className="flex">
          <button className={cn(buttonVariants(), "gap-2")}>
            Know More <ArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
}
