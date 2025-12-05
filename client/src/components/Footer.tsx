import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-lg mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CK Visual Studios. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/ck_visual_studios?igsh=MWdub2E0OGltY2hvaA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/chirag-singh-kushwah-01a75122b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://x.com/ohh_its_chirag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="w-5 h-5" />
            <span className="sr-only">X (Twitter)</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
