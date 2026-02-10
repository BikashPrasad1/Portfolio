import { ArrowUpRight, Mail } from "lucide-react";
import ParallaxBlobs from "../hero/ParallaxBlobs";
export default function Footer() {
  return (
    <footer>
      <ParallaxBlobs />
      <div className="container-page py-14 grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
        <div className="space-y-4">
          <div className="flex surface rounded-3xl py-3 items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center bg-linear-to-r from-indigo-500 via-sky-500 to-emerald-400 rounded-full border border-[rgba(var(--border),0.8)] text-sm font-semibold text-white ml-2">
              BP
            </span>
            <div>
              <p className="text-lg font-semibold">BIKASH PRASAD</p>
              <p className="eyebrow text-muted">Frontend Developer</p>
            </div>
          </div>
          <p className="text-muted">
            Fresher frontend developer with growing backend skills in Python,
            Django, and REST APIs. Open to roles and freelance projects.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="pill text-xs text-muted">Available for work</span>
            <span className="pill text-xs text-muted">Remote friendly</span>
            <span className="pill text-xs text-muted">Based in USA</span>
          </div>
        </div>

        <div className="space-y-3 flex flex-col text-sm">
          <p className="eyebrow text-muted">Explore</p>
          <a className="inline-flex items-center gap-2 text-[rgb(var(--fg))] transition hover:-translate-y-0.5" href="#about">
            About
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a className="inline-flex items-center gap-2 text-[rgb(var(--fg))] transition hover:-translate-y-0.5" href="#projects">
            Projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a className="inline-flex items-center gap-2 text-[rgb(var(--fg))] transition hover:-translate-y-0.5" href="#contact">
            Contact
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="space-y-3 text-sm">
          <p className="eyebrow text-muted">Services</p>
          <p className="text-muted">UI Engineering</p>
          <p className="text-muted">Design Systems</p>
          <p className="text-muted">Performance Audits</p>
        </div>

        <div className="space-y-4">
          <p className="eyebrow text-muted">Stay Updated</p>
          <p className="text-muted">
            Monthly notes on building calm, high-quality interfaces.
          </p>
          <div className="surface rounded-3xl p-4">
            <div className="flex items-center gap-2 text-sm text-muted">
              <Mail className="h-4 w-4" />
              <span>newsletter@yourdomain.com</span>
            </div>
            <button className="mt-4 w-full rounded-2xl px-4 py-2 text-sm font-semibold text-white button-primary">
              Join Newsletter
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Status: Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
