import { cva } from "class-variance-authority"

const defaultStyles =
    "outline-none focus:ring-4 ring-blue-300 transition-all placeholder:text-primary/90 p-4 rounded-md w-full"

export const inputVariants = cva(defaultStyles)
