"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const techColors: Record<string, string> = {
  "Next.js": "bg-zinc-800 text-zinc-300",
  TypeScript: "bg-blue-950/60 text-blue-300",
  React: "bg-cyan-950/60 text-cyan-300",
  "Tailwind CSS": "bg-teal-950/60 text-teal-300",
  Prisma: "bg-indigo-950/60 text-indigo-300",
  PostgreSQL: "bg-sky-950/60 text-sky-300",
  Supabase: "bg-emerald-950/60 text-emerald-300",
  "Framer Motion": "bg-purple-950/60 text-purple-300",
  Recharts: "bg-orange-950/60 text-orange-300",
  "Shadcn UI": "bg-zinc-800 text-zinc-300",
};

function getTagClass(tag: string) {
  return techColors[tag] ?? "bg-zinc-800/60 text-zinc-400";
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="px-6 py-20 border-t border-white/[0.05]"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">
            Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
            Selected Projects
          </h2>
          <p className="mt-2.5 text-sm text-zinc-500 max-w-lg leading-relaxed">
            A collection of things I&apos;ve built — from SaaS products to
            developer tools and open-source experiments.
          </p>
        </motion.div>

        {/* Project list */}
        <div className="flex flex-col gap-3">
          {featured.map((project, i) => (
            <motion.a
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col sm:flex-row gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
            >
              {/* Shine overlay */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-violet-500/[0.04] via-transparent to-transparent" />

              {/* Image placeholder */}
              <div className="shrink-0 w-full sm:w-28 h-16 sm:h-16 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/[0.06] flex items-center justify-center">
                <span className="text-xl font-bold opacity-20 text-zinc-400 select-none">
                  {project.title.charAt(0)}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={13}
                    className="shrink-0 text-zinc-600 group-hover:text-zinc-400 transition-colors mt-0.5"
                  />
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium ${getTagClass(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-7 flex justify-center"
        >
          <a
            href="https://github.com/abdelrahmanadel"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            View all projects on GitHub
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
