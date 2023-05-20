import { buttonVariants } from "../ui/button";

export default function LandingSection() {
  return (
    <div className="min-h-screen grid grid-cols-8">
      <div className="col-span-1"></div>
      <div className="col-span-3 my-auto">
        <h1 className="font-extrabold text-6xl tracking-tighter leading-tight mb-4">
          Best Digital Agency Whole Online Today
        </h1>
        <p className="text-lg mb-8">
          We help clients with their taxations and whole tax filing process.
        </p>
        <div className="flex">
          <button className={buttonVariants()}>Write us a query</button>
        </div>
      </div>
      <div className="col-span-4 my-auto">
        <img src="/personal-finance.svg" />
      </div>
    </div>
  );
}
