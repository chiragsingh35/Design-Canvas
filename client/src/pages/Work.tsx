import { motion } from "framer-motion";
import posterImg from "@assets/generated_images/music_festival_poster_design.png";
import brandImg from "@assets/generated_images/brand_identity_mockup.png";
import thumbImg from "@assets/generated_images/youtube_thumbnail_design.png";
import socialImg from "@assets/generated_images/social_media_fashion_post.png";

const projects = [
  {
    id: 1,
    title: "Social Media Poster",
    category: "Poster Design",
    image: "/poster-design.png",
    size: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: 2,
    title: "Product Packaging",
    category: "Branding",
    image: "/packaging-design.png",
    size: "col-span-1"
  },
  {
    id: 3,
    title: "YouTube Thumbnail",
    category: "YouTube Thumbnail",
    image: "/thumbnail-design.png",
    size: "col-span-1"
  },
  {
    id: 4,
    title: "Urban Streetwear",
    category: "Social Media",
    image: socialImg,
    size: "col-span-1 md:col-span-2"
  },
  // Duplicates for grid filling
   {
    id: 5,
    title: "Summer Vibes",
    category: "Poster Design",
    image: "/poster-design.png",
    size: "col-span-1"
  },
  {
    id: 6,
    title: "Minimalist Corp",
    category: "Branding",
    image: "/packaging-design.png",
    size: "col-span-1"
  },
];

export default function Work() {
  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold uppercase mb-2">
            Selected <span className="text-gradient">Work</span>
          </h1>
          <p className="text-muted-foreground">A curation of my best pixels.</p>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 max-w-full">
          {["All", "Social Media", "Posters", "Branding", "UI/UX"].map((filter, i) => (
            <button 
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${i === 0 ? "bg-white text-black" : "bg-white/5 text-white hover:bg-white/10"}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id + index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`relative group overflow-hidden rounded-2xl bg-white/5 ${project.size}`}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary font-bold text-sm mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {project.category}
              </span>
              <h3 className="text-2xl font-heading font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
