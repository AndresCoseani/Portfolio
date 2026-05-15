"use client";

import {
  MapPin,
  ArrowDown,
  Mail,
  ExternalLink,
  Code2,
  Layers,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

/* ── Custom brand icons (removed from lucide-react v1) ─────── */

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─────────────────────────── DATA ─────────────────────────── */

const NAV_LINKS = [
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
] as const;

const STACK = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  backend: ["Nest.JS", "Node.js", "Express.js", "REST API"],
  databases: ["PostgreSQL", "Supabase", "Firebase", "MongoDB"],
  tools: ["Git", "GitHub", "Jira", "Scrum / Agile"],
} as const;

type Project = {
  title: string;
  subtitle: string;
  description: string;
  expandedDescription: string;
  link: string;
  linkLabel: string;
  stack: string[];
  statusBadge?: string;
  comingSoon?: boolean;
  icon: React.ReactNode;
};

const PROJECTS: Project[] = [
  {
    title: "Demo de Proyecto de Gestion",
    subtitle: "Reciclados Don Nildo",
    description: "Sistema web integral de gestión y administración. ",
    expandedDescription:
      "Sistema enfocado en la gestión administrativa y organizacional de una empresa de reciclaje que comercializa y procesa materiales. Cuenta con módulos de compra, venta, control de accesos por roles y generación de reportes. Tesis Universitaria Con aplicacion real",
    link: "https://github.com/AndresCoseani/Demo_recycling_management",
    linkLabel: "Ver Demo",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL (Supabase)",
    ],
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: "Blinker",
    subtitle: "Conectando personas con profesionales",
    description: "Plataforma web de servicios en tiempo real.",
    expandedDescription:
      "Plataforma que conecta personas con profesionales verificados para resolver tareas cotidianas de forma rápida y segura. Simplifica la contratación con perfiles reales y reseñas verificadas.",
    link: "#",
    linkLabel: "Visitar Plataforma",
    stack: ["Next.js", "NestJS", "TypeScript", "Firebase", "PostgreSQL"],
    statusBadge: "Beta — Desplegado en producción inicial",
    comingSoon: true,
    icon: <Layers className="h-5 w-5" />,
  },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/andrescoseani",
    icon: <GithubIcon className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/andrescoseani",
    icon: <LinkedinIcon className="h-5 w-5" />,
  },
  {
    label: "Email",
    href: "mailto:coseaniandres@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
] as const;

/* ─────────────────────────── COMPONENTS ─────────────────────────── */

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-gray-900 transition-colors hover:text-blue-600"
        >
          Andres Coseani
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-blue-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-60 border-b border-gray-100" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-blue-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center"
    >
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-white" />

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Greeting badge — GREEN to signal availability */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          Disponible para nuevos proyectos
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          Hola, soy{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Andres.
          </span>
        </h1>

        <p className="mt-5 text-xl font-medium text-gray-600 sm:text-2xl">
          Full Stack Web Developer &amp; Analista de Sistemas.
        </p>

        <p className="mt-3 inline-flex items-center gap-1.5 text-base text-gray-500">
          <MapPin className="h-4 w-4 text-blue-500" />
          Córdoba, Argentina
        </p>

        {/* CTA scrolls to #about (Stack) so recruiters see tech first */}
        <div className="flex justify-center gap-3">
          <div className="mt-10 ">
            <a
              href="#about"
              id="cta-ver-stack"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Conocé mi stack
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
          <div className="mt-10">
            <a
              href="#projects"
              id="cta-ver-proyectos"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Proyectos destacados
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-300">
        <ArrowDown className="h-5 w-5" />
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-blue-100 hover:border-blue-200 hover:scale-105 cursor-default">
      {children}
    </span>
  );
}

function MiniBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600">
      {children}
    </span>
  );
}

const STACK_SECTIONS = [
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend" },
  { key: "databases" as const, label: "Bases de Datos" },
  { key: "tools" as const, label: "Herramientas" },
];

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-gray-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Sobre mí
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stack Tecnológico
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            Me especializo en crear soluciones web escalables y de alto
            rendimiento, combinando las mejores tecnologías del ecosistema
            moderno para entregar productos de calidad.
          </p>
        </div>

        {/* Stack badges — 4 columns grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STACK_SECTIONS.map(({ key, label }) => (
            <div
              key={key}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {STACK[key].map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Always visible */}
      <div className="p-8 pb-0">
        {/* Icon */}
        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
          {project.icon}
        </div>

        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <div className="min-h-[48px]">
          {project.subtitle && (
            <p className="mt-0.5 text-sm font-medium text-gray-400">
              {project.subtitle}
            </p>
          )}
        </div>
        <div className="min-h-[72px]">
          <p className="mt-2 text-base leading-relaxed text-gray-500">
            {project.description}
          </p>
        </div>
      </div>

      {/* Expand / collapse toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mx-8 mt-4 inline-flex items-center gap-1 self-start text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700"
      >
        {expanded ? "Ver menos" : "Ver más"}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expandable details */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 pt-4 pb-2">
          <p className="text-sm leading-relaxed text-gray-600">
            {project.expandedDescription}
          </p>

          {/* Status badge (e.g. Beta) */}
          {project.statusBadge && (
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
              {project.statusBadge}
            </div>
          )}

          {/* Tech stack mini-badges */}
          <div className="mt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Tecnologías usadas
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <MiniBadge key={tech}>{tech}</MiniBadge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer — link or "Próximamente" */}
      <div className="mt-auto border-t border-gray-100 px-8 py-4">
        {project.comingSoon ? (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 cursor-default">
            🚧 Próximamente
          </span>
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
          >
            {project.linkLabel}
            <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        )}
      </div>
    </div>
  );
}
function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Proyectos Destacados
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Una selección de trabajos que reflejan mi enfoque en calidad,
            rendimiento y buena experiencia de usuario.
          </p>
        </div>

        {/* Project cards grid */}
        <div className="mt-14 grid gap-8 items-start sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-gray-100 bg-gray-50 py-20"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Contacto
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Open to Work
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-gray-500">
          Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en
          contactarme.
        </p>

        {/* Social icons */}
        <div className="mt-10 flex items-center justify-center gap-4">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              id={`social-${social.label.toLowerCase()}`}
              aria-label={social.label}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md hover:-translate-y-0.5"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-14 text-sm text-gray-400">
          © {new Date().getFullYear()} Andres Coseani.
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
      <ContactSection />
    </>
  );
}
