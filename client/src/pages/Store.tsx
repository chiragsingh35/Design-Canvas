import { ShoppingBag } from "lucide-react";
import { Link } from "wouter";

export default function Store() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-8 animate-pulse">
        <ShoppingBag className="w-10 h-10 text-primary" />
      </div>
      
      <h1 className="text-5xl md:text-7xl font-heading font-extrabold uppercase mb-4">
        Store <span className="text-gradient">Coming Soon</span>
      </h1>
      
      <p className="text-xl text-muted-foreground max-w-md mb-8">
        We are crafting some premium design assets, templates, and merch. Stay tuned!
      </p>

      <Link href="/" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors font-bold">
        Back to Home
      </Link>
    </div>
  );
}
