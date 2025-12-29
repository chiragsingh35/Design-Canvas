import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// --- SMART SCANNER V2 (Auto-detects files) ---
// 1. Load all images from the 'work' folder
const images = import.meta.glob('/src/assets/work/*.{png,jpg,jpeg,webp}', { eager: true });

// 2. Your "Short Code" Decoder
const getCategory = (filename: string) => {
  if (filename.startsWith('po')) return 'Posters';
  if (filename.startsWith('T'))  return 'Thumbnails';
  if (filename.startsWith('B'))  return 'Branding';
  if (filename.startsWith('P'))  return 'Social Media';
  if (filename.startsWith('o'))  return 'Others';
  return 'Uncategorized';
};

// 3. Automatically build the list
const projects = Object.keys(images).map((path, index) => {
  // Get filename (e.g., "po1.jpg")
  const fileName = path.split('/').pop() || "";

  // Remove extension for the title (e.g., "po1")
  const title = fileName.substring(0, fileName.lastIndexOf('.'));

  // --- THE FIX: Force React to find the image link ---
  // @ts-ignore
  const imgModule = images[path];
  const finalImage = (imgModule && imgModule.default) ? imgModule.default : imgModule;

  return {
    id: String(index),
    category: getCategory(fileName), 
    image: finalImage,
    title: title
  };
});
// --- END SCANNER ---

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
              {/* Image container */}
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
                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}