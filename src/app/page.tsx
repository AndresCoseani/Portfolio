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
import React from "react";
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
  frontend: ["TypeScript", "Next.js", "React", "Tailwind CSS", "HTML5/CSS3"],
  backend: ["NestJS", "Node.js", "Express.js", "REST API"],
  databases: ["Firebase", "PostgreSQL", "Supabase", "MongoDB"],
  tools: ["Git", "GitHub", "Jira", "Scrum / Agile"],
} as const;

type Project = {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  expandedDescription: string;
  status: string;
  technologies: string[];
  link?: string;
  linkLabel?: string;
  githubLink?: string;
  icon?: React.ReactNode;
};

const PROJECTS: Project[] = [
  {
    id: "hostelpet",
    title: "HostelPet",
    subtitle: "Marketplace de cuidadores de mascotas",
    shortDescription:
      "Plataforma que conecta dueños de mascotas con cuidadores verificados según sus preferencias.",
    expandedDescription:
      "Sistema de reservas estilo Airbnb para mascotas. Permite a los dueños encontrar cuidadores verificados filtrando por tipo de mascota, disponibilidad y preferencias. Desarrollé la mayor parte del backend con NestJS bajo arquitectura modular, endpoints REST con DTOs tipados, autenticación con Firebase y colaboré en el frontend con Next.js.",
    status: "En producción",
    technologies: ["NestJS", "Next.js", "TypeScript", "Firebase"],
    link: "https://hostelpet.com.ar/hostel-pet/search",
    linkLabel: "Ver sitio",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: "andera-booking",
    title: "Andera Booking",
    subtitle: "Sistema de reservas para negocios físicos",
    shortDescription:
      "Plataforma de agendamiento con panel de administración, disponibilidad en tiempo real e integración con Meta API.",
    expandedDescription:
      "Sistema desarrollado de cero para una estética: landing page pública, panel de administración para gestionar horarios, servicios, turnos y clientes, integración con la API de Meta y webhooks para recordatorios automáticos de turnos. Cubrí el ciclo completo: análisis, desarrollo, testing y despliegue.",
    status: "En producción",
    technologies: ["Next.js", "NestJS", "TypeScript", "Firebase", "Vercel"],
    link: "https://andera-booking.vercel.app/sofiacoseanibeautystudio",
    linkLabel: "Ver sitio",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: "blinker",
    title: "Blinker",
    subtitle: "Conectando personas con profesionales",
    shortDescription:
      "Plataforma de servicios en tiempo real que conecta personas con profesionales verificados.",
    expandedDescription:
      "Plataforma que simplifica la contratación de servicios mediante perfiles reales, reseñas verificadas y contratos de API estables. Trabajé en equipo de 3 developers coordinando mediante Jira, implementé autenticación con Firebase Auth, desarrollé y consumí APIs REST y realicé integraciones sobre Firestore.",
    status: "En producción",
    technologies: ["Next.js", "NestJS", "TypeScript", "Firebase"],
    link: "https://appblinker.com",
    linkLabel: "Ver sitio",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    id: "don-nildo",
    title: "Sistema ERP Industrial",
    subtitle: "Gestión administrativa y logística centralizada",
    shortDescription:
      "ERP web completo para digitalizar la operativa de una planta industrial.",
    expandedDescription:
      "Sistema desarrollado desde cero para HydroPack, integrando módulos de compra, venta, control de inventario, seguridad y reportes. Implementé PostgreSQL con Row Level Security (RLS) y control de acceso por rol de usuario. Construí la API REST con Express.js en arquitectura en capas y el frontend en React con Tailwind CSS.",
    status: "En producción",
    technologies: ["React", "Node.js", "Express.js", "Supabase", "PostgreSQL"],
    githubLink: "https://github.com/AndresCoseani/Demo_recycling_management",
    linkLabel: "Ver Demo",
    icon: <Code2 className="h-5 w-5" />,
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
          className="text-lg font-semibold tracking-tight text-gray-900 transition-colors hover:text-gray-600"
        >
          Andres Coseani
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-gray-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
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
        className={`overflow-hidden transition-all duration-300 md:hidden ${mobileOpen ? "max-h-60 border-b border-gray-100" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
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

function GlitchName() {
  const [glitching, setGlitching] = React.useState(false);

  React.useEffect(() => {
    // Trigger glitch on mount
    const t1 = setTimeout(() => setGlitching(true), 300);
    const t2 = setTimeout(() => setGlitching(false), 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="relative inline-block">
      <style>{`
        @keyframes glitch-1 {
          0%   { clip-path: inset(0 0 95% 0); transform: translate(-4px, 0); }
          20%  { clip-path: inset(30% 0 50% 0); transform: translate(4px, 0); }
          40%  { clip-path: inset(60% 0 20% 0); transform: translate(-3px, 0); }
          60%  { clip-path: inset(10% 0 75% 0); transform: translate(3px, 0); }
          80%  { clip-path: inset(80% 0 5% 0);  transform: translate(-2px, 0); }
          100% { clip-path: inset(0 0 95% 0); transform: translate(0, 0); }
        }
        @keyframes glitch-2 {
          0%   { clip-path: inset(50% 0 30% 0); transform: translate(4px, 0); }
          25%  { clip-path: inset(15% 0 70% 0); transform: translate(-4px, 0); }
          50%  { clip-path: inset(75% 0 10% 0); transform: translate(3px, 0); }
          75%  { clip-path: inset(40% 0 45% 0); transform: translate(-3px, 0); }
          100% { clip-path: inset(50% 0 30% 0); transform: translate(0, 0); }
        }
        .glitch-active .glitch-layer-1 { animation: glitch-1 0.4s steps(1) forwards; }
        .glitch-active .glitch-layer-2 { animation: glitch-2 0.4s steps(1) 0.1s forwards; }
      `}</style>

      {/* Base text */}
      <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl pb-2 text-emerald-700">
        Andrés Coseani
      </h1>

      {/* Glitch layers */}
      <div
        className={`absolute inset-0 pointer-events-none ${glitching ? "glitch-active" : ""}`}
      >
        <h1 className="glitch-layer-1 absolute inset-0 text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl pb-2 text-emerald-700 opacity-80">
          Andrés Coseani
        </h1>
        <h1 className="glitch-layer-2 absolute inset-0 text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl pb-2 text-emerald-600 opacity-60">
          Andrés Coseani
        </h1>
      </div>
    </div>
  );
}

function HeroVisual() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const PARTICLE_COUNT = 60;
    const COLORS = [
      "#064e3b",
      "#065f46",
      "#047857",
      "#059669",
      "#10b981",
      "#34d399",
    ];

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      angle: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2.5 + 1;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.angle = -Math.PI / 4;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = 0.8;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.fillRect(
          -this.size * 1.5,
          -this.size / 2,
          this.size * 3,
          this.size,
        );
        ctx.restore();
      }

      update() {
        this.baseX += this.vx;
        this.baseY += this.vy;
        if (this.baseX < 0 || this.baseX > canvas!.width) this.vx *= -1;
        if (this.baseY < 0 || this.baseY > canvas!.height) this.vy *= -1;
        this.x = this.baseX;
        this.y = this.baseY;
        this.draw();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
          ),
        );
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
        init();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    animate();
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Terminal card flotante */}
      <div className="relative z-10 w-72 rounded-2xl border border-emerald-900/20 bg-gray-950/90 backdrop-blur-md shadow-2xl shadow-emerald-900/30 overflow-hidden">
        {/* Terminal header */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-gray-900/60">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-gray-500 font-mono">
            andres@dev ~
          </span>
        </div>
        {/* Terminal body */}
        <div className="px-4 py-5 font-mono text-sm space-y-2">
          <div>
            <span className="text-emerald-500">▸</span>{" "}
            <span className="text-gray-400">stack</span>
          </div>
          <div className="pl-4 text-gray-300">
            Next.js <span className="text-emerald-600">·</span> NestJS
          </div>
          <div className="pl-4 text-gray-300">
            TypeScript <span className="text-emerald-600">·</span> React
          </div>
          <div className="pl-4 text-gray-300">
            PostgreSQL <span className="text-emerald-600">·</span> Firebase
          </div>
          <div className="mt-3">
            <span className="text-emerald-500">▸</span>{" "}
            <span className="text-gray-400">role</span>
          </div>
          <div className="pl-4 text-gray-300">Fullstack Developer</div>
          <div className="pl-4 text-gray-300">Analista en Sistemas</div>
          <div className="mt-3">
            <span className="text-emerald-500">▸</span>{" "}
            <span className="text-gray-400">status</span>
          </div>
          <div className="pl-4 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-400">open to work</span>
          </div>
          <div className="mt-2 text-gray-600 text-xs">
            █<span className="animate-pulse">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)]">
          {/* LEFT — texto */}
          <div className="flex flex-col justify-center animate-float">
            <GlitchName />

            <p className="mt-6 text-xl font-medium text-gray-500 sm:text-2xl">
              Full Stack Developer{" "}
              <span className="text-emerald-700 font-semibold">·</span> Analista
              en Sistemas
            </p>

            <p className="mt-3 flex items-center gap-1.5 text-base text-gray-400">
              <MapPin className="h-4 w-4" />
              Córdoba, Argentina
            </p>

            <p className="mt-8 text-base text-gray-500 leading-relaxed max-w-md">
              Experiencia en el ciclo completo del software — desde el análisis
              y la arquitectura hasta el despliegue en producción. Construyo
              sistemas escalables y mantenibles con tecnologías modernas.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:bg-emerald-800 hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
              >
                Ver proyectos
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-7 py-3.5 text-sm font-semibold text-emerald-800 shadow-sm transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-300 hover:shadow-md hover:-translate-y-1 active:translate-y-0"
              >
                Contacto
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* RIGHT — visual con partículas y terminal */}
          <div className="hidden lg:block h-[500px] animate-float" style={{ animationDelay: '1s' }}>
            <HeroVisual />
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
    <span className="inline-flex items-center rounded-full border border-gray-100 bg-gray-50/50 backdrop-blur-sm px-3.5 py-1.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 hover:scale-110 cursor-default shadow-sm">
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
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-50/40 blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-50/40 blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Sobre mí
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            Experiencia práctica en el ciclo de vida completo del software,
            desde la definición de arquitectura y bases de datos hasta el
            despliegue en producción. Enfoque en construir sistemas mantenibles
            y robustos, priorizando la resolución eficiente de problemas
            técnicos y de negocio.
          </p>
          <h2 className="mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stack Tecnológico
          </h2>
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

function ProductionBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/60 px-3 py-1 text-xs font-bold text-emerald-700">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
      En producción
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group glass-card flex flex-col rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2">
      <div className="p-8 pb-0 flex flex-col h-[300px]">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 text-gray-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-6 group-hover:scale-110 shadow-sm">
          {project.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
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
            {project.shortDescription}
          </p>
        </div>
      </div>

      <div className="mx-8 mt-4 flex items-center gap-3 flex-wrap">
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 transition-all duration-200 hover:gap-2"
        >
          {expanded ? "Ver menos" : "Ver más detalles"}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-500 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5"
          >
            <span>{project.linkLabel}</span>
            <ExternalLink className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        )}

        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-1.5 rounded-lg bg-gray-900 px-4 py-1.5 text-xs font-bold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-md hover:-translate-y-0.5"
          >
            <span>{project.linkLabel}</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-8 pt-4 pb-2">
          <div className="rounded-xl bg-gray-50/50 p-4 border border-gray-100">
            <p className="text-sm leading-relaxed text-gray-600">
              {project.expandedDescription}
            </p>
          </div>
          <div className="mt-4">
            <ProductionBadge />
          </div>
          <div className="mt-5">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-gray-400">
              Tecnologías usadas
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <MiniBadge key={tech}>{tech}</MiniBadge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pb-6" />
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 py-24 relative">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
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
            <ProjectCard key={project.id} project={project} />
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(5,150,105,0.04)_0%,transparent_100%)]" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
          Contacto
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Open to Work
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
          Estoy disponible y buscando sumarme a un equipo de desarrollo. Si
          estás buscando incorporar un perfil Full Stack, mi bandeja de entrada
          está abierta.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="/Andres_Coseani_CV.pdf"
            download="Andres_Coseani_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-1 active:translate-y-0"
          >
            Descargar CV
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
        <div className="mt-12 flex items-center justify-center gap-6">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="group relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-gray-200 text-gray-500 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:text-emerald-600 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-emerald-50 opacity-0 transition-opacity group-hover:opacity-100" />
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
          stroke="url(#g0)"
          strokeWidth="1.5"
          className="animate-flow"
        />
        <path
          d="M-100 400C300 300 500 700 800 600C1100 500 1300 900 1600 800"
          stroke="url(#g1)"
          strokeWidth="1"
          className="animate-flow"
          style={{ animationDelay: "-5s" }}
        />
        <path
          d="M1540 100C1240 200 1040 -200 740 -100C440 0 240 400 -60 300"
          stroke="url(#g2)"
          strokeWidth="1.5"
          className="animate-flow"
          style={{ animationDelay: "-12s" }}
        />
        <defs>
          <linearGradient
            id="g0"
            x1="0"
            y1="0"
            x2="1440"
            y2="900"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#059669" stopOpacity="0" />
            <stop offset="0.5" stopColor="#059669" stopOpacity="0.35" />
            <stop offset="1" stopColor="#059669" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="g1"
            x1="0"
            y1="0"
            x2="1440"
            y2="900"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#34d399" stopOpacity="0" />
            <stop offset="0.5" stopColor="#34d399" stopOpacity="0.25" />
            <stop offset="1" stopColor="#34d399" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="g2"
            x1="0"
            y1="0"
            x2="1440"
            y2="900"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#10b981" stopOpacity="0" />
            <stop offset="0.5" stopColor="#10b981" stopOpacity="0.2" />
            <stop offset="1" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
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
