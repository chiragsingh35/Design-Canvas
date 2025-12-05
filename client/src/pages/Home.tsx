import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-start relative z-10">
      {/* Abstract Background Elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold tracking-tight leading-[0.9] mb-8 text-white uppercase">
          Designs <br />
          That Stop <br />
          <span className="text-gradient">The Scroll</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Blending data-driven strategy with high-end aesthetics to turn your raw ideas into pure digital gold that captivates your audience.
        </p>

        <div className="flex flex-wrap gap-6">
          <Link href="/contact" className="group relative px-8 py-4 bg-transparent border border-primary/50 rounded-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="absolute inset-0 w-0 bg-gradient-primary transition-all duration-[250ms] ease-out group-hover:w-full opacity-100" />
            <span className="relative z-10 font-bold text-white flex items-center gap-2">
              Contact Us
            </span>
          </Link>
          
          <Link href="/work" className="group px-8 py-4 bg-gradient-primary rounded-full font-bold text-white flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_30px_-5px_rgba(217,0,255,0.5)]">
            View Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
