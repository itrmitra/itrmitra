import { cva } from "class-variance-authority"

const defaultStyles =
    "h-12 rounded-lg transition-all font-bold flex items-center text-sm md:text-base disabled:bg-gray-400 disabled:text-primary"

const variantStyles = {
    filled: "bg-brand text-white hover:bg-brand/90 hover:shadow-md hover:-translate-y-1",
    outlined: "border-2 border-brand hover:bg-brand hover:text-white",
    link: "hover:border-b-2",
    icon: "aspect-square rounded-full hover:bg-brand hover:text-white outline-none",
}

const sizeStyles = {
    default: "px-4 py-2 md:px-6 md:py-2 text-sm md:text-base w-fit",
    icon: "p-0 grid place-items-center",
}

export const buttonVariants = cva(defaultStyles, {
    variants: {
        variant: variantStyles,
        size: sizeStyles,
    },
    defaultVariants: {
        variant: "filled",
        size: "default",
    },
})
