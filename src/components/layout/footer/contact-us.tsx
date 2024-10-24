import { Accordion,AccordionItem,AccordionTrigger,AccordionContent } from "@/components/ui/accordion";


export default function ContactUsFooterMenu() {
  return (
    <div>
        <div className="block md:hidden">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="Contact Us">
                    <AccordionTrigger className="w-full">CONTACT US</AccordionTrigger>
                    <AccordionContent className="w-full">
                        <ContactUsFooterContent />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        <div className="hidden md:block">
            <div className="flex flex-col space-y-3 items-start justify-start">
                <h3 className="text-lg font-semibold">CONTACT US</h3>
                <ContactUsFooterContent />
            </div>
        </div>
    </div>
  )
}

function ContactUsFooterContent() {
  return (
    <div className="flex flex-col space-y-5 items-start justify-start">
        <div className="flex flex-col space-y-1 items-start justify-start">
            <p className="text-sm text-wrap ">Address: No:190/A,</p>
            <p className="text-sm text-wrap ">Praneeth County</p>
            <p className="text-sm text-wrap ">Patelguda, Hyderabad</p>
            <p className="text-sm text-wrap ">Telangana, India</p>
        </div>
        <div className="flex flex-col space-y-1 items-start justify-start">
            <p className="text-sm text-wrap">Email: theglamstyle@gmail.com</p>
        </div>
        <div className="flex flex-col space-y-1 items-start justify-start">
            <p className="text-sm text-wrap">Phone: +91-9959026542</p>
        </div>
    </div>
  )
}