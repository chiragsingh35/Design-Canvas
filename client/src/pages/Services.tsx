import { motion } from "framer-motion";
import { LayoutTemplate, Youtube, Package, MousePointerClick, Image, Palette, Monitor, Bot } from "lucide-react";

const services = [
  {
    icon: <Image className="w-8 h-8" />,
    title: "Social Media Creatives",
    description: "Engaging posts, stories, and banners that drive engagement and build brand identity."
  },
  {
    icon: <LayoutTemplate className="w-8 h-8" />,
    title: "Posters/Flyers",
    description: "Print-ready and digital posters that communicate your message boldly and effectively."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Brochures",
    description: "Professional multi-page layouts designed to inform and impress your stakeholders."
  },
  {
    icon: <Youtube className="w-8 h-8" />,
    title: "YT Thumbnails",
    description: "High-CTR thumbnail designs that stop the scroll and get those clicks."
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Product Packing",
    description: "Shelf-popping packaging design that tells your product's story at a glance."
  },
  {
    icon: <MousePointerClick className="w-8 h-8" />,
    title: "Banner Ads",
    description: "Conversion-focused web banners for Google Ads, Facebook, and display networks."
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Website UI",
    description: "Clean, modern user interfaces that provide seamless and beautiful user experiences."
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI Assisted Designs",
    description: "Leveraging cutting-edge AI tools to create unique, surreal, and efficient visual assets."
  }
];

export default function Services() {
  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold uppercase mb-4">
          My <span className="text-gradient">Services</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive design solutions tailored to elevate your brand across every touchpoint.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 flex flex-col gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
