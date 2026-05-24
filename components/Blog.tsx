"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { blogPosts } from "@/lib/data";
import { ArrowUpRight, Clock } from "lucide-react";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="px-6 py-20 border-t border-white/[0.05]">
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
            Writing
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
            Blog Posts
          </h2>
          <p className="mt-2.5 text-sm text-zinc-500 max-w-lg leading-relaxed">
            Thoughts on development, tooling, and the occasional deep dive into
            things that caught my attention.
          </p>
        </motion.div>

        {/* Post list */}
        <ul className="flex flex-col divide-y divide-white/[0.05]">
          {blogPosts.map((post, i) => (
            <motion.li
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <a
                href={`/blog/${post.slug}`}
                className="group flex items-start justify-between gap-4 py-4 -mx-2 px-2 rounded-lg hover:bg-white/[0.02] transition-colors duration-200"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors mb-1 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed line-clamp-1 mb-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[11px] text-zinc-600">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-zinc-700 text-[11px]">·</span>
                    <span className="flex items-center gap-1 text-[11px] text-zinc-600">
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="shrink-0 text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-0.5"
                />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-7 flex justify-center"
        >
          <a
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            View all posts
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
