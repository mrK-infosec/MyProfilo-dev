import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/data";
import { ArrowUpRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on development, tooling, and technology by Abdelrahman Adel.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 pt-32 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-medium text-violet-400 uppercase tracking-widest mb-3">
              Writing
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
              Blog Posts
            </h1>
            <p className="text-sm text-zinc-500 max-w-lg">
              Thoughts on development, tooling, and the occasional deep dive.
            </p>
          </div>

          <ul className="flex flex-col divide-y divide-white/[0.04]">
            {blogPosts.map((post) => (
              <li key={post.id}>
                <a
                  href={`/blog/${post.slug}`}
                  className="group flex items-start justify-between gap-4 py-6 hover:bg-white/[0.02] -mx-3 px-3 rounded-lg transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h2 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors mb-2 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-xs text-zinc-500 leading-relaxed mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-zinc-600 bg-zinc-900 px-2 py-0.5 rounded-md border border-white/[0.05]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-zinc-600">
                        {formatDate(post.date)}
                      </span>
                      <span className="text-zinc-700">·</span>
                      <span className="flex items-center gap-1 text-[11px] text-zinc-600">
                        <Clock size={10} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="shrink-0 text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
