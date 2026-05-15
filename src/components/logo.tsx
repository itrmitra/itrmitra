import Link from "next/link"
import Image from "next/image"

export function Logo() {
    return (
        <Link href="/" className="flex items-center justify-center">
            <Image
                src="/aboutus/itrmitra_logo.png"
                alt="ITR Mitra Logo"
                width={132}
                height={56}
                className="object-contain"
                priority
            />
        </Link>
    )
}
