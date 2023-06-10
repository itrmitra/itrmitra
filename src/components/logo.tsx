import Link from "next/link"

export function Logo() {
    return (
        <Link href="/" className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-extrabold tracking-tighter">ITR Mitra</h1>
            <p className="text-xs italic">Your ITR, Our Expertise</p>
        </Link>
    )
}
