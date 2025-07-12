import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "../ui/badge";
import { IconBrandLine } from "@tabler/icons-react";
import { faqItems } from "@/constants/data";

export default function Faq() {
  return (
    <>
      <div id="faq" className="bg-background py-10 mt-20">
        <div className="flex flex-col">
          <Badge className="w-fit px-4 py-2 flex items-center mb-4 gap-2">
            <IconBrandLine className="text-white size-4" />
            FAQs
          </Badge>
          <div className="text-4xl md:text-6xl font-medium">
            Recently raised
            <span className="bg-gradient-to-tr mx-2 from-white via-primary to-white bg-clip-text text-transparent">
              queries
            </span>
            <br />{" "}
            <span className="text-muted-foreground/40 text-3xl md:text-5xl">
              about LogoAI
            </span>
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Frequently Asked Questions</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="font-semibold text-lg">How does Brandify generate logos?</h3>
            <p className="text-gray-600 dark:text-gray-300">Brandify uses advanced AI models to create unique, professional logos based on your preferences and inputs.</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Can I customize my logo?</h3>
            <p className="text-gray-600 dark:text-gray-300">Absolutely! You can choose styles, colors, sizes, and add extra details to make your logo perfect for your brand.</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Is Brandify free to use?</h3>
            <p className="text-gray-600 dark:text-gray-300">Brandify offers a free tier with limited logo generations per month. Upgrade for more features and unlimited creativity!</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Do I own the logos I create?</h3>
            <p className="text-gray-600 dark:text-gray-300">Yes! All logos you generate are yours to use for personal or commercial projects.</p>
          </li>
        </ul>
      </div>
    </>
  );
}
