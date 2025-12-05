import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Define the project type
type Project = {
  id: string;
  category: string;
  image: string;
};

// Data mapping based on user request
const projects: Project[] = [
  // Posters
  { id: "po1", category: "Posters", image: "/po1.jpg" },
  { id: "po2", category: "Posters", image: "/po2.jpg" },
  { id: "po3", category: "Posters", image: "/po3.jpg" },
  { id: "po4", category: "Posters", image: "/po4.jpg" },
  { id: "po5", category: "Posters", image: "/po5.jpg" },
  { id: "po6", category: "Posters", image: "/po6.jpg" },
  { id: "po7", category: "Posters", image: "/po7.jpg" },
  
  // Thumbnails
  { id: "T1", category: "Thumbnails", image: "/T1.jpg" },
  { id: "T2", category: "Thumbnails", image: "/T2.jpg" },
  { id: "T3", category: "Thumbnails", image: "/T3.jpg" },
  { id: "T4", category: "Thumbnails", image: "/T4.jpg" },
  { id: "T5", category: "Thumbnails", image: "/T5.jpg" },
  { id: "T6", category: "Thumbnails", image: "/T6.jpg" },
  { id: "T7", category: "Thumbnails", image: "/T7.jpg" },
  { id: "T8", category: "Thumbnails", image: "/T8.jpg" },

  // Branding
  { id: "B1", category: "Branding", image: "/B1.jpg" },
  { id: "B2", category: "Branding", image: "/B2.jpg" },
  { id: "B3", category: "Branding", image: "/B3.jpg" },
  { id: "B4", category: "Branding", image: "/B4.jpg" },

  // Social Media
  { id: "P1", category: "Social Media", image: "/P1.jpg" },
  { id: "P2", category: "Social Media", image: "/P2.jpg" },
  { id: "P3", category: "Social Media", image: "/P3.jpg" },
  { id: "P4", category: "Social Media", image: "/P4.jpg" },

  // Others
  { id: "o1", category: "Others", image: "/o1.jpg" },
  { id: "o2", category: "Others", image: "/o2.jpg" },
  { id: "o3", category: "Others", image: "/o3.jpg" },
  { id: "o4", category: "Others", image: "/o4.jpg" },
  { id: "o5", category: "Others", image: "/o5.jpg" },
  { id: "o6", category: "Others", image: "/o6.jpg" },
  { id: "o7", category: "Others", image: "/o7.jpg" },
  { id: "o8", category: "Others", image: "/o8.jpg" },
];

const categories = ["All", "Posters", "Thumbnails", "Branding", "Social Media", "Others"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold uppercase mb-2">
            Selected <span className="text-gradient">Work</span>
          </h1>
          <p className="text-muted-foreground">A curation of my best pixels.</p>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 max-w-full no-scrollbar">
          {categories.map((category) => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-gradient-primary text-white shadow-[0_0_20px_-5px_rgba(217,0,255,0.5)] scale-105" 
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Layout using CSS Columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid mb-4 group relative rounded-2xl overflow-hidden bg-white/5 border border-white/5"
            >
              {/* Image container - let the image determine height */}
              <div className="w-full">
                <img 
                  src={project.image} 
                  alt={project.category} 
                  className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                <span className="text-primary font-bold text-sm mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
