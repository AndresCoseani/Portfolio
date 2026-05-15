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

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-gray-900 transition-colors hover:text-blue-600"
        >
          Andres Coseani
        </a>

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
      <div className="glow-bg" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <div className="mb-6 animate-float inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-emerald-700">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          Disponible para nuevos proyectos
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          Hola, soy{" "}
          <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
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

        <div className="flex justify-center gap-4">
          <div className="mt-10">
            <a
              href="#about"
              id="cta-ver-stack"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 active:translate-y-0"
            >
              Conocé mi stack
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>
          <div className="mt-10">
            <a
              href="#projects"
              id="cta-ver-proyectos"
              className="group inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-7 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:border-blue-200 hover:text-blue-600 hover:shadow-md hover:-translate-y-1 active:translate-y-0"
            >
              Proyectos destacados
              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-300">
        <ArrowDown className="h-5 w-5" />
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50/50 backdrop-blur-sm px-3.5 py-1.5 text-sm font-medium text-blue-700 transition-all duration-300 hover:bg-blue-100 hover:border-blue-200 hover:scale-110 cursor-default shadow-sm">
      {children}
    </span>
  );
}

function MiniBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-100 bg-white/50 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-gray-600">
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
    <section id="about" className="scroll-mt-20 relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-50/50 blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-5xl px-6">
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STACK_SECTIONS.map(({ key, label }) => (
            <div
              key={key}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
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
    <div className="group glass-card flex flex-col rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
      <div className="p-8 pb-0">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 group-hover:scale-110 shadow-sm">
          {project.icon}
        </div>

        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <div className="min-h-[48px]">
          {project.subtitle && (
            <p className="mt-1 text-sm font-semibold text-gray-400">
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

      <button
        onClick={() => setExpanded(!expanded)}
        className="mx-8 mt-4 inline-flex items-center gap-1.5 self-start text-sm font-bold text-blue-600 transition-all duration-200 hover:gap-2"
      >
        {expanded ? "Ver menos" : "Ver más detalles"}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-500 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 pt-4 pb-2">
          <div className="rounded-xl bg-gray-50/50 p-4 border border-gray-100">
            <p className="text-sm leading-relaxed text-gray-600">
              {project.expandedDescription}
            </p>
          </div>

          {project.statusBadge && (
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50/50 backdrop-blur-sm px-3 py-1 text-xs font-bold text-amber-700">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              {project.statusBadge}
            </div>
          )}

          <div className="mt-5">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-gray-400">
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

      <div className="mt-auto px-8 py-6">
        {project.comingSoon ? (
          <div className="flex items-center gap-2 py-2 px-4 rounded-xl bg-gray-50 border border-gray-100 w-fit">
            <span className="text-lg">🚧</span>
            <span className="text-sm font-bold text-gray-400">
              Próximamente
            </span>
          </div>
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <span className="relative z-10">{project.linkLabel}</span>
            <ExternalLink className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 py-24 relative">
      <div className="mx-auto max-w-4xl px-6">
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

        <div className="mt-16 grid gap-10 items-start sm:grid-cols-2">
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
      className="scroll-mt-20 border-t border-gray-100 relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(37,99,235,0.03)_0%,transparent_100%)]" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Contacto
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          ¿Hablamos de tu próximo proyecto?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-gray-500">
          Estoy disponible para nuevas oportunidades y colaboraciones.
        </p>

        <div className="mt-12 flex items-center justify-center gap-6">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              id={`social-${social.label.toLowerCase()}`}
              aria-label={social.label}
              className="group relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-gray-200 text-gray-500 shadow-sm transition-all duration-300 hover:border-blue-500 hover:text-blue-600 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-blue-50 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative z-10">{social.icon}</span>
            </a>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-gray-100">
          <p className="text-sm font-medium text-gray-400">
            © {new Date().getFullYear()} Andres Coseani.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FlowingLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-40">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 200C200 100 400 500 700 400C1000 300 1200 700 1500 600"
          stroke="url(#paint0_linear)"
          strokeWidth="1.5"
          className="animate-flow"
        />
        <path
          d="M-100 400C300 300 500 700 800 600C1100 500 1300 900 1600 800"
          stroke="url(#paint1_linear)"
          strokeWidth="1"
          className="animate-flow"
          style={{ animationDelay: "-5s" }}
        />
        <path
          d="M1540 100C1240 200 1040 -200 740 -100C440 0 240 400 -60 300"
          stroke="url(#paint2_linear)"
          strokeWidth="1.5"
          className="animate-flow"
          style={{ animationDelay: "-12s" }}
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="1440"
            y2="900"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="0.5" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="0"
            y1="0"
            x2="1440"
            y2="900"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#94A3B8" stopOpacity="0" />
            <stop offset="0.5" stopColor="#94A3B8" stopOpacity="0.3" />
            <stop offset="1" stopColor="#94A3B8" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="0"
            y1="0"
            x2="1440"
            y2="900"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#60A5FA" stopOpacity="0" />
            <stop offset="0.5" stopColor="#60A5FA" stopOpacity="0.2" />
            <stop offset="1" stopColor="#60A5FA" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <div className="grid-bg" />
      <FlowingLines />
      <Navbar />
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
      <ContactSection />
    </div>
  );
}
