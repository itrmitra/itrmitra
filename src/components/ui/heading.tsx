import { cva } from "class-variance-authority"

const defaultStyles = "text-center md:text-left"

const variantStyles = {
    main: "tracking-tighter leading-tight font-extrabold mb-8",
    subtext: "font-normal",
    subheading: "mb-8 font-light tracking-tight",
}

const sizeStyles = {
    large: "text-4xl md:text-5xl lg:text-6xl",
    normal: "text-2xl md:text-3xl lg:text-4xl",
    subtext: "text-sm md:text-base lg:text-lg",
}

export const headingVariants = cva(defaultStyles, {
    variants: {
        variant: variantStyles,
        size: sizeStyles,
    },
    defaultVariants: {
        variant: "main",
        size: "large",
    },
})
