import { Download, Sparkles, Palette, Cpu } from "lucide-react";
import portraitImage from "@assets/generated_images/portrait_of_a_male_graphic_designer.png";

export default function About() {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 items-start mt-8">
      {/* Left Info Card */}
      <div className="lg:col-span-5 w-full glass-panel rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
        
        <div className="space-y-10">
          {/* Education */}
          <div>
            <h3 className="text-2xl text-primary font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> Education
            </h3>
            <div className="space-y-1 text-white/90">
              <p className="font-bold text-lg">Bachelor of Technology (B.Tech)</p>
              <p className="text-muted-foreground">Mechanical Engineering</p>
              <p>Jabalpur Engineering College</p>
              <p className="text-sm text-white/60">( 2024 ~ 2028 )</p>
            </div>
          </div>

          {/* Softwares */}
          <div>
            <h3 className="text-2xl text-primary font-bold mb-4 flex items-center gap-2">
              <Palette className="w-5 h-5" /> Softwares
            </h3>
            <p className="text-white/80 mb-4">
              Adobe Photoshop, Adobe Illustrator, Canva, Affinity, Figma
            </p>
            <div className="flex gap-3 flex-wrap">
              <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center hover:bg-white/20 transition-colors">
                <img src="/photoshop-icon.png" alt="Photoshop" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center hover:bg-white/20 transition-colors">
                <img src="/illustrator-icon.png" alt="Illustrator" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center hover:bg-white/20 transition-colors">
                <img src="/canva-icon.png" alt="Canva" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center hover:bg-white/20 transition-colors">
                <img src="/affinity-icon.png" alt="Affinity" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center hover:bg-white/20 transition-colors">
                <img src="/figma-icon.png" alt="Figma" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* AI Tools */}
          <div>
            <h3 className="text-2xl text-primary font-bold mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5" /> AI Tools
            </h3>
            <p className="text-sm text-muted-foreground mb-2">(for Ideation & Productivity)</p>
            <p className="text-white/80 mb-4">
              ChatGPT, Gemini, Claude, Ideogram, Canva AI
            </p>
            <div className="flex gap-3 flex-wrap">
              <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center hover:bg-white/20 transition-colors">
                <img src="/chatgpt-icon.png" alt="ChatGPT" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center hover:bg-white/20 transition-colors">
                <img src="/gemini-icon.png" alt="Gemini" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center hover:bg-white/20 transition-colors">
                <img src="/claude-icon.png" alt="Claude" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center hover:bg-white/20 transition-colors">
                <img src="/ideogram-icon.png" alt="Ideogram" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-12 rounded-lg bg-white/10 p-2 flex items-center justify-center hover:bg-white/20 transition-colors">
                <img src="/canva-icon.png" alt="Canva AI" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Profile Section */}
      <div className="lg:col-span-7 w-full flex flex-col justify-center lg:pl-12">
        <div className="mb-4 flex justify-end">
             <h2 className="text-3xl font-heading font-bold text-white border-b-2 border-white inline-block pb-1">About</h2>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold uppercase leading-none mb-2">
          <span className="text-gradient">Chirag Singh</span> <br />
          <span className="text-primary">Kushwah</span>
        </h1>
        
        <p className="text-white/60 text-lg mb-8 font-medium">Graphic Designer • Visual Storyteller</p>

        <div className="space-y-6 text-lg text-white/80 leading-relaxed max-w-2xl">
          <p>
            Unleashing creativity, one design at a time.
          </p>
          <p>
            I'm a freelance graphic designer who transforms ideas into bold, meaningful visuals—logos, social posts, and full brand identities. Let's collaborate and bring your vision to life.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
                <h3 className="text-2xl text-primary font-bold mb-4">Experience</h3>
                <ul className="space-y-3 list-disc list-inside text-white/90">
                    <li>Graphic Designer at College Design Communities</li>
                    <li>Worked with Indian & international clients</li>
                    <li>2+ years of creative design experience</li>
                </ul>
                
                <a 
                  href="/resume.pdf" 
                  download="Chirag_Singh_Kushwah_Resume.pdf"
                  className="mt-8 px-8 py-3 rounded-full bg-gradient-primary text-white font-bold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 inline-flex"
                >
                    Download Resume <Download className="w-4 h-4" />
                </a>
            </div>
            
            <div className="relative mt-8 md:mt-0">
                <div className="absolute inset-0 bg-gradient-primary blur-[60px] opacity-40 -z-10 rounded-full" />
                <img 
                  src="/chirag-profile.png" 
                  alt="Chirag Singh Kushwah" 
                  className="w-full max-w-[300px] mx-auto rounded-2xl hover:grayscale-0 transition-all duration-500 object-cover shadow-2xl"
                />
            </div>
        </div>
      </div>
    </div>
  );
}
