import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "px-6 py-2 rounded-md transition-transform duration-200 hover:shadow-md hover:-translate-y-1 font-bold",
  {
    variants: {
      variant: {
        filled: "bg-primary text-secondary hover:bg-primary/90",
        outlined: "border-2 border-secondary",
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
