import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "px-6 py-2 rounded-md transition-all duration-200 font-bold flex items-center",
  {
    variants: {
      variant: {
        filled:
          "bg-primary text-secondary hover:bg-primary/90 hover:shadow-md hover:-translate-y-1",
        outlined:
          "border-2 border-secondary hover:bg-secondary hover:text-gray-100",
        link: "hover:border-b-2",
      },
      fillWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  }
);
