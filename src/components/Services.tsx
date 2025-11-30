import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle, Wrench, Sparkles, Wind, Hammer, Settings, FileText } from "lucide-react";

const Services = () => {
  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/917745046520?text=${encodeURIComponent(message)}`;
  };

  const handleServiceClick = (serviceName: string) => {
    const message = `Hi Comfort Technical Services! I'm interested in ${serviceName}. Could you please provide more details about pricing and availability?`;
    window.open(createWhatsAppLink(message), '_blank');
  };

  const services = [
    {
      name: "AC Servicing",
      desc: [
        "Filter cleaning & replacement",
        "Coil inspection & cleaning",
        "Refrigerant level check",
        "Performance optimization"
      ],
      price: "₹399",
      icon: Wrench,
      iconBg: "#E3F2FD",
      iconColor: "#1976D2"
    },
    {
      name: "Deep Cleaning",
      desc: [
        "Complete internal cleaning",
        "Coil sanitization",
        "Drain pipe cleaning",
        "Anti-bacterial treatment"
      ],
      price: "₹599",
      icon: Sparkles,
      iconBg: "#E8F5E9",
      iconColor: "#388E3C"
    },
    {
      name: "Gas Refill",
      desc: [
        "Leak detection & repair",
        "R32/R410A gas refill",
        "Pressure testing",
        "Performance verification"
      ],
      price: "₹2,500",
      icon: Wind,
      iconBg: "#FFF3E0",
      iconColor: "#F57C00"
    },
    {
      name: "AC Repair",
      desc: [
        "Compressor repair/replacement",
        "PCB & circuit repairs",
        "Sensor troubleshooting",
        "All brand expertise"
      ],
      price: "Based on issue",
      icon: Hammer,
      iconBg: "#FFEBEE",
      iconColor: "#D32F2F"
    },
    {
      name: "AC Installation",
      desc: [
        "Professional mounting",
        "Copper piping work",
        "Electrical wiring",
        "Gas charging & testing"
      ],
      price: "₹1,500",
      icon: Settings,
      iconBg: "#F3E5F5",
      iconColor: "#7B1FA2"
    },
    {
      name: "AMC Plans",
      desc: [
        "Scheduled maintenance",
        "Priority service",
        "Discounted repairs",
        "Extended warranty"
      ],
      price: "Custom pricing",
      icon: FileText,
      iconBg: "#E0F2F1",
      iconColor: "#00897B"
    }
  ];

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true, margin: "-50px" }
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AC solutions for homes and businesses
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 max-w-[1200px] mx-auto"
        >
          {services.map((service, i) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={i}
                {...fadeInScale}
                whileHover={{ 
                  scale: 1.05
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group"
              >
                <Card 
                  className="p-5 md:p-7 cursor-pointer transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:scale-105 hover:bg-accent/50 border-2 hover:border-primary/20"
                  onClick={() => handleServiceClick(service.name)}
                >
                  {/* Icon with colored background */}
                  <div className="flex justify-center mb-4">
                    <div 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ backgroundColor: service.iconBg }}
                    >
                      <IconComponent 
                        className="w-6 h-6 md:w-7 md:h-7" 
                        style={{ color: service.iconColor }}
                      />
                    </div>
                  </div>

                  {/* Service Name */}
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-center text-foreground">
                    {service.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">Starting from</p>
                    <p className="text-lg md:text-xl font-bold text-primary">
                      {service.price}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.desc.map((point, j) => (
                      <li 
                        key={j} 
                        className="flex items-start text-sm md:text-base text-muted-foreground"
                      >
                        <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: service.iconColor }} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button 
                    className="text-sm md:text-base font-semibold transition-all duration-300 mt-auto text-center w-full py-2 text-primary hover:text-primary/80 group-hover:underline"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service.name);
                    }}
                  >
                    Learn More →
                  </button>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
