"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { socialLinks } from "@/lib/data";
import { Mail } from "lucide-react";
import { GitHubIcon, XIcon, LinkedInIcon } from "./icons";

const iconMap = {
  github: GitHubIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer
      id="contact"
      className="px-6 py-20 border-t border-white/[0.05]"
      ref={ref}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-4">
            Get in touch
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight mb-3">
            Let&apos;s work together
          </h2>
          <p className="text-sm text-zinc-500 max-w-sm mx-auto mb-8 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of something great.
          </p>

          {/* Email button */}
          <motion.a
            href="mailto:contact@abdelrahman.dev"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors duration-200 mb-10"
          >
            <Mail size={14} />
            contact@abdelrahman.dev
          </motion.a>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-3 mb-10">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2.5 text-zinc-600 hover:text-zinc-300 transition-colors rounded-lg hover:bg-white/[0.05]"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-7 border-t border-white/[0.05]">
            <p className="text-xs text-zinc-700 font-medium">
              abdelrahman.dev
            </p>
            <p className="text-xs text-zinc-700">
              &copy; {new Date().getFullYear()} Abdelrahman Adel. All rights
              reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
