import Link from "next/link";
import { Github, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white mt-20">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600">
          © {year} M. Ulinuha As Shiddiqy
        </div>

        <nav aria-label="Footer" className="flex items-center gap-4">
          <Link
            href="mailto:hello@linier.my.id"
            className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900"
            aria-label="Send email"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">m.ulinasidiki@gmail.com</span>
          </Link>

          <Link
            href="https://github.com/Lin1er"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/ulinuha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </Link>
        </nav>
      </div>
    </footer>
  );
}
