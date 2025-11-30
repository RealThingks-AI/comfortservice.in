import { motion } from "framer-motion";
import { Award, Users, Clock, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Experienced Technicians",
      desc: "Skilled professionals"
    },
    {
      icon: Users,
      title: "Trusted by Companies",
      desc: "Multiple corporate clients"
    },
    {
      icon: Clock,
      title: "Same/Next-Day Service",
      desc: "Quick response time"
    },
    {
      icon: Shield,
      title: "Service Warranty",
      desc: "Transparent pricing"
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
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div 
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {features.map((feature, i) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={i}
                {...fadeInScale}
                whileHover={{ 
                  scale: 1.05,
                  y: -8
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center transition-all duration-300 flex flex-col items-center justify-center h-full p-8 hover:shadow-xl hover:bg-accent/50 border-2 hover:border-primary/20 min-h-[240px]">
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-5">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
