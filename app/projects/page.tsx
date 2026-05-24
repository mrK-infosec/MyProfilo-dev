import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: "All projects built by Abdelrahman Adel.",
};

const techColors: Record<string, string> = {
  "Next.js": "bg-zinc-800 text-zinc-300",
  "TypeScript": "bg-blue-950/60 text-blue-300",
  "React": "bg-cyan-950/60 text-cyan-300",
  "Tailwind CSS": "bg-teal-950/60 text-teal-300",
  "Prisma": "bg-indigo-950/60 text-indigo-300",
  "PostgreSQL": "bg-sky-950/60 text-sky-300",
  "Supabase": "bg-emerald-950/60 text-emerald-300",
  "Framer Motion": "bg-purple-950/60 text-purple-300",
  "Recharts": "bg-orange-950/60 text-orange-300",
};

function getTagClass(tag: string) {
  return techColors[tag] ?? "bg-zinc-800/60 text-zinc-400";
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 pt-32 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-medium text-violet-400 uppercase tracking-widest mb-3">
              Work
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
              All Projects
            </h1>
            <p className="text-sm text-zinc-500 max-w-lg">
              Everything I&apos;ve built, shipped, or experimented with.
            </p>
          </div>

          <div className="grid gap-4">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col sm:flex-row gap-5 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
              >
                <div className="shrink-0 w-full sm:w-32 h-20 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/[0.06] flex items-center justify-center">
                  <div className="text-2xl opacity-30 select-none">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
                      {project.title}
                    </h2>
                    <ExternalLink
                      size={14}
                      className="shrink-0 text-zinc-600 group-hover:text-zinc-400 transition-colors mt-0.5"
                    />
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-3">
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
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
