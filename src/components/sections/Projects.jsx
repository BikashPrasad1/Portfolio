import { ArrowUpRight, Sparkles } from "lucide-react";
import Section from "../layout/Section";
import { projects } from "../../data/projects";
import { useTilt } from "../../hooks/useTilt";
import ParallaxBlobs from "../hero/ParallaxBlobs";

export default function Projects() {
  return (
    <Section id="projects" size="lg" container={false}>
      <ParallaxBlobs />
      <div className="container-page relative z-10 space-y-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="surface inline-flex items-center gap-2 rounded-full bg-[rgba(var(--surface),0.65)] px-3 py-1 text-md uppercase tracking-[0.3em] text-muted">
              Projects
            </span>
            <h2 className="mt-4 text-gradient text-3xl sm:text-4xl">
              Modern product builds with crisp motion and real-world impact.
            </h2>
            <p className="mt-4 text-muted">
              From conversion-driven storefronts to data-rich dashboards, these
              builds highlight how I translate product goals into polished
              interfaces.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
              <span className="pill text-xs text-muted">Selected • {projects.length} total</span>
              <span className="pill text-xs text-muted">Frontend + UI systems</span>
              <span className="pill text-xs text-muted">Performance focused</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="surface rounded-full px-4 py-2 text-sm text-[rgb(var(--fg))] transition hover:-translate-y-0.5 whitespace-nowrap">
              See All Projects
            </button>
            <button className="surface rounded-full px-4 py-2 text-sm text-muted transition hover:-translate-y-0.5">
              Request a case study
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 4).map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="surface rounded-3xl p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm">
            {[
              { label: "Discovery", detail: "Align goals + scope" },
              { label: "Design", detail: "Wireframe + UI polish" },
              { label: "Build", detail: "Fast, clean components" },
              { label: "Launch", detail: "QA + performance checks" },
            ].map(step => (
              <div key={step.label} className="surface rounded-2xl bg-[rgba(var(--surface),0.7)] p-4 transition hover:-translate-y-0.5">
                <p className="eyebrow text-muted">{step.label}</p>
                <p className="mt-2 text-[rgb(var(--fg))]">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ProjectCard({ project }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(7);
  const primaryLink = project.links?.live || project.links?.github;

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative overflow-hidden rounded-3xl bg-[rgba(var(--surface),0.7)] p-6 transition hover:-translate-y-1 will-change-transform"
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_70%)] opacity-70 transition group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl">{project.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              {project.description}
            </p>
          </div>
          {project.featured ? (
            <span className="inline-flex items-center rounded-full border border-[rgba(var(--border),0.8)] bg-[rgba(var(--surface),0.6)] px-3 py-1 text-xs text-muted">
              <Sparkles className="mr-2 h-3.5 w-3.5" color="green" />
              Featured
            </span>
          ) : null}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map(tag => (
            <span key={tag} className="pill text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
        {primaryLink ? (
          <a
            href={primaryLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-[rgb(var(--fg))] transition hover:text-[rgb(var(--accent))]"
            aria-label={project.aria?.label}
          >
            View project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : (
          <span className="mt-6 inline-flex items-center gap-2 text-sm text-muted">
            Coming soon
          </span>
        )}
      </div>
    </div>
  );
}
