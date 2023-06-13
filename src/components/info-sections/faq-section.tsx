import { faqs } from "../../data/faq"
import { cn } from "../../lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordian"
import { headingVariants } from "../ui/heading"

export default function FaqSection() {
    return (
        <div className="flex flex-col items-center px-8 py-12 md:min-h-screen md:px-12">
            <h1 className={cn(headingVariants())}>Frequently Asked Questions</h1>
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
