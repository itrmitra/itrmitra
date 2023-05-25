import { faqs } from "../../data/faq"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordian"

export default function FaqSection() {
    return (
        <div className="flex flex-col px-8 py-12 md:min-h-screen md:px-12">
            <h1 className="mx-auto mb-8  text-center text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                Frequently Asked Questions
            </h1>
            <div className="mx-auto w-full lg:w-3/4">
                <Accordion type="multiple">
                    {faqs.map((item) => (
                        <AccordionItem key={item.question} value={item.question}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
