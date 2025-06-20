import React, { memo } from "react";
import { Helmet } from "react-helmet-async";
import services from "./BlogServices";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ArrowUp } from "lucide-react";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/(^-|-$)+/g, ""); // Remove leading/trailing hyphens

const ServiceDetailCard = memo(
  ({ service, idx }: { service: any; idx: number }) => (
    <div id={slugify(service.title)} className="service-card scroll-mt-32">
      <Card className="shadow-lg rounded-2xl transition-transform hover:scale-[1.02]">
        <CardHeader className="bg-purple-500 text-white rounded-t-2xl p-4">
          <CardTitle className="text-2xl">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4 rounded-b-2xl bg-gray-300">
          <p className="text-gray-700">{service.description}</p>

          <Accordion type="single" collapsible>
            <AccordionItem value={`features-${idx}`}>
              <AccordionTrigger className="font-medium">
                Key Features
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  {service.features.map((feat: string, i: number) => (
                    <li key={i} className="text-gray-600">
                      {feat}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex justify-end">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="bg-black text-white hover:bg-gray-800"
            >
              <a href="#services" className="flex items-center space-x-2">
                <ArrowUp size={16} className="text-white" />
                <span className="text-white">Back to Services</span>
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
);
ServiceDetailCard.displayName = "ServiceDetailCard";

const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="py-40 bg-white">
      <Helmet>
        <title>CarNation Elite - Auto Repair in Dallas, TX</title>
        <meta
          name="description"
          content="Premium auto repair services in Dallas. Schedule your appointment today with CarNation Elite — your trusted local mechanic for luxury vehicles, best car reparir, best car service, near me, best car service, in dallas, best auto repair in dallas, car nation, car service, engine, oil change, general service, best, friendly, trusted auto repair in dallas, CarNation Elite"
        />
        <meta
          name="keywords"
          content="best car reparir, best car service, near me, best car service, in dallas, best auto repair in dallas, car nation, car service, engine, oil change, general service, best, friendly, trusted auto repair in dallas, CarNation Elite, auto repair, car repair Dallas, mechanic near me, Dallas auto repair, luxury car service, brake service, oil change Dallas"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            name: "CarNation Elite",
            image: "https://carnationelite.com/images/elite.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "13610 Floyd Circle",
              addressLocality: "Dallas",
              addressRegion: "TX",
              postalCode: "75243",
              addressCountry: "US",
            },
            telephone: "+1-214-597-4922",
            url: "https://carnationelite.com",
            openingHours: "Mo-Sa 09:00-17:00",
            sameAs: [
              "https://www.facebook.com/CarNationElite",
              "https://www.instagram.com/CarNationElite",
            ],
            priceRange: "$$",
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-500 mb-4">
            Auto Repair Services in Dallas
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Discover in-depth service breakdowns tailored for Dallas car
            owners—your trusted partner in auto repair near you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <ServiceDetailCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
