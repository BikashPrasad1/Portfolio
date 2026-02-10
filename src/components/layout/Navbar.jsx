import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeHref, setActiveHref] = useState('');

  useEffect(() => {
    const sectionIds = links.map(link => link.href.replace("#", ""));
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="sticky pt-5 top-4 z-50 hidden lg:block">
        <nav className="container-page">
          <div className="surface flex items-center justify-between rounded-[999px] px-4 py-3 sm:px-6 dark:bg-[linear-gradient(135deg,rgba(18,24,52,0.95),rgba(10,14,34,0.85))] dark:shadow-[0_18px_50px_rgba(4,6,18,0.75),0_0_24px_rgba(99,102,241,0.18)] dark:border-[rgba(255,255,255,0.12)]">
            <a href="#home" className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-linear-to-r from-indigo-500 via-sky-500 to-emerald-400 text-sm font-semibold text-white shadow-sm">
                BP
              </span>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold">BIKASH PRASAD</p>
              </div>
            </a>

            <ul className="hidden lg:flex items-center gap-2">
              {links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`eyebrow rounded-full px-4 py-2 text-[0.7rem] font-semibold transition ${
                      activeHref === link.href
                        ? "text-[rgb(var(--bg))] bg-[rgb(var(--fg))] shadow-sm"
                        : "text-muted hover:text-[rgb(var(--fg))] hover:bg-[rgba(var(--surface),0.55)] hover:backdrop-blur-md hover:border hover:border-[rgba(var(--border),0.55)]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="surface inline-flex h-10 w-10 items-center justify-center rounded-full text-[rgb(var(--fg))] transition hover:-translate-y-0.5"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <nav className="fixed bottom-4 left-0 right-0 z-50 lg:hidden">
        <div className="container-page">
          <div className="surface flex items-center justify-between rounded-[999px] px-4 py-2 dark:bg-[linear-gradient(135deg,rgba(18,24,52,0.95),rgba(10,14,34,0.85))] dark:shadow-[0_18px_50px_rgba(4,6,18,0.75),0_0_24px_rgba(99,102,241,0.18)] dark:border-[rgba(255,255,255,0.12)]">
            <a
              href="#home"
              className={`inline-flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold transition ${
                activeHref === "#home"
                  ? "text-[rgb(var(--bg))] bg-[rgb(var(--fg))] shadow-sm"
                  : "text-[rgb(var(--fg))] hover:bg-[rgba(var(--surface),0.55)]"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`inline-flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold transition ${
                activeHref === "#about"
                  ? "text-[rgb(var(--bg))] bg-[rgb(var(--fg))] shadow-sm"
                  : "text-[rgb(var(--fg))] hover:bg-[rgba(var(--surface),0.55)]"
              }`}
            >
              About
            </a>
            <a
              href="#projects"
              className={`inline-flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold transition ${
                activeHref === "#projects"
                  ? "text-[rgb(var(--bg))] bg-[rgb(var(--fg))] shadow-sm"
                  : "text-[rgb(var(--fg))] hover:bg-[rgba(var(--surface),0.55)]"
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`inline-flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold transition ${
                activeHref === "#contact"
                  ? "text-[rgb(var(--bg))] bg-[rgb(var(--fg))] shadow-sm"
                  : "text-[rgb(var(--fg))] hover:bg-[rgba(var(--surface),0.55)]"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
