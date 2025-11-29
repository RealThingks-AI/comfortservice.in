import { MessageCircle } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceCardSkeleton } from "@/components/ServiceCardSkeleton";
import { PricingCardSkeleton } from "@/components/PricingCardSkeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES, CONTACT_INFO } from "@/config/contact";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const headerRef = useScrollAnimation();
  const pricingRef = useScrollAnimation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = (service: string) => {
    const message = encodeURIComponent(`Hi! I'd like to know more about ${service}.`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, "_blank");
  };

  const pricingData = [
    {
      category: "AC Servicing",
      description: "Regular maintenance and cleaning services",
      items: [
        { name: "Split AC - Basic Service", price: "₹399", details: "Filter cleaning, basic inspection" },
        { name: "Split AC - Deep Cleaning", price: "₹799", details: "Complete wash, coil cleaning, gas pressure check" },
        { name: "Window AC - Basic Service", price: "₹349", details: "Filter cleaning, basic inspection" },
        { name: "Window AC - Deep Cleaning", price: "₹699", details: "Complete cleaning with coil wash" }
      ]
    },
    {
      category: "Installation & Uninstallation",
      description: "Professional setup and removal services",
      items: [
        { name: "Split AC Installation", price: "₹799 - ₹1,499", details: "Includes piping up to 3 meters, wall mounting" },
        { name: "Window AC Installation", price: "₹599 - ₹999", details: "Standard window bracket installation" },
        { name: "AC Uninstallation", price: "₹499 - ₹799", details: "Safe removal with gas recovery" }
      ]
    },
    {
      category: "Repair & Gas Refill",
      description: "Expert troubleshooting and repairs",
      items: [
        { name: "Gas Refilling (R22/R32)", price: "₹1,499 - ₹2,499", details: "Per 100g, includes leak check" },
        { name: "PCB Repair", price: "₹799 onwards", details: "Circuit board diagnostics and repair" },
        { name: "Compressor Repair", price: "₹1,999 onwards", details: "Major component repair/replacement" },
        { name: "General Troubleshooting", price: "₹299 onwards", details: "Issue diagnosis and minor fixes" }
      ]
    },
    {
      category: "Additional Services",
      description: "Specialized AC solutions",
      items: [
        { name: "AC Duct Cleaning", price: "₹999 onwards", details: "Central AC duct sanitization" },
        { name: "Thermostat Installation", price: "₹599 onwards", details: "Smart thermostat setup" },
        { name: "Emergency Repair", price: "₹499 onwards", details: "Same-day priority service" },
        { name: "Preventive Maintenance", price: "₹699 onwards", details: "Comprehensive health check" }
      ]
    }
  ];

  return (
    <div className="min-h-screen section-padding">
      <div className="container-wide">
        {/* Header */}
        <div ref={headerRef.ref} className={`text-center mb-8 scroll-animate ${headerRef.isVisible ? 'visible' : ''}`}>
          <h1 className="mb-2">Our AC Services & Pricing</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Comprehensive air conditioning services with transparent pricing for homes and offices in Pune & PCMC.
            All services include warranty and professional support.
          </p>
        </div>

        {/* Service Overview Cards */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Service Overview</h2>
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <ServiceCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08 }
                }
              }}
            >
              {SERVICES.map((service) => (
                <motion.div
                  key={service.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <ServiceCard
                    name={service.name}
                    description={service.description}
                    startingPrice={service.startingPrice}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Detailed Pricing Breakdown */}
        <div ref={pricingRef.ref} className={`scroll-animate ${pricingRef.isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold mb-2">Detailed Pricing</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Clear, upfront pricing with no hidden charges. Final price confirmed after inspection.
            </p>
          </div>

          {isLoading ? (
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <PricingCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <motion.div 
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {pricingData.map((category, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                      <CardDescription className="text-xs">{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="divide-y divide-border">
                        {category.items.map((item, idx) => (
                          <div key={idx} className="py-3 first:pt-0 last:pb-0">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                              <div className="flex-1">
                                <span className="text-sm font-medium block">{item.name}</span>
                                <span className="text-xs text-muted-foreground">{item.details}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-primary font-semibold text-sm whitespace-nowrap">{item.price}</span>
                                <div className="flex gap-1">
                                  <Button asChild size="sm" variant="outline" className="h-7 px-2 text-xs">
                                    <Link to="/contact">Book</Link>
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    className="h-7 w-7 p-0"
                                    onClick={() => handleWhatsApp(item.name)}
                                    title="Ask on WhatsApp"
                                  >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Additional Information */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="bg-accent rounded-lg p-5">
            <h3 className="font-semibold mb-3">Pricing Notes</h3>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• Prices may vary based on AC condition, location, and accessibility</li>
              <li>• Parts and materials are charged separately if needed</li>
              <li>• Free inspection for all services</li>
              <li>• No work done without your approval</li>
              <li>• All services include warranty</li>
              <li>• AMC customers get priority support and discounted rates</li>
            </ul>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
            <h3 className="font-semibold mb-3 text-primary">GST Invoice Available</h3>
            <p className="text-xs text-muted-foreground mb-3">
              We are a GST registered business and provide proper GST invoices for all services.
            </p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• Official GST invoices for all transactions</li>
              <li>• Claim input tax credit on business expenses</li>
              <li>• Proper documentation for corporate clients</li>
              <li>• GSTIN: <span className="font-mono text-foreground">{CONTACT_INFO.gstin}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
