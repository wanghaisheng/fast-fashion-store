import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { SocialMediaHandles } from "@/lib/constants";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Facebook, LucideYoutube, Youtube, YoutubeIcon } from "lucide-react";



export default function SignupAndSave() {

    return (
        <div className="">
            <div className="block md:hidden">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="Signup and Save">
                        <AccordionTrigger className="w-full">SIGNUP AND SAVE</AccordionTrigger>
                        <AccordionContent className="w-full">
                            <SignUpAndSaveContent />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="hidden md:block">
                <div className="flex flex-col space-y-3 items-start justify-start">
                    <h3 className="text-lg font-semibold">SIGNUP AND SAVE</h3>
                    <SignUpAndSaveContent />
                </div>
            </div>
        </div>
    )
}


function SignUpAndSaveContent() {
    return (
        <div className="flex flex-col space-y-5 items-start justify-start">
            <p className="text-sm text-wrap w-3/4">Subscribe to get special offers, free giveaways, and once in a lifetime deals.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" />
                <Button type="submit">Subscribe</Button>
            </div>
            <SocailMediaHandles />
        </div>
    )
}

function SocailMediaHandles() {
    return (
        <div className="flex flex-row space-x-5">
            <Link href={SocialMediaHandles.instagram}>
                <InstagramLogoIcon className="w-8 h-8"/>
            </Link>
            <Link href={SocialMediaHandles.facebook}>
                <Facebook className="w-8 h-8"/>
            </Link>
            <Link href={SocialMediaHandles.youtube}>
                <Youtube className="w-8 h-8"/>
            </Link>
        </div>
    )
}