import { LayoutGrid, PenTool, Smartphone, Sparkles } from "lucide-react";
import Section from "../layout/Section";
import ParallaxBlobs from "../hero/ParallaxBlobs";
export default function About() {
  const values = [
    { label: "Focus", value: "UI Craft", icon: PenTool },
    { label: "Strength", value: "Design Systems", icon: LayoutGrid },
    { label: "Delivery", value: "Responsive UX", icon: Smartphone },
  ];

  return (
    <Section id="about" size="lg" container={false} className="p-4">
      <ParallaxBlobs />
      <div className="container-page relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-start">
        <div className="space-y-10 animate-[fadeUp_0.9s_ease-out]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--border),0.7)] bg-[rgba(var(--surface),0.65)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-muted">
              About
            </span>
            <h2 className="text-gradient text-3xl sm:text-4xl">
              Craft-first UI with reliable delivery.
            </h2>
            <p className="text-muted max-w-xl">
              I am a fresher who loves building modern interfaces with strong
              typography, accessible patterns, and performance-friendly code. I
              am also learning backend development with Django to deliver
              full-stack solutions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {values.map(item => (
              <div
                key={item.label}
                className="rounded-2xl border border-[rgba(var(--border),0.7)] bg-[rgba(var(--surface),0.7)] p-4 transition hover:-translate-y-0.5"
              >
                <item.icon className="h-4 w-4 text-muted" />
                <p className="mt-3 text-xs text-muted">{item.label}</p>
                <p className="text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 animate-[fadeUp_1s_ease-out]">
          <div className="surface rounded-[2rem] p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow text-muted">What I bring</p>
                <p className="mt-2 text-lg font-semibold">A calm, product-first mindset.</p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[rgba(var(--border),0.7)] px-3 py-1 text-xs text-muted">
                <Sparkles className="h-3.5 w-3.5" color="green" />
                Detail obsessed
              </span>
            </div>

            <div className="mt-6 grid gap-4">
              {[
                {
                  title: "UI systems",
                  detail: "Component libraries with tight spacing + type rhythm.",
                },
                {
                  title: "Performance",
                  detail: "Lean layouts, animation polish, and fast load time.",
                },
                {
                  title: "Collaboration",
                  detail: "Clear handoff and documentation for teams.",
                },
              ].map(item => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[rgba(var(--border),0.7)] bg-[rgba(var(--surface),0.6)] p-4"
                >
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Learning", value: "Django + APIs" },
              { label: "Focus Area", value: "Frontend UX" },
            ].map(item => (
              <div
                key={item.label}
                className="rounded-2xl border border-[rgba(var(--border),0.7)] bg-[rgba(var(--surface),0.7)] p-4"
              >
                <p className="text-xs text-muted">{item.label}</p>
                <p className="mt-2 text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
