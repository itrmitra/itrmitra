import { cva } from "class-variance-authority"

export const buttonVariants = cva(
    "rounded-md transition-all duration-200 font-bold flex items-center",
    {
        variants: {
            variant: {
                filled: "bg-primary text-secondary hover:bg-primary/90 hover:shadow-md hover:-translate-y-1",
                outlined: "border-2 border-secondary hover:bg-secondary hover:text-gray-100",
                link: "hover:border-b-2",
                icon: "h-12 aspect-square rounded-full hover:bg-secondary hover:text-gray-100",
            },
            fillWidth: {
                true: "w-full",
            },
            size: {
                default: "px-4 py-2 md:px-6 md:py-2 text-sm md:text-base w-fit",
                icon: "p-0 grid place-items-center",
            },
        },
        defaultVariants: {
            variant: "filled",
            size: "default",
        },
    }
)
