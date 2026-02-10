import { Award, Briefcase, Layers, Sparkles, Users } from "lucide-react";
import ParallaxBlobs from "../hero/ParallaxBlobs";
import Section from "../layout/Section";
import { useTilt } from "../../hooks/useTilt";
const highlights = [
  { label: "Projects", value: "5+", icon: Briefcase },
  { label: "Role", value: "Fresher", icon: Award },
  { label: "Stack", value: "Front-End", icon: Users },
];

export default function Hero() {
  const { ref, onMouseMove, onMouseLeave } = useTilt(7);
  return (
    <Section id="home" size="lg" container={false}>
      <ParallaxBlobs />

      <div className="container-page relative z-10 pt-6 sm:pt-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8 animate-[fadeUp_0.9s_ease-out]">
            <div className="inline-flex surface items-center gap-2 rounded-full bg-[rgba(var(--surface),0.6)] px-4 py-2 text-xs text-muted backdrop-blur-md">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-500" />
              Available for new projects
            </div>

            <div className="space-y-4">
              <h3>
                Hi, I am <span className="text-gradient">Bikash Prasad</span>.
                <span className="block text-muted">
                  Frontend developer with backend fundamentals.
                </span>
              </h3>
              <p className="text-lg text-muted max-w-xl">
                I design and build responsive interfaces with modern motion,
                clean hierarchy, and production-ready code. Currently leveling
                up on Django to deliver full-stack solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="button-primary rounded-full px-6 py-3 text-sm uppercase tracking-[0.25em] transition hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="surface rounded-full px-6 py-3 text-sm uppercase tracking-[0.25em] text-[rgb(var(--fg))] transition hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="surface group relative overflow-hidden rounded-3xl p-10 transition hover:-translate-y-1 will-change-transform"
          >
            <div className="absolute inset-x-0 top-0 h-28  opacity-0 transition group-hover:opacity-100" />
            <div className="animate-[fadeUp_1.1s_ease-out]">
              <div className="grid gap-4 sm:grid-cols-2">
                  <div className="surface rounded-2xl p-4 text-left transition hover:-translate-y-1">
                    <Layers className="h-4 w-4 text-muted" />
                    <p className="mt-3 text-sm text-muted">Next Focus</p>
                    <p className="text-base font-semibold">Design Systems</p>
                  </div>
                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="surface rounded-2xl p-4 text-left transition hover:-translate-y-1"
                    >
                      <item.icon className="h-4 w-4 text-muted" />
                      <p className="eyebrow text-muted mt-3">{item.label}</p>
                      <p className="mt-2 text-lg font-semibold text-[rgb(var(--fg))]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
