import { ArrowRight, Calendar, Github, Mail, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";
import Section from "../layout/Section";
import ParallaxBlobs from "../hero/ParallaxBlobs";
const contactCards = [
  {
    label: "Project Fit",
    value: "Landing pages, product UI, design systems",
    icon: MessageSquare,
  },
  {
    label: "Availability",
    value: "Open for new projects",
    icon: Calendar,
  },
  {
    label: "Timezone",
    value: "EST (UTC-5)",
    icon: Phone,
  },
];

const quickLinks = [
  {
    label: "Email",
    value: "prasadbikash013@gmail.com",
    href: "mailto:prasadbikash013@gmail.com",
    icon: Mail,
  },
  { label: "Calendly", value: "30-min intro call", icon: Calendar },
  {
    label: "GitHub",
    value: "github.com/BikashPrasad1",
    href: "https://github.com/BikashPrasad1",
    icon: Github,
  },
];

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ state: "loading", message: "" });

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      projectType: formData.get("projectType"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      event.currentTarget.reset();
      setStatus({ state: "success", message: "Message sent. I'll reply soon." });
    } catch (error) {
      setStatus({ state: "error", message: "Something went wrong. Please try again." });
    }
  }

  return (
    <Section id="contact" size="lg" container={false}>
      <ParallaxBlobs />
      <div className="container-page relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-8 animate-[fadeUp_0.9s_ease-out]">
          <div className="space-y-4">
            <p className="surface inline-flex items-center gap-2 rounded-full bg-[rgba(var(--surface),0.65)] px-3 py-1 text-md uppercase tracking-[0.3em] text-muted">Contact</p>
            <h2 className="text-gradient">Let's build a calm, high-performing UI.</h2>
            <p className="text-muted max-w-xl">
              Share your goals, timeline, and success metrics. I'll respond with
              a clear plan, timeline, and next steps.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {contactCards.map(card => (
              <div key={card.label} className="surface rounded-3xl p-5">
                <card.icon className="h-4 w-4 text-muted" />
                <p className="mt-3 text-xs text-muted">{card.label}</p>
                <p className="text-sm font-semibold">{card.value}</p>
              </div>
            ))}
          </div>

          <div className="surface rounded-3xl p-6">
            <p className="eyebrow text-muted">Quick channels</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {quickLinks.map(link => (
                <div key={link.label} className="surface rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <link.icon className="h-4 w-4 text-muted" />
                    {link.label}
                  </div>
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className={`mt-2 inline-flex text-sm text-muted transition hover:text-[rgb(var(--accent))] ${
                        link.label === "Email" ? "break-all" : ""
                      }`}
                    >
                      {link.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-muted">{link.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="surface rounded-[2rem] p-6 min-h-[620px] animate-[fadeUp_1s_ease-out]">
          <div className="flex items-center justify-between">
            <div>
              <p className="eyebrow text-muted">Start a project</p>
              <p className="mt-2 text-lg font-semibold">Tell me about your scope.</p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[rgba(var(--border),0.7)] px-3 py-1 text-xs text-muted">
              Reply in 24h
            </span>
          </div>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="eyebrow text-muted">Your Name</label>
                <input
                  name="name"
                  required
                  className="surface w-full rounded-2xl p-3 text-sm text-[rgb(var(--fg))] focus:outline-none"
                  placeholder="Full name"
                />
              </div>
              <div className="space-y-2">
                <label className="eyebrow text-muted">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="surface w-full rounded-2xl p-3 text-sm text-[rgb(var(--fg))] focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="eyebrow text-muted">Project Type</label>
                <select
                  name="projectType"
                  className="surface w-full rounded-2xl p-3 text-sm text-[rgb(var(--fg))] focus:outline-none "
                >
                  <option className="text-black">Website / Landing page</option>
                  <option className="text-black">Product UI</option>
                  <option className="text-black">Design system</option>
                  <option className="text-black">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="eyebrow text-muted">Budget</label>
                <select
                  name="budget"
                  className="surface w-full rounded-2xl p-3 text-sm text-[rgb(var(--fg))] focus:outline-none"
                >
                  <option className="text-black">$2k - $5k</option>
                  <option className="text-black">$5k - $10k</option>
                  <option className="text-black">$10k+</option>
                  <option className="text-black">Let's discuss</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="eyebrow text-muted">Project Details</label>
              <textarea
                rows="5"
                name="message"
                required
                className="surface w-full rounded-2xl p-3 text-sm text-[rgb(var(--fg))] focus:outline-none"
                placeholder="Goals, timeline, and success metrics..."
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                className="button-primary inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm uppercase tracking-[0.25em] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={status.state === "loading"}
              >
                {status.state === "loading" ? "Sending..." : "Send Message"}
                <ArrowRight className="h-4 w-4" />
              </button>
              {status.state === "success" ? (
                <span className="text-xs text-[rgb(var(--accent))]">{status.message}</span>
              ) : status.state === "error" ? (
                <span className="text-xs text-red-400">{status.message}</span>
              ) : (
                <span className="text-xs text-muted">
                  No spam. Just a fast reply and clear next steps.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
