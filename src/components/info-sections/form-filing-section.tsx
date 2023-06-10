import { useState } from "react"
import { buttonVariants } from "../ui/button"
import { sendEmail } from "../../lib/sendEmail"
import { cn } from "../../lib/utils"
import { inputVariants } from "../ui/input"
import { Info } from "lucide-react"

const sourceOfIncomeOptions = [
    "Salary/ Pension",
    "Rent Income / Home loan interest",
    "Business / Professional",
    "Capital gain from shares, Property, Mutual Funds",
    "Crypto Income/ Loss",
    "Future and Options",
    "Income from outside India",
    "Interest, Dividend, Lottery Income.",
]

const sourceOf = {
    console: {
        d: true,
        f: false,
    },
}

interface FormDataType {
    name: string
    email: string
    phone: string
    query: string
    type?: "FILE ITR" | "CONSULTANCY"
    sourceOfIncome: { [key: string]: boolean }
}

export default function FormFilingSection() {
    const [formState, setFormState] = useState<FormDataType>({
        name: "",
        email: "",
        phone: "",
        query: "",
        type: undefined,
        sourceOfIncome: {},
    })
    const [error, setError] = useState("")
    const [sourceOfIncomeError, setSourceOfIncomeError] = useState("")

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError((prev) => "")
        setSuccess((prev) => false)

        let nameRegex = /^[a-zA-Z]([-']?[a-zA-Z]+)*( [a-zA-Z]([-']?[a-zA-Z]+)*){1,2}$/
        if (!nameRegex.test(formState.name)) {
            console.log("Error Name")
            setError((prev) => "Name must contain a first name and a last name")
            return
        }

        let phoneNumberRegex = /^\d{10}$/
        if (!phoneNumberRegex.test(formState.phone)) {
            setError((prev) => "Invalid Phone Number")
            return
        }

        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!emailRegex.test(formState.email)) {
            setError((prev) => "Invalid Email")
            return
        }

        let queryRegex = /^[a-zA-Z0-9_\s]*$/
        if (!queryRegex.test(formState.query)) {
            setError((prev) => "Message must contain only letters and numbers")
            return
        }

        setLoading(true)

        const res = await sendEmail(formState)
        if (!res) setError("Could not send email. Please Try Again Later.")
        else {
            setSuccess(true)
            setFormState({
                name: "",
                email: "",
                phone: "",
                query: "",
                type: undefined,
                sourceOfIncome: {},
            })
        }
        setLoading(false)
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    const onSourceOfIncomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prev) => {
            const newValue = structuredClone(prev.sourceOfIncome)
            if (!event.target.checked) delete newValue[event.target.name]
            else newValue[event.target.name] = true
            return {
                ...prev,
                sourceOfIncome: newValue,
            }
        })
    }
    return (
        <div className="flex flex-col items-center bg-light-brand px-8 py-12 md:min-h-screen md:flex-row md:justify-between">
            <div className="flex-1">
                <img src="/mail.svg" className="h-52 md:mx-auto md:h-auto" alt="Sending Mail" />
            </div>
            <div className="z-0 mb-8 flex-1 sm:px-0 md:mb-0">
                <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tighter md:text-left md:text-5xl">
                    Connect me with <span className="inline-block">ITR Mitra</span>
                </h1>
                <form
                    onSubmit={onSubmit}
                    className="flex flex-col gap-4 text-sm md:w-3/4 md:text-base"
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullname" className="font-semibold">
                            Name *
                        </label>
                        <input
                            required
                            id="fullname"
                            name="name"
                            type="text"
                            value={formState.name}
                            placeholder="Full Name (required)"
                            onChange={onChange}
                            className={cn(inputVariants())}
                            maxLength={256}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullname" className="font-semibold">
                            Email *
                        </label>
                        <input
                            required
                            name="email"
                            type="text"
                            value={formState.email}
                            placeholder="Email (required)"
                            onChange={onChange}
                            className={cn(inputVariants())}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullname" className="font-semibold">
                            Phone Number *
                        </label>
                        <input
                            required
                            name="phone"
                            type="number"
                            value={formState.phone}
                            placeholder="Phone Number (required)"
                            onChange={onChange}
                            className={cn(inputVariants())}
                            minLength={10}
                            maxLength={10}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="query" className="font-semibold">
                            Message
                        </label>
                        <textarea
                            id="query"
                            name="query"
                            value={formState.query}
                            placeholder="Message"
                            onChange={onChange}
                            className={cn(inputVariants(), "max-h-32 overflow-hidden")}
                        />
                    </div>
                    {error.length > 0 && (
                        <p className="flex w-fit items-center gap-2 rounded-md bg-red-600 p-2 text-sm font-bold text-white shadow-sm">
                            <Info strokeWidth={2} className="h-6 w-6 text-white" />
                            {error}
                        </p>
                    )}
                    <div className="mb-2 flex gap-4 font-bold">
                        <div className="flex gap-2">
                            <input
                                required
                                id="fileitr"
                                type="radio"
                                name="type"
                                value="FILE ITR"
                                onChange={onChange}
                                checked={formState.type === "FILE ITR"}
                            />
                            <label htmlFor="fileitr" className="cursor-pointer font-semibold">
                                I want to file ITR
                            </label>
                        </div>
                        <div className="flex gap-2">
                            <input
                                required
                                id="consultancy"
                                type="radio"
                                name="type"
                                value="CONSULTANCY"
                                onChange={onChange}
                                checked={formState.type === "CONSULTANCY"}
                                className=""
                            />
                            <label htmlFor="consultancy" className="cursor-pointer font-semibold">
                                I need Consultancy
                            </label>
                        </div>
                    </div>

                    {formState.type === "FILE ITR" && (
                        <div>
                            <h1 className="mb-2 font-semibold">
                                Source Of Income{" "}
                                <span className="text-sm font-normal">(Required)</span>
                            </h1>
                            <p className="mb-4 text-sm font-semibold text-red-600">
                                {sourceOfIncomeError}
                            </p>
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                                {sourceOfIncomeOptions.map((item) => (
                                    <div className="flex items-start gap-2">
                                        <input
                                            id={item}
                                            type="checkbox"
                                            name={item}
                                            value={item}
                                            className="mt-1"
                                            checked={formState.sourceOfIncome[item]}
                                            onChange={onSourceOfIncomeChange}
                                        />
                                        <label htmlFor={item} className="inline-block">
                                            {item}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="space-y-4">
                        <button type="submit" className={buttonVariants()} disabled={loading}>
                            {loading ? "Loading..." : "Get Started"}
                        </button>
                        {success && (
                            <span className="block rounded-md bg-green-600 p-4 text-sm font-bold text-brand text-white shadow-lg">
                                Email sent successfully. Our experts will contact you soon.
                            </span>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}
