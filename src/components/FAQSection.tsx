import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";

const FAQSection = () => (
  <section id="faq" className="py-20 bg-secondary/40">
    <div className="container mx-auto px-4 max-w-3xl">
      <p className="text-usa-red font-semibold uppercase tracking-wider text-sm text-center mb-3">FAQ</p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-usa-navy text-center mb-10">
        Najczęściej zadawane pytania o import aut z USA
      </h2>
      <Accordion type="single" collapsible className="bg-card rounded-2xl border border-border shadow-sm px-6">
        {faqItems.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="last:border-b-0">
            <AccordionTrigger className="text-left font-heading font-semibold text-foreground">
              <h3>{item.question}</h3>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
