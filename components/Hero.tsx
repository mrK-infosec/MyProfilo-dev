"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon, XIcon, LinkedInIcon } from "./icons";
import Image from "next/image";
import profilePic from "@/public/profile.png";


const iconMap = {
  github: GitHubIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      {/* Gradient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,1) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,1) 0%, transparent 70%)",
        }}
      />

      {/* Content — grid layout to show text on left and glowing profile photo on right */}
      <div className="relative max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* Left Column: Text content */}
        <div className="md:col-span-7 order-2 md:order-1 text-left flex flex-col items-start">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs text-zinc-400 font-medium">
              Open to opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-100 tracking-tight leading-[1.1] mb-5"
          >
            Hey, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Abdelrahman
            </span>{" "}
            👋
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-medium mb-5 tracking-tight"
          >
            Fullstack Developer &middot; Web3 Enthusiast &middot; Open-Source
            Contributor
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-zinc-500 leading-relaxed max-w-xl mb-9"
          >
            I build fast, clean, and accessible web experiences — from
            pixel-perfect UIs to robust backend systems. Passionate about Web3
            primitives, developer tooling, and turning complex problems into
            elegant solutions. Currently crafting production apps with Next.js,
            TypeScript, and Prisma.
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-2 flex-wrap"
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="group flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:text-zinc-100 hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-200 text-sm"
                >
                  <Icon size={14} />
                  <span>{link.name}</span>
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity -ml-0.5"
                  />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Right Column: Profile photo with modern glow frame */}
        <div className="md:col-span-5 order-1 md:order-2 flex justify-center mb-6 md:mb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative group shrink-0"
          >
            {/* Ambient background glow ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 rounded-full blur-xl opacity-35 group-hover:opacity-60 transition duration-1000 group-hover:duration-300 pointer-events-none" />

            {/* Interactive container */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-white/[0.1] bg-zinc-950 flex items-center justify-center shadow-2xl">
              <Image
                src={profilePic}
                alt="Abdelrahman Adel"
                width={256}
                height={256}
                priority
                placeholder="blur"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Outer glass border sheen overlay */}
              <div className="absolute inset-0 rounded-full border border-white/[0.05] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue at very bottom of section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
