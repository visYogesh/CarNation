import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Helmet } from "react-helmet-async";
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface Testimonial {
  name: string;
  image: string;
  rating: number;
  description: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sivaiah Katru",
      image: "/images/reviews/r1.png",
      rating: 5,
      description:
        "Had a general service for my Ford Fusion on Monday; the service was exceptional and I recommend this garage for the people of Dallas.",
    },
    {
      name: "KS FOODS",
      image: "/images/reviews/r2.png",
      rating: 5,
      description: "Great Service!!",
    },
    {
      name: "Mz Shebranda",
      image: "/images/reviews/r3.png",
      rating: 5,
      description: "Great people great service",
    },
    {
      name: "Sai Jayanth",
      image: "/images/reviews/r4.png",
      rating: 5,
      description: "Best Service",
    },
    {
      name: "Prashanth Manthapuri",
      image: "/images/reviews/r5.png",
      rating: 5,
      description:
        "Very reasonable prices. They helped change starter motor for my car.",
    },
    {
      name: "srikanth sanju",
      image: "/images/reviews/r6.png",
      rating: 5,
      description: "Quick and reliable service.",
    },
    {
      name: "Stephany Lopez",
      image: "/images/reviews/r7.png",
      rating: 5,
      description:
        "Best service and price. Keep up the good work. We appreciate the quality of work you did in our jeep. I will definitely come back and recommend to all family and friends. Thank you!",
    },
    {
      name: "Taura Shona",
      image: "/images/reviews/r8.png",
      rating: 5,
      description: "Top-notch service, very professional staff.",
    },
  ];

  return (
    <section id="testimonials" className="py-40 sm:py-28 md:py-44 bg-white">
      <Helmet>
        <title>CarNation Elite - Auto Repair in Dallas, TX</title>
        <meta
          name="description"
          content="Premium auto repair services in Dallas. Schedule your appointment today with CarNation Elite — your trusted local mechanic for luxury vehicles."
        />
        <meta
          name="keywords"
          content="auto repair, car repair Dallas, mechanic near me, Dallas auto repair, luxury car service, brake service, oil change Dallas"
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

      <Helmet>
        <title>Page Title | CarNation Elite</title>
        <meta
          name="description"
          content="Brief and relevant description of the page."
        />
        <meta
          name="keywords"
          content="best car reparir, best car service, near me, best car service, in dallas, best auto repair in dallas, car nation, car service, engine, oil change, general service, best, friendly, trusted auto repair in dallas, CarNation Elite"
        />
        <link rel="canonical" href="https://carnationelite.com/" />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content="Page Title | CarNation Elite" />
        <meta
          property="og:description"
          content="Description for sharing on social media."
        />
        <meta property="og:image" content="/images/elite.png" />
        <meta property="og:url" content="https://carnationelite.com/" />
        <meta property="og:type" content="website" />

        {/* Optional: Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Page Title | CarNation Elite" />
        <meta
          name="twitter:description"
          content="Description for Twitter share."
        />
        <meta name="twitter:image" content="/images/elite.png" />
      </Helmet>
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <h2 className="text-4xl font-bold text-purple-500 mb-4">
            What Our Customers Say
          </h2>

          <a
            target="_blank"
            title="Rate us on Google"
            href="https://search.google.com/local/writereview?placeid=ChIJh88JoU4fTIYRLJu4PFLlpFc"
          >
            <p className="py-2 text-xl text-black max-w-3xl mx-auto hover:text-purple-700 transition-colors duration-300">
              Review us on Google Maps to appear here
            </p>
          </a>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              viewport={{ once: true }}
              className="cursor-pointer"
            >
              <Card className="h-full shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col justify-start p-6 bg-gray-300 rounded-lg h-full">
                  {/* Header: image + name */}
                  <div className="flex items-center mb-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <h4 className="font-semibold text-slate-900 text-lg">
                      {t.name}
                    </h4>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center mb-3">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1"
                      />
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-current leading-relaxed flex-grow">
                    {t.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
